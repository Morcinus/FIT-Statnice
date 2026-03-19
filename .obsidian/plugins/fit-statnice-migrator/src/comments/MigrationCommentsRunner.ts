import * as fs from "fs";
import * as path from "path";
import {
  CommentIssue,
  ExamNoteSectionsMap,
  MigrationCommentValidator,
} from "./MigrationCommentValidator";
import { LoggingService } from "../logging";

type RunnerIssue = CommentIssue & {
  file: string;
  flashcardIndex: number;
  question?: string;
};

interface MatchedSourceFile {
  filePath: string;
  courseId: string;
}

type CourseExamNoteCatalog = Map<string, ExamNoteSectionsMap>;

export interface RunnerResult {
  totalFlashcards: number;
  issues: RunnerIssue[]; // index per file
}

export class MigrationCommentsRunner {
  private readonly validator = new MigrationCommentValidator();
  private readonly logger: LoggingService;
  private readonly emptyExamNoteSections: ExamNoteSectionsMap = new Map();

  constructor(logger: LoggingService) {
    this.logger = logger;
  }

  run(
    repoPath: string,
    statniceVaultPath: string,
    courseIds: string[]
  ): RunnerResult {
    const result: RunnerResult = { totalFlashcards: 0, issues: [] };
    const notesDir = path.join(repoPath, "Notes");

    if (!fs.existsSync(notesDir)) {
      this.logger.error({
        name: "FitNotesMissing",
        message: `FIT-Notes Notes directory not found: ${notesDir}`,
        fixInstructions: "Check fitNotesRepoPath setting points to FIT-Notes root",
        context: { notesDir },
      });
      return result;
    }

    const normalizedCourseIds = this.normalizeCourseIds(courseIds);
    const examNoteCatalog = this.buildCourseExamNoteCatalog(
      statniceVaultPath,
      normalizedCourseIds
    );
    const filesToValidate = this.collectMatchedSourceFiles(notesDir, normalizedCourseIds);

    for (const file of filesToValidate) {
      this.validateFile(file, examNoteCatalog, result);
    }

    return result;
  }

  private normalizeCourseIds(courseIds: string[]): string[] {
    return [...new Set(courseIds.filter((id) => id.trim().length > 0))];
  }

  private collectMatchedSourceFiles(
    notesDir: string,
    courseIds: string[]
  ): MatchedSourceFile[] {
    if (courseIds.length === 0) {
      return [];
    }

    const sortedCourseIds = this.sortCourseIdsByLength(courseIds);
    const markdownFiles = this.listMarkdownFiles(notesDir);
    const matched: MatchedSourceFile[] = [];

    for (const filePath of markdownFiles) {
      const courseId = this.resolveCourseId(filePath, notesDir, sortedCourseIds);
      if (!courseId) continue;
      matched.push({ filePath, courseId });
    }

    return matched;
  }

  private sortCourseIdsByLength(courseIds: string[]): string[] {
    return [...courseIds].sort((a, b) => b.length - a.length);
  }

  private resolveCourseId(
    filePath: string,
    notesDir: string,
    sortedCourseIds: string[]
  ): string | null {
    const relativePath = path.relative(notesDir, filePath);
    const pathSegments = relativePath.split(path.sep);
    const fileName = path.basename(filePath);

    for (const courseId of sortedCourseIds) {
      const matchesFolder = pathSegments.some((segment) => segment === courseId);
      const matchesFileName = fileName.includes(courseId);
      if (matchesFolder || matchesFileName) {
        return courseId;
      }
    }

    return null;
  }

  private validateFile(
    file: MatchedSourceFile,
    examNoteCatalog: CourseExamNoteCatalog,
    result: RunnerResult
  ): void {
    const lines = fs.readFileSync(file.filePath, "utf8").split(/\r?\n/);
    const validExamNoteSections =
      examNoteCatalog.get(file.courseId) ?? this.emptyExamNoteSections;
    const flashcardStartIndices = this.findFlashcardStartIndices(lines);

    flashcardStartIndices.forEach((startLineIndex, flashcardIndex) => {
      const validation = this.validator.validateForFlashcard(
        lines,
        startLineIndex,
        validExamNoteSections
      );

      result.totalFlashcards += 1;
      if (validation.isValid) return;

      const question = this.extractQuestion(lines, startLineIndex);
      for (const issue of validation.issues) {
        result.issues.push({
          ...issue,
          file: file.filePath,
          flashcardIndex,
          question,
        });
      }
    });
  }

