import * as fs from "fs";
import * as path from "path";
import { LoggingService } from "../logging";
import {
  collectCourseMatchedFiles,
  extractLocalAssetFileNamesFromLine,
  extractOriginalIdAboveStart,
  extractOwnIdFromBlock,
  extractSourceIdFromBlock,
  findNonCanonicalLocalAssetLinks,
  findSectionNameForLine,
  FlashcardBlock,
  listMarkdownFiles,
  normalizeLocalAssetLinkSyntax,
  normalizeForComparison,
  parseFlashcardBlocks,
  parseRecommendationAboveStart,
  rewriteAssetLinksInLine,
} from "./MigrationCommon";

export type MigrationIssueName =
  | "InvalidMigratedFormat"
  | "MissingMigratedFlashcard"
  | "ContentMismatch"
  | "MissingOriginalIdComment"
  | "ContainsSourceIdComment"
  | "MissingTargetExamNote"
  | "OriginalIdInWrongLocation"
  | "MissingSourceIdComment"
  | "NonUniqueOwnId"
  | "MissingAssetInTarget";

export interface MigrationIssue {
  name: MigrationIssueName;
  message: string;
  context?: Record<string, unknown>;
}

export interface MigratedRunnerResult {
  totalSource: number;
  totalTarget: number;
  issues: Array<MigrationIssue & { file?: string; id?: string }>;
}

interface TargetCardRef {
  id: string;
  filePath: string;
  sectionName: string | null;
  block: FlashcardBlock;
  fileLines: string[];
}

export class MigratedFlashcardsRunner {
  private readonly logger: LoggingService;

  constructor(logger: LoggingService) {
    this.logger = logger;
  }

  run(
    sourceRepoPath: string,
    statniceVaultPath: string,
    courseIds: string[]
  ): MigratedRunnerResult {
    const sourceNotesDir = path.join(sourceRepoPath, "Notes");
    const targetNotesDir = path.join(statniceVaultPath, "Notes", "Magisterske");
    const targetAssetsDir = path.join(statniceVaultPath, "Assets");
    const result: MigratedRunnerResult = {
      totalSource: 0,
      totalTarget: 0,
      issues: [],
    };

    if (!fs.existsSync(sourceNotesDir) || !fs.existsSync(targetNotesDir)) {
      this.logger.error({
        name: "InputPathsMissing",
        message: "Source or target notes directory missing",
        fixInstructions: "Verify fitNotesRepoPath and FIT-Statnice vault path",
        context: { sourceNotesDir, targetNotesDir },
      });
      return result;
    }

    const normalizedCourseIds = [...new Set(courseIds.filter(Boolean))];
    const targetFileByExamNoteId = this.buildExamNoteFileMap(
      targetNotesDir,
      normalizedCourseIds
    );
    const targetIndex = this.buildTargetCardIndex(targetNotesDir, normalizedCourseIds);
    result.totalTarget = targetIndex.totalTargetBlocks;

    const ownIdCounts = this.collectOwnIdCounts(sourceNotesDir, targetNotesDir);
    const sourceFiles = collectCourseMatchedFiles(sourceNotesDir, normalizedCourseIds);
    for (const sourceFile of sourceFiles) {
      this.validateSourceFile(
        sourceFile.filePath,
        targetFileByExamNoteId,
        targetIndex.byOriginalId,
        ownIdCounts,
        targetAssetsDir,
        result
      );
    }

    return result;
  }

  private buildExamNoteFileMap(
    targetNotesDir: string,
    courseIds: string[]
  ): Map<string, string> {
    const map = new Map<string, string>();
    const files = listMarkdownFiles(targetNotesDir).filter((filePath) =>
      courseIds.some((courseId) => path.basename(filePath).includes(courseId))
    );

    for (const filePath of files) {
      const fileName = path.basename(filePath);
      const examNoteId = this.extractExamNoteId(fileName);
      if (!examNoteId || map.has(examNoteId)) continue;
      map.set(examNoteId, filePath);
    }

    return map;
  }

  private extractExamNoteId(fileName: string): string {
    const noExt = fileName.replace(/\.md$/i, "").trim();
    const firstSpace = noExt.indexOf(" ");
    if (firstSpace === -1) return noExt;
    return noExt.substring(0, firstSpace).trim();
  }

  private buildTargetCardIndex(
    targetNotesDir: string,
    courseIds: string[]
  ): { byOriginalId: Map<string, TargetCardRef[]>; totalTargetBlocks: number } {
    const byOriginalId = new Map<string, TargetCardRef[]>();
    let totalTargetBlocks = 0;
    const files = listMarkdownFiles(targetNotesDir).filter((filePath) =>
      courseIds.some((courseId) => path.basename(filePath).includes(courseId))
    );

    for (const filePath of files) {
      const fileLines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
      const blocks = parseFlashcardBlocks(fileLines);
      totalTargetBlocks += blocks.length;

      for (const block of blocks) {
        const originalId = extractOriginalIdAboveStart(fileLines, block.startIndex);
        if (!originalId) continue;
        const entry: TargetCardRef = {
          id: originalId,
          filePath,
          sectionName: findSectionNameForLine(fileLines, block.startIndex),
          block,
          fileLines,
        };
        const arr = byOriginalId.get(originalId) ?? [];
        arr.push(entry);
        byOriginalId.set(originalId, arr);
      }
    }

    return { byOriginalId, totalTargetBlocks };
  }

