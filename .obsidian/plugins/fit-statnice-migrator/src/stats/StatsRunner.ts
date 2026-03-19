import * as fs from "fs";
import * as path from "path";
import { LoggingService } from "../logging";
import {
  collectCourseMatchedFiles,
  listMarkdownFiles,
  parseFlashcardBlocks,
  parseRecommendationAboveStart,
} from "../migration/MigrationCommon";

export type StatsColor = "red" | "yellow" | "green";

export interface ExamNoteStats {
  examNoteId: string;
  courseId: string | null;
  flashcards: number;
  color: StatsColor;
  finished: boolean;
  filePath: string;
}

export interface CourseProgress {
  totalFlashcards: number;
  doneFlashcards: number;
  finished: boolean;
}

export interface StatsResult {
  notes: ExamNoteStats[];
  finishedNotes: number;
  totalNotes: number;
  totalFlashcards: number;
  courseProgress: Map<string, CourseProgress>;
}

interface ParsedExamNoteMeta {
  examNoteId: string;
  courseId: string | null;
}

export class StatsRunner {
  private readonly logger: LoggingService;

  constructor(logger: LoggingService) {
    this.logger = logger;
  }

  run(fitNotesRepoPath: string, statniceVaultPath: string): StatsResult {
    const notesDir = path.join(statniceVaultPath, "Notes", "Magisterske");
    const sourceNotesDir = path.join(fitNotesRepoPath, "Notes");
    const emptyResult: StatsResult = {
      notes: [],
      finishedNotes: 0,
      totalNotes: 0,
      totalFlashcards: 0,
      courseProgress: new Map(),
    };

    if (!fs.existsSync(notesDir)) {
      this.logger.error({
        name: "StatsNotesDirectoryMissing",
        message: `FIT-Statnice exam notes directory not found: ${notesDir}`,
        fixInstructions:
          "Ensure FIT-Statnice path is correct and Notes/Magisterske exists.",
        context: { notesDir },
      });
      return emptyResult;
    }

    const noteFiles = listMarkdownFiles(notesDir);
    const noteEntries = noteFiles.map((filePath) => this.buildNoteEntry(filePath));
    const courseIds = [...new Set(noteEntries.map((n) => n.meta.courseId).filter(Boolean))] as string[];
    const courseProgress = this.buildCourseProgressMap(sourceNotesDir, courseIds);

    const notes: ExamNoteStats[] = noteEntries
      .map((entry) => {
        const courseFinished = entry.meta.courseId
          ? courseProgress.get(entry.meta.courseId)?.finished ?? false
          : false;
        return {
          examNoteId: entry.meta.examNoteId,
          courseId: entry.meta.courseId,
          flashcards: entry.flashcards,
          color: this.pickColor(entry.flashcards),
          finished: courseFinished,
          filePath: entry.filePath,
        };
      })
      .sort((a, b) => a.examNoteId.localeCompare(b.examNoteId, "cs"));

    const totalFlashcards = notes.reduce((sum, note) => sum + note.flashcards, 0);
    const finishedNotes = notes.filter((note) => note.finished).length;

    return {
      notes,
      finishedNotes,
      totalNotes: notes.length,
      totalFlashcards,
      courseProgress,
    };
  }

  private buildNoteEntry(filePath: string): {
    filePath: string;
    meta: ParsedExamNoteMeta;
    flashcards: number;
  } {
    const fileName = path.basename(filePath);
    const meta = this.parseExamNoteMeta(fileName);
    const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
    const flashcards = parseFlashcardBlocks(lines).length;
    return { filePath, meta, flashcards };
  }

  private parseExamNoteMeta(fileName: string): ParsedExamNoteMeta {
    const noExt = fileName.replace(/\.md$/i, "").trim();
    const tokens = noExt.split(/\s+/).filter((token) => token.length > 0);
    const examNoteId = tokens[0] ?? noExt;
    const courseId = tokens.length >= 2 ? tokens[1] : null;
    return { examNoteId, courseId };
  }

  private buildCourseProgressMap(
    sourceNotesDir: string,
    courseIds: string[]
  ): Map<string, CourseProgress> {
    const progress = new Map<string, CourseProgress>();
    for (const courseId of courseIds) {
      progress.set(courseId, {
        totalFlashcards: 0,
        doneFlashcards: 0,
        finished: false,
      });
    }

    if (!fs.existsSync(sourceNotesDir)) {
      this.logger.error({
        name: "StatsSourceNotesDirectoryMissing",
        message: `FIT-Notes Notes directory not found: ${sourceNotesDir}`,
        fixInstructions: "Ensure fitNotesRepoPath points to FIT-Notes root.",
        context: { sourceNotesDir },
      });
      return progress;
    }

    const matched = collectCourseMatchedFiles(sourceNotesDir, courseIds);
    for (const file of matched) {
      this.collectCourseProgressFromFile(file.filePath, file.courseId, progress);
    }

    for (const [courseId, item] of progress.entries()) {
      const finished = item.totalFlashcards > 0 && item.doneFlashcards === item.totalFlashcards;
      progress.set(courseId, { ...item, finished });
    }

    return progress;
  }

  private collectCourseProgressFromFile(
    filePath: string,
    courseId: string,
    progress: Map<string, CourseProgress>
  ): void {
    const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
    const blocks = parseFlashcardBlocks(lines);
    for (const block of blocks) {
      const current = progress.get(courseId);
      if (!current) continue;
      current.totalFlashcards += 1;
      const recommendation = parseRecommendationAboveStart(lines, block.startIndex);
      if (recommendation?.migrationStatus === "done") {
        current.doneFlashcards += 1;
      }
    }
  }

  private pickColor(flashcards: number): StatsColor {
    if (flashcards < 20) return "red";
    if (flashcards < 30) return "yellow";
    if (flashcards < 50) return "green";
    if (flashcards < 60) return "yellow";
    return "red";
  }
}