  private findFlashcardStartIndices(lines: string[]): number[] {
    const starts: number[] = [];
    for (let i = 0; i < lines.length; i += 1) {
      if (lines[i].trim() === "START") {
        starts.push(i);
      }
    }
    return starts;
  }

  private buildCourseExamNoteCatalog(
    statniceVaultPath: string,
    courseIds: string[]
  ): CourseExamNoteCatalog {
    const catalog = this.initializeEmptyCatalog(courseIds);
    const examNotesDir = path.join(statniceVaultPath, "Notes", "Magisterske");

    if (!fs.existsSync(examNotesDir)) {
      this.logger.error({
        name: "ExamNotesMissing",
        message: `FIT-Statnice exam notes directory not found: ${examNotesDir}`,
        fixInstructions: "Check FIT-Statnice vault path and ensure Notes/Magisterske exists",
        context: { examNotesDir },
      });
      return catalog;
    }

    const examNoteFiles = fs
      .readdirSync(examNotesDir, { withFileTypes: true })
      .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".md"));

    for (const examNoteFile of examNoteFiles) {
      this.registerExamNoteFile(examNotesDir, examNoteFile.name, courseIds, catalog);
    }

    return catalog;
  }

  private initializeEmptyCatalog(courseIds: string[]): CourseExamNoteCatalog {
    const catalog: CourseExamNoteCatalog = new Map();
    for (const courseId of courseIds) {
      catalog.set(courseId, new Map());
    }
    return catalog;
  }

  private registerExamNoteFile(
    examNotesDir: string,
    filename: string,
    courseIds: string[],
    catalog: CourseExamNoteCatalog
  ): void {
    const matchingCourseIds = courseIds.filter((courseId) => filename.includes(courseId));
    if (matchingCourseIds.length === 0) return;

    const filePath = path.join(examNotesDir, filename);
    const examNoteId = this.extractExamNoteId(filename);
    const sections = this.extractSections(filePath);

    for (const courseId of matchingCourseIds) {
      const courseNotes = catalog.get(courseId) ?? new Map<string, Set<string>>();
      const knownSections = courseNotes.get(examNoteId) ?? new Set<string>();
      for (const section of sections) {
        knownSections.add(section);
      }
      courseNotes.set(examNoteId, knownSections);
      catalog.set(courseId, courseNotes);
    }
  }

  private extractExamNoteId(filename: string): string {
    const filenameWithoutExt = filename.replace(/\.md$/i, "").trim();
    const firstSpaceIdx = filenameWithoutExt.indexOf(" ");
    if (firstSpaceIdx === -1) {
      return filenameWithoutExt;
    }
    return filenameWithoutExt.substring(0, firstSpaceIdx).trim();
  }

  private extractSections(filePath: string): Set<string> {
    const sections = new Set<string>();
    const content = fs.readFileSync(filePath, "utf8");
    for (const line of content.split(/\r?\n/)) {
      if (!line.startsWith("## ")) continue;
      const sectionName = line.substring(3).trim();
      if (sectionName.length === 0) continue;
      sections.add(sectionName);
    }
    return sections;
  }

  private extractQuestion(lines: string[], startIdx: number): string {
    // START is at startIdx, then type line (FIT-Card/Basic), then question until Back:/END.
    let i = startIdx + 1;
    if (
      i < lines.length &&
      (lines[i].trim() === "FIT-Card" || lines[i].trim() === "Basic")
    ) {
      i += 1;
    }

    const questionLines: string[] = [];
    while (i < lines.length) {
      const trimmed = lines[i].trim();
      if (trimmed === "Back:" || trimmed === "END") break;
      questionLines.push(lines[i]);
      i += 1;
    }

    const rawQuestion = questionLines.join("\n").trim();
    const cleanedQuestion = rawQuestion.replace(/\(FIT-Notes flashcard\)/gi, "").trim();
    const normalizedQuestion = cleanedQuestion.replace(/\s+/g, " ").trim();
    return normalizedQuestion.length > 100
      ? `${normalizedQuestion.substring(0, 100)}...`
      : normalizedQuestion;
  }

  private listMarkdownFiles(dir: string): string[] {
    const files: string[] = [];
    const stack = [dir];

    while (stack.length > 0) {
      const currentDir = stack.pop();
      if (!currentDir) continue;

      for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
        const fullPath = path.join(currentDir, entry.name);
        if (entry.isDirectory()) {
          stack.push(fullPath);
          continue;
        }
        if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
          files.push(fullPath);
        }
      }
    }

    return files;
  }
}

