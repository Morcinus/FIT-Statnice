import * as fs from "fs";
import * as path from "path";
import { LoggingService } from "../logging";
import { AnkiIdValidator, AnkiIssue } from "./AnkiIdValidator";

export interface AnkiRunnerResult {
  totalFlashcards: number;
  issues: Array<AnkiIssue & { file: string; flashcardIndex: number; question?: string }>;
}

export class AnkiSyncRunner {
  private readonly validator = new AnkiIdValidator();
  private readonly logger: LoggingService;
  constructor(logger: LoggingService) {
    this.logger = logger;
  }

  run(statniceVaultPath: string): AnkiRunnerResult {
    const notesDir = path.join(statniceVaultPath, "Notes", "Magisterske");
    const result: AnkiRunnerResult = { totalFlashcards: 0, issues: [] };
    if (!fs.existsSync(notesDir)) {
      this.logger.error({
        name: "NotesDirectoryMissing",
        message: `Directory not found: ${notesDir}`,
        fixInstructions:
          "Ensure the FIT-Statnice vault path is correct and the Notes/Magisterske directory exists.",
        context: { notesDir },
      });
      return result;
    }
    const files = this.listMarkdownFiles(notesDir);
    for (const file of files) {
      const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
      let cardIndex = 0;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() === "START") {
          let j = i + 1;
          while (j < lines.length && lines[j].trim() !== "END") j++;
          if (j < lines.length && lines[j].trim() === "END") {
            const question = this.extractQuestion(lines, i);
            const res = this.validator.validateForFlashcard(lines, j);
            result.totalFlashcards += 1;
            if (!res.isValid) {
              for (const issue of res.issues) {
                result.issues.push({
                  ...issue,
                  file,
                  flashcardIndex: cardIndex,
                  question,
                });
              }
            }
            cardIndex += 1;
            i = j;
          }
        }
      }
    }
    return result;
  }

  private extractQuestion(lines: string[], startIdx: number): string {
    // START is at startIdx, next line is type (NI-SZZ), then question until "Back:"
    let i = startIdx + 1;
    // Skip type line
    if (i < lines.length && lines[i].trim() === 'NI-SZZ') {
      i++;
    }
    const questionLines: string[] = [];
    while (i < lines.length) {
      const trimmed = lines[i].trim();
      if (trimmed === 'Back:') break;
      if (trimmed === 'END') break;
      questionLines.push(lines[i]);
      i++;
    }
    let question = questionLines.join('\n').trim();
    // Remove "(FIT-Notes flashcard)" text if present
    question = question.replace(/\(FIT-Notes flashcard\)/gi, '').trim();
    // Replace newlines with spaces and normalize whitespace
    question = question.replace(/\s+/g, ' ').trim();
    // Truncate if too long
    return question.length > 100 ? question.substring(0, 100) + '...' : question;
  }

  private listMarkdownFiles(dir: string): string[] {
    const out: string[] = [];
    const stack: string[] = [dir];
    while (stack.length) {
      const d = stack.pop()!;
      for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
        const full = path.join(d, entry.name);
        if (entry.isDirectory()) stack.push(full);
        else if (
          entry.isFile() &&
          entry.name.toLowerCase().endsWith(".md")
        ) {
          out.push(full);
        }
      }
    }
    return out;
  }
}