  private collectOwnIdCounts(
    sourceNotesDir: string,
    targetNotesDir: string
  ): Map<string, number> {
    const counts = new Map<string, number>();
    const files = [...listMarkdownFiles(sourceNotesDir), ...listMarkdownFiles(targetNotesDir)];
    const idRe = /<!--\s*ID\s*:\s*([^\n<]+?)\s*-->/gi;

    for (const filePath of files) {
      const content = fs.readFileSync(filePath, "utf8");
      for (const match of content.matchAll(idRe)) {
        const id = match[1].trim();
        counts.set(id, (counts.get(id) ?? 0) + 1);
      }
    }
    return counts;
  }

  private validateSourceFile(
    sourceFilePath: string,
    targetFileByExamNoteId: Map<string, string>,
    targetByOriginalId: Map<string, TargetCardRef[]>,
    ownIdCounts: Map<string, number>,
    targetAssetsDir: string,
    result: MigratedRunnerResult
  ): void {
    const lines = fs.readFileSync(sourceFilePath, "utf8").split(/\r?\n/);
    const blocks = parseFlashcardBlocks(lines);

    for (const block of blocks) {
      const recommendation = parseRecommendationAboveStart(lines, block.startIndex);
      if (!recommendation) continue;
      if (recommendation.migrationStatus !== "done") continue;
      if (
        recommendation.examNoteId === "none" ||
        recommendation.examNoteSectionName === "none"
      ) {
        continue;
      }

      result.totalSource += 1;
      const sourceId = extractSourceIdFromBlock(block);
      if (!sourceId) {
        result.issues.push({
          name: "MissingSourceIdComment",
          message: "Source done flashcard is missing ID comment",
          file: sourceFilePath,
        });
        continue;
      }

      const expectedTargetFile = targetFileByExamNoteId.get(recommendation.examNoteId);
      if (!expectedTargetFile) {
        result.issues.push({
          name: "MissingTargetExamNote",
          message: `Target exam note not found for ${recommendation.examNoteId}`,
          file: sourceFilePath,
          id: sourceId,
        });
        continue;
      }

      const candidates = targetByOriginalId.get(sourceId) ?? [];
      if (candidates.length === 0) {
        result.issues.push({
          name: "MissingMigratedFlashcard",
          message: `No migrated flashcard for id ${sourceId}`,
          file: sourceFilePath,
          id: sourceId,
        });
        continue;
      }

      const expectedCandidates = candidates.filter(
        (candidate) =>
          candidate.filePath === expectedTargetFile &&
          candidate.sectionName === recommendation.examNoteSectionName
      );
      if (expectedCandidates.length === 0) {
        result.issues.push({
          name: "OriginalIdInWrongLocation",
          message:
            "Migrated flashcard exists, but not in expected exam note/section",
          file: sourceFilePath,
          id: sourceId,
        });
        continue;
      }

      const targetCard = expectedCandidates[0];
      this.validateTargetFormat(targetCard, sourceFilePath, sourceId, result);
      this.validateTargetContent(targetCard, block, sourceFilePath, sourceId, result);
      this.validateOwnIdUniqueness(targetCard, ownIdCounts, sourceFilePath, sourceId, result);
      this.validateTargetAssets(targetCard, targetAssetsDir, sourceFilePath, sourceId, result);
    }
  }

  private validateTargetFormat(
    target: TargetCardRef,
    sourceFilePath: string,
    sourceId: string,
    result: MigratedRunnerResult
  ): void {
    const lines = target.block.rawLines;
    if (lines.length < 4) {
      result.issues.push({
        name: "InvalidMigratedFormat",
        message: "Flashcard block too short",
        file: target.filePath,
        id: sourceId,
      });
      return;
    }

    const originalId = extractOriginalIdAboveStart(target.fileLines, target.block.startIndex);
    if (!originalId) {
      result.issues.push({
        name: "MissingOriginalIdComment",
        message: "Missing Original Flashcard ID comment above START",
        file: target.filePath,
        id: sourceId,
      });
    }

    if (lines[1]?.trim() !== "NI-SZZ") {
      result.issues.push({
        name: "InvalidMigratedFormat",
        message: "Missing NI-SZZ type line",
        file: target.filePath,
        id: sourceId,
      });
    }

    if (!lines.some((line) => line.trim() === "Back:")) {
      result.issues.push({
        name: "InvalidMigratedFormat",
        message: "Missing Back: line",
        file: target.filePath,
        id: sourceId,
      });
    }

    const afterEnd = target.fileLines.slice(target.block.endIndex + 1, target.block.endIndex + 4);
    if (!afterEnd.some((line) => line.trim() === "---")) {
      result.issues.push({
        name: "InvalidMigratedFormat",
        message: "Missing separator line (---) after END",
        file: target.filePath,
        id: sourceId,
      });
    }

    const ownId = extractOwnIdFromBlock(target.block);
    if (ownId && ownId === sourceId) {
      result.issues.push({
        name: "ContainsSourceIdComment",
        message: "Target contains source ID comment inside migrated flashcard",
        file: target.filePath,
        id: sourceId,
      });
    }

    const sourceOwnContext = path.relative(path.dirname(sourceFilePath), target.filePath);
    void sourceOwnContext;
  }

