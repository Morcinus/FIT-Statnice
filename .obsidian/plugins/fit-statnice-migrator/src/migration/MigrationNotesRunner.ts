import * as fs from "fs";
import * as path from "path";
import { LoggingService } from "../logging";
import {
  AssetReference,
  collectCourseMatchedFiles,
  extractOriginalIdAboveStart,
  extractSourceIdFromBlock,
  findSectionBounds,
  findSectionNameForLine,
  FlashcardBlock,
  listMarkdownFiles,
  normalizeForComparison,
  parseFlashcardBlocks,
  parseRecommendationAboveStart,
  rewriteAssetLinksInLine,
} from "./MigrationCommon";

export type MigrationNotesIssueName =
  | "MissingTargetExamNote"
  | "MissingTargetSection"
  | "MissingSourceIdComment"
  | "AssetMissingInSource"
  | "AssetConflict"
  | "DuplicateOriginalIdConflict"
  | "InvalidExistingDuplicate"
  | "TargetWriteFailed"
  | "SourceWriteFailed";

export interface MigrationNotesIssue {
  name: MigrationNotesIssueName;
  message: string;
  file?: string;
  id?: string;
  context?: Record<string, unknown>;
}

export interface MigrationNotesResult {
  scannedFlashcards: number;
  candidateFlashcards: number;
  migratedFlashcards: number;
  skippedDuplicates: number;
  updatedStatuses: number;
  issues: MigrationNotesIssue[];
}

interface TargetCardRef {
  originalId: string;
  filePath: string;
  sectionName: string | null;
  block: FlashcardBlock;
  fileLines: string[];
}

export class MigrationNotesRunner {
  private readonly logger: LoggingService;
  private readonly targetCardsByOriginalId = new Map<string, TargetCardRef[]>();
  private readonly targetCardsByFile = new Map<string, TargetCardRef[]>();

  constructor(logger: LoggingService) {
    this.logger = logger;
  }

