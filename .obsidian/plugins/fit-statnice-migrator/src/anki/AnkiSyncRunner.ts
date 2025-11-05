import * as fs from "fs";
import * as path from "path";
import { LoggingService } from "../logging";
import { AnkiIdValidator, AnkiIssue } from "./AnkiIdValidator";

export interface AnkiRunnerResult {
  totalFlashcards: number;
  issues: Array<AnkiIssue & { file: string; flashcardIndex: number }>;
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
            const res = this.validator.validateForFlashcard(lines, j);
            result.totalFlashcards += 1;
            if (!res.isValid) {
              for (const issue of res.issues) {
                result.issues.push({
                  ...issue,
                  file,
                  flashcardIndex: cardIndex,
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