  private validateTargetContent(
    target: TargetCardRef,
    sourceBlock: FlashcardBlock,
    sourceFilePath: string,
    sourceId: string,
    result: MigratedRunnerResult
  ): void {
    const sourceComparable = this.extractSourceComparable(sourceBlock, sourceFilePath);
    const targetComparable = this.extractTargetComparable(target.block);
    if (
      sourceComparable.question !== targetComparable.question ||
      sourceComparable.answer !== targetComparable.answer
    ) {
      result.issues.push({
        name: "ContentMismatch",
        message: `Content mismatch for id ${sourceId}`,
        file: target.filePath,
        id: sourceId,
      });
    }
  }

  private extractSourceComparable(
    sourceBlock: FlashcardBlock,
    sourceFilePath: string
  ): { question: string; answer: string } {
    const body = sourceBlock.rawLines.slice(2, sourceBlock.rawLines.length - 1);
    const normalizedBody: string[] = [];

    for (const line of body) {
      if (line.trim() === "(FIT-Notes flashcard)") continue;
      if (line.match(/<!--\s*ID\s*:/i)) continue;
      const rewritten = rewriteAssetLinksInLine(line, sourceFilePath);
      normalizedBody.push(rewritten.rewrittenLine);
    }

    return this.splitQuestionAnswer(normalizedBody);
  }

  private extractTargetComparable(targetBlock: FlashcardBlock): {
    question: string;
    answer: string;
  } {
    const body = targetBlock.rawLines.slice(2, targetBlock.rawLines.length - 1);
    const normalizedBody = body
      .filter((line) => !line.match(/<!--\s*ID\s*:/i))
      .map((line) => normalizeLocalAssetLinkSyntax(line));
    return this.splitQuestionAnswer(normalizedBody);
  }

  private splitQuestionAnswer(lines: string[]): { question: string; answer: string } {
    const questionLines: string[] = [];
    const answerLines: string[] = [];
    let inAnswer = false;
    for (const line of lines) {
      if (line.trim() === "Back:") {
        inAnswer = true;
        continue;
      }
      if (!inAnswer) questionLines.push(line);
      else answerLines.push(line);
    }
    return {
      question: normalizeForComparison(questionLines.join("\n")),
      answer: normalizeForComparison(answerLines.join("\n")),
    };
  }

  private validateOwnIdUniqueness(
    target: TargetCardRef,
    ownIdCounts: Map<string, number>,
    sourceFilePath: string,
    sourceId: string,
    result: MigratedRunnerResult
  ): void {
    const ownId = extractOwnIdFromBlock(target.block);
    if (!ownId) return;
    if ((ownIdCounts.get(ownId) ?? 0) === 1) return;
    result.issues.push({
      name: "NonUniqueOwnId",
      message: `Target own ID is not globally unique: ${ownId}`,
      file: sourceFilePath,
      id: sourceId,
    });
  }

  private validateTargetAssets(
    target: TargetCardRef,
    targetAssetsDir: string,
    sourceFilePath: string,
    sourceId: string,
    result: MigratedRunnerResult
  ): void {
    for (const line of target.block.rawLines) {
      const formatIssues = findNonCanonicalLocalAssetLinks(line);
      for (const formatIssue of formatIssues) {
        result.issues.push({
          name: "InvalidMigratedFormat",
          message: `Invalid local asset link format. Expected ${formatIssue.expected} but found ${formatIssue.actual}`,
          file: sourceFilePath,
          id: sourceId,
        });
      }

      const names = extractLocalAssetFileNamesFromLine(line);
      for (const name of names) {
        const assetPath = path.join(targetAssetsDir, name);
        if (!fs.existsSync(assetPath)) {
          result.issues.push({
            name: "MissingAssetInTarget",
            message: `Missing asset file in FIT-Statnice Assets: ${name}`,
            file: sourceFilePath,
            id: sourceId,
          });
        }
      }
    }
  }
}