  run(
    sourceRepoPath: string,
    statniceVaultPath: string,
    courseIds: string[]
  ): MigrationNotesResult {
    const result: MigrationNotesResult = {
      scannedFlashcards: 0,
      candidateFlashcards: 0,
      migratedFlashcards: 0,
      skippedDuplicates: 0,
      updatedStatuses: 0,
      issues: [],
    };

    const sourceNotesDir = path.join(sourceRepoPath, "Notes");
    const targetNotesDir = path.join(statniceVaultPath, "Notes", "Magisterske");
    const targetAssetsDir = path.join(statniceVaultPath, "Assets");

    if (!fs.existsSync(sourceNotesDir) || !fs.existsSync(targetNotesDir)) {
      this.logger.error({
        name: "InputPathsMissing",
        message: "Source or target notes directory missing",
        fixInstructions: "Verify fitNotesRepoPath and FIT-Statnice vault path",
        context: { sourceNotesDir, targetNotesDir },
      });
      result.issues.push({
        name: "MissingTargetExamNote",
        message: "Source or target notes directory missing",
      });
      return result;
    }

    const normalizedCourseIds = [...new Set(courseIds.filter(Boolean))];
    const examNoteFileById = this.buildExamNoteFileMap(
      targetNotesDir,
      normalizedCourseIds
    );
    this.buildTargetIndex(targetNotesDir, normalizedCourseIds);

    const sourceFiles = collectCourseMatchedFiles(sourceNotesDir, normalizedCourseIds);
    for (const sourceFile of sourceFiles) {
      this.migrateFile(
        sourceFile.filePath,
        examNoteFileById,
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
    const files = listMarkdownFiles(targetNotesDir)
      .filter((filePath) =>
        courseIds.some((courseId) => path.basename(filePath).includes(courseId))
      )
      .sort((a, b) => a.localeCompare(b, "cs"));

    for (const filePath of files) {
      const fileName = path.basename(filePath);
      const examNoteId = this.extractExamNoteId(fileName);
      if (!examNoteId) continue;
      if (!map.has(examNoteId)) {
        map.set(examNoteId, filePath);
      }
    }

    return map;
  }

  private extractExamNoteId(fileName: string): string {
    const noExt = fileName.replace(/\.md$/i, "").trim();
    const firstSpace = noExt.indexOf(" ");
    if (firstSpace === -1) return noExt;
    return noExt.substring(0, firstSpace).trim();
  }

  private buildTargetIndex(targetNotesDir: string, courseIds: string[]): void {
    this.targetCardsByOriginalId.clear();
    this.targetCardsByFile.clear();

    const targetFiles = listMarkdownFiles(targetNotesDir).filter((filePath) =>
      courseIds.some((courseId) => path.basename(filePath).includes(courseId))
    );
    for (const filePath of targetFiles) {
      this.refreshTargetFileIndex(filePath);
    }
  }

  private refreshTargetFileIndex(filePath: string): void {
    const existing = this.targetCardsByFile.get(filePath) ?? [];
    for (const card of existing) {
      const arr = this.targetCardsByOriginalId.get(card.originalId) ?? [];
      const filtered = arr.filter((item) => item !== card);
      if (filtered.length === 0) this.targetCardsByOriginalId.delete(card.originalId);
      else this.targetCardsByOriginalId.set(card.originalId, filtered);
    }
    this.targetCardsByFile.delete(filePath);

    const fileLines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
    const blocks = parseFlashcardBlocks(fileLines);
    const added: TargetCardRef[] = [];
    for (const block of blocks) {
      const originalId = extractOriginalIdAboveStart(fileLines, block.startIndex);
      if (!originalId) continue;
      const ref: TargetCardRef = {
        originalId,
        filePath,
        sectionName: findSectionNameForLine(fileLines, block.startIndex),
        block,
        fileLines,
      };
      added.push(ref);
      const byId = this.targetCardsByOriginalId.get(originalId) ?? [];
      byId.push(ref);
      this.targetCardsByOriginalId.set(originalId, byId);
    }
    this.targetCardsByFile.set(filePath, added);
  }

  private migrateFile(
    sourceFilePath: string,
    examNoteFileById: Map<string, string>,
    targetAssetsDir: string,
    result: MigrationNotesResult
  ): void {
    const lines = fs.readFileSync(sourceFilePath, "utf8").split(/\r?\n/);
    const blocks = parseFlashcardBlocks(lines);
    let sourceChanged = false;

    for (const block of blocks) {
      result.scannedFlashcards += 1;

      const recommendation = parseRecommendationAboveStart(lines, block.startIndex);
      if (!recommendation) continue;
      if (recommendation.migrationStatus !== "migrate") continue;
      if (
        recommendation.examNoteId === "none" ||
        recommendation.examNoteSectionName === "none"
      ) {
        continue;
      }

      result.candidateFlashcards += 1;

      const sourceId = extractSourceIdFromBlock(block);
      if (!sourceId) {
        result.issues.push({
          name: "MissingSourceIdComment",
          message: "Source flashcard is missing ID comment",
          file: sourceFilePath,
        });
        continue;
      }

      const targetFilePath = examNoteFileById.get(recommendation.examNoteId);
      if (!targetFilePath) {
        result.issues.push({
          name: "MissingTargetExamNote",
          message: `Target exam note not found for ${recommendation.examNoteId}`,
          file: sourceFilePath,
          id: sourceId,
        });
        continue;
      }

      const transformed = this.buildMigratedCard(block, sourceFilePath, sourceId);

      const existing = this.targetCardsByOriginalId.get(sourceId) ?? [];
      if (existing.length > 0) {
        const sameTarget = existing.find(
          (card) =>
            card.filePath === targetFilePath &&
            card.sectionName === recommendation.examNoteSectionName
        );
        if (!sameTarget) {
          result.issues.push({
            name: "DuplicateOriginalIdConflict",
            message: "Original Flashcard ID already exists in different target location",
            file: sourceFilePath,
            id: sourceId,
          });
          continue;
        }

        const validDuplicate = this.isValidExistingDuplicate(sameTarget, transformed.comparable);
        if (!validDuplicate) {
          result.issues.push({
            name: "InvalidExistingDuplicate",
            message: "Existing duplicate card is not in valid migrated format/content",
            file: sourceFilePath,
            id: sourceId,
          });
          continue;
        }

        const statusUpdated = this.markStatusDone(lines, recommendation.statusLineIndex);
        if (statusUpdated) {
          sourceChanged = true;
          result.updatedStatuses += 1;
        }
        result.skippedDuplicates += 1;
        continue;
      }

      const copied = this.copyAssets(
        transformed.assets,
        targetAssetsDir,
        result,
        sourceFilePath,
        sourceId
      );
      if (!copied) continue;

      const inserted = this.insertCardIntoSection(
        targetFilePath,
        recommendation.examNoteSectionName,
        transformed.cardLines,
        result,
        sourceFilePath,
        sourceId
      );
      if (!inserted) continue;

      const statusUpdated = this.markStatusDone(lines, recommendation.statusLineIndex);
      if (statusUpdated) {
        sourceChanged = true;
        result.updatedStatuses += 1;
      }
      result.migratedFlashcards += 1;
    }

    if (!sourceChanged) return;
    try {
      fs.writeFileSync(sourceFilePath, lines.join("\n"), "utf8");
    } catch (error) {
      result.issues.push({
        name: "SourceWriteFailed",
        message: `Failed to update source file: ${String(error)}`,
        file: sourceFilePath,
      });
    }
  }

  private buildMigratedCard(
    block: FlashcardBlock,
    sourceFilePath: string,
    sourceId: string
  ): { cardLines: string[]; assets: AssetReference[]; comparable: { question: string; answer: string } } {
    const body = block.rawLines.slice(2, block.rawLines.length - 1);
    const transformedBody: string[] = [];
    const assets: AssetReference[] = [];

    for (const line of body) {
      if (line.trim() === "(FIT-Notes flashcard)") continue;
      if (line.match(/<!--\s*ID\s*:/i)) continue;
      const rewritten = rewriteAssetLinksInLine(line, sourceFilePath);
      transformedBody.push(rewritten.rewrittenLine);
      assets.push(...rewritten.assets);
    }

    const cardLines = [
      "<!--",
      `Original Flashcard ID: ${sourceId}`,
      "-->",
      "",
      "START",
      "NI-SZZ",
      ...transformedBody,
      "END",
      "",
      "---",
    ];

    const comparable = this.extractComparableQuestionAnswer(cardLines.slice(4));
    return { cardLines, assets, comparable };
  }

  private extractComparableQuestionAnswer(cardLines: string[]): {
    question: string;
    answer: string;
  } {
    const block = parseFlashcardBlocks(cardLines);
    const target = block[0];
    if (!target) return { question: "", answer: "" };

    const body = target.rawLines.slice(2, target.rawLines.length - 1);
    const questionLines: string[] = [];
    const answerLines: string[] = [];
    let inAnswer = false;
    for (const line of body) {
      if (line.trim() === "Back:") {
        inAnswer = true;
        continue;
      }
      if (line.match(/<!--\s*ID\s*:/i)) continue;
      if (!inAnswer) questionLines.push(line);
      else answerLines.push(line);
    }

    return {
      question: normalizeForComparison(questionLines.join("\n")),
      answer: normalizeForComparison(answerLines.join("\n")),
    };
  }

  private copyAssets(
    assets: AssetReference[],
    targetAssetsDir: string,
    result: MigrationNotesResult,
    sourceFilePath: string,
    sourceId: string
  ): boolean {
    for (const asset of assets) {
      if (!fs.existsSync(asset.sourceAbsolutePath)) {
        result.issues.push({
          name: "AssetMissingInSource",
          message: `Asset file not found: ${asset.sourceAbsolutePath}`,
          file: sourceFilePath,
          id: sourceId,
        });
        return false;
      }

      const targetAssetPath = path.join(targetAssetsDir, asset.targetFileName);
      if (fs.existsSync(targetAssetPath)) {
        const sourceBuf = fs.readFileSync(asset.sourceAbsolutePath);
        const targetBuf = fs.readFileSync(targetAssetPath);
        if (!sourceBuf.equals(targetBuf)) {
          result.issues.push({
            name: "AssetConflict",
            message: `Target asset already exists with different content: ${asset.targetFileName}`,
            file: sourceFilePath,
            id: sourceId,
          });
          return false;
        }
        continue;
      }

      fs.copyFileSync(asset.sourceAbsolutePath, targetAssetPath);
    }

    return true;
  }

  private isValidExistingDuplicate(
    target: TargetCardRef,
    expectedComparable: { question: string; answer: string }
  ): boolean {
    const lines = target.block.rawLines;
    if (lines.length < 4) return false;
    if (lines[1]?.trim() !== "NI-SZZ") return false;
    if (!lines.some((line) => line.trim() === "Back:")) return false;
    const afterEnd = target.fileLines.slice(
      target.block.endIndex + 1,
      target.block.endIndex + 4
    );
    if (!afterEnd.some((line) => line.trim() === "---")) return false;

    const comparable = this.extractComparableQuestionAnswer(target.block.rawLines);
    return (
      comparable.question === expectedComparable.question &&
      comparable.answer === expectedComparable.answer
    );
  }

  private insertCardIntoSection(
    targetFilePath: string,
    sectionName: string,
    cardLines: string[],
    result: MigrationNotesResult,
    sourceFilePath: string,
    sourceId: string
  ): boolean {
    try {
      const lines = fs.readFileSync(targetFilePath, "utf8").split(/\r?\n/);
      const bounds = findSectionBounds(lines, sectionName);
      if (!bounds) {
        result.issues.push({
          name: "MissingTargetSection",
          message: `Target section not found: ${sectionName}`,
          file: sourceFilePath,
          id: sourceId,
        });
        return false;
      }

      const insertChunk = [...cardLines];
      if (bounds.insertIndex > 0 && lines[bounds.insertIndex - 1].trim() !== "") {
        insertChunk.unshift("");
      }
      if (
        bounds.insertIndex < lines.length &&
        lines[bounds.insertIndex].trim() !== ""
      ) {
        insertChunk.push("");
      }

      lines.splice(bounds.insertIndex, 0, ...insertChunk);
      fs.writeFileSync(targetFilePath, lines.join("\n"), "utf8");
      this.refreshTargetFileIndex(targetFilePath);
      return true;
    } catch (error) {
      result.issues.push({
        name: "TargetWriteFailed",
        message: `Failed to write target file: ${String(error)}`,
        file: sourceFilePath,
        id: sourceId,
      });
      return false;
    }
  }

  private markStatusDone(lines: string[], statusLineIndex: number): boolean {
    if (statusLineIndex < 0 || statusLineIndex >= lines.length) return false;
    const line = lines[statusLineIndex];
    const updated = line.replace(
      /^(\s*Migration Status\s*:\s*)migrate(\s*)$/i,
      "$1done$2"
    );
    if (updated === line) return false;
    lines[statusLineIndex] = updated;
    return true;
  }
}
