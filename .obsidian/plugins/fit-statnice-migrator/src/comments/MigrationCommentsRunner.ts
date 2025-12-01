import * as fs from 'fs';
import * as path from 'path';
import { MigrationCommentValidator, CommentIssue } from './MigrationCommentValidator';
import { LoggingService } from '../logging';

export interface RunnerResult {
  totalFlashcards: number;
  issues: Array<CommentIssue & { file: string; flashcardIndex: number; question?: string }>; // index per file
}

export class MigrationCommentsRunner {
  private readonly validator = new MigrationCommentValidator();
  private readonly logger: LoggingService;
  constructor(logger: LoggingService) {
    this.logger = logger;
  }

  run(repoPath: string, courseIds: string[]): RunnerResult {
    const notesDir = path.join(repoPath, 'Notes');
    const result: RunnerResult = { totalFlashcards: 0, issues: [] };
    if (!fs.existsSync(notesDir)) {
      this.logger.error({
        name: 'FitNotesMissing',
        message: `FIT-Notes Notes directory not found: ${notesDir}`,
        fixInstructions: 'Check fitNotesRepoPath setting points to FIT-Notes root',
        context: { notesDir }
      });
      return result;
    }
    const files = this.listMarkdownFiles(notesDir);
    const filtered = files.filter(f => courseIds.some(id => path.basename(f).includes(id)));
    for (const file of filtered) {
      const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
      let idx = 0;
      let cardIndex = 0;
      while (idx < lines.length) {
        if (lines[idx].trim() === 'START') {
          const question = this.extractQuestion(lines, idx);
          const res = this.validator.validateForFlashcard(lines, idx);
          result.totalFlashcards += 1;
          if (!res.isValid) {
            for (const issue of res.issues) {
              result.issues.push({ ...issue, file, flashcardIndex: cardIndex, question });
            }
          }
          cardIndex += 1;
        }
        idx += 1;
      }
    }
    return result;
  }

  private extractQuestion(lines: string[], startIdx: number): string {
    // START is at startIdx, next line is type (FIT-Card/Basic), then question until "Back:"
    let i = startIdx + 1;
    // Skip type line
    if (i < lines.length && (lines[i].trim() === 'FIT-Card' || lines[i].trim() === 'Basic')) {
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
        else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) out.push(full);
      }
    }
    return out;
  }
}


