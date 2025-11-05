import * as fs from 'fs';
import * as path from 'path';
import { LoggingService } from '../logging';
import { MigratedFlashcardValidator, MigrationIssue } from './MigratedFlashcardValidator';

export interface MigratedRunnerResult {
  totalSource: number;
  totalTarget: number;
  issues: Array<MigrationIssue & { file?: string; id?: string }>;
}

export class MigratedFlashcardsRunner {
  private readonly logger: LoggingService;
  private readonly validator = new MigratedFlashcardValidator();
  constructor(logger: LoggingService) {
    this.logger = logger;
  }

  run(sourceRepoPath: string, statniceVaultPath: string, courseIds: string[]): MigratedRunnerResult {
    const sourceNotesDir = path.join(sourceRepoPath, 'Notes');
    const targetNotesDir = path.join(statniceVaultPath, 'Notes', 'Magisterske');
    const result: MigratedRunnerResult = { totalSource: 0, totalTarget: 0, issues: [] };
    if (!fs.existsSync(sourceNotesDir) || !fs.existsSync(targetNotesDir)) {
      this.logger.error({
        name: 'InputPathsMissing',
        message: 'Source or target notes directory missing',
        fixInstructions: 'Verify fitNotesRepoPath and vault path',
        context: { sourceNotesDir, targetNotesDir }
      });
      return result;
    }

    // Load source flashcards with IDs
    const sourceFiles = this.listMarkdownFiles(sourceNotesDir)
      .filter(f => courseIds.some(id => path.basename(f).includes(id)));
    const sourceById = new Map<string, { file: string; blockIndex: number; content: string; block: ReturnType<MigratedFlashcardValidator['parseFlashcards']>[number] }>();
    for (const file of sourceFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const blocks = this.validator.parseFlashcards(content);
      blocks.forEach((block, idx) => {
        // extract ID comment line if present
        const idLine = block.rawLines.find(l => l.includes('ID:'));
        let id = idLine ? idLine.replace(/.*ID:\s*/, '').trim() : `${path.basename(file)}#${idx}`;
        if (id.endsWith('-->')) id = id.substring(0, id.length - 3).trim();
        sourceById.set(id, { file, blockIndex: idx, content, block });
      });
      result.totalSource += blocks.length;
    }

    // Load target flashcards and validate format
    const targetFiles = this.listMarkdownFiles(targetNotesDir)
      .filter(f => courseIds.some(id => path.basename(f).includes(id)));
    const targetById = new Map<string, { file: string; content: string; block: ReturnType<MigratedFlashcardValidator['parseFlashcards']>[number] }>();
    for (const file of targetFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const fileLines = content.split(/\r?\n/);
      const blocks = this.validator.parseFlashcards(content);
      result.totalTarget += blocks.length;
      for (const block of blocks) {
        // format checks
        const fmtIssues = this.validator.ensureTargetFormat(block, content);
        for (const issue of fmtIssues) result.issues.push({ ...issue, file });
        // id above start (handle multiline comments)
        const id = this.extractOriginalIdAboveStart(fileLines, block.startIndex);
        if (!id) {
          result.issues.push({ name: 'MissingOriginalIdComment', message: 'Missing Original Flashcard ID comment', file });
          continue;
        }
        // check target does not contain source ID comment inside block
        if (block.rawLines.some(l => l.includes('Original Flashcard ID') || (l.includes('ID:') && !l.includes('Original Flashcard ID')))) {
          if (block.rawLines.some(l => l.includes('ID:') && !l.includes('Original Flashcard ID'))) {
            result.issues.push({ name: 'ContainsSourceIdComment', message: 'Target contains source ID comment near END', file, id });
          }
        }
        targetById.set(id, { file, content, block });
      }
    }

    // Compare content
    for (const [id, src] of sourceById.entries()) {
      const tgt = targetById.get(id);
      if (!tgt) {
        result.issues.push({ name: 'MissingMigratedFlashcard', message: `No migrated flashcard for id ${id}`, file: src.file, id });
        continue;
      }
      const srcParsed = this.validator.extractSourceContent(src.block);
      const tgtParsed = this.validator.extractTargetContent(tgt.block, tgt.content.split(/\r?\n/));
      if (!this.validator.contentsEqual(srcParsed, tgtParsed)) {
        result.issues.push({ name: 'ContentMismatch', message: `Content mismatch for id ${id}`, file: tgt.file, id });
      }
    }

    return result;
  }

  private listMarkdownFiles(dir: string): string[] {
    const out: string[] = [];
    const stack = [dir];
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

  private extractOriginalIdAboveStart(fileLines: string[], startIdx: number): string {
    let i = startIdx - 1;
    if (i < 0) return '';
    // skip possible blank lines? Spec expects the comment directly above, but allow multiline block ending right above START
    if (fileLines[i].trim().length === 0) return '';
    let collected: string[] = [];
    while (i >= 0 && fileLines[i].trim().length > 0) {
      collected.unshift(fileLines[i]);
      if (fileLines[i].includes('<!--')) break;
      i--;
    }
    const text = collected.join('\n');
    const m = text.match(/Original Flashcard ID:\s*([^\n<]+)(?:\s*-->)?/);
    return m ? m[1].trim() : '';
  }
}


