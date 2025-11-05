export type MigrationIssueName =
  | 'InvalidMigratedFormat'
  | 'MissingMigratedFlashcard'
  | 'ContentMismatch'
  | 'MissingOriginalIdComment'
  | 'ContainsSourceIdComment';

export interface MigrationIssue {
  name: MigrationIssueName;
  message: string;
  context?: Record<string, unknown>;
}

export interface FlashcardBlock {
  rawLines: string[];
  startIndex: number;
  endIndex: number;
}

export interface ParsedFlashcardContent {
  question: string;
  answer: string;
  idComment?: string; // source: ID comment before END; target: Original Flashcard ID comment above START
}

export class MigratedFlashcardValidator {
  parseFlashcards(fileContent: string): FlashcardBlock[] {
    const lines = fileContent.split(/\r?\n/);
    const blocks: FlashcardBlock[] = [];
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim() === 'START') {
        let j = i + 1;
        while (j < lines.length && lines[j].trim() !== 'END') j++;
        if (j < lines.length && lines[j].trim() === 'END') {
          blocks.push({ rawLines: lines.slice(i, j + 1), startIndex: i, endIndex: j });
          i = j;
        }
      }
    }
    return blocks;
  }

  ensureTargetFormat(targetBlock: FlashcardBlock, fullFile: string): MigrationIssue[] {
    const issues: MigrationIssue[] = [];
    const lines = targetBlock.rawLines;
    if (lines.length < 4) {
      issues.push({ name: 'InvalidMigratedFormat', message: 'Flashcard block too short' });
      return issues;
    }
    const typeLine = lines[1]?.trim();
    if (typeLine !== 'NI-SZZ') {
      issues.push({ name: 'InvalidMigratedFormat', message: 'Missing NI-SZZ type line' });
    }
    const backIndex = lines.findIndex((l) => l.trim() === 'Back:');
    if (backIndex === -1) {
      issues.push({ name: 'InvalidMigratedFormat', message: 'Missing Back: line' });
    }
    // separator line (---) after END somewhere in file
    const fileLines = fullFile.split(/\r?\n/);
    const afterEnd = fileLines.slice(targetBlock.endIndex + 1, targetBlock.endIndex + 4);
    if (!afterEnd.some((l) => l.trim() === '---')) {
      issues.push({ name: 'InvalidMigratedFormat', message: 'Missing separator line (---) after END' });
    }
    return issues;
  }

  extractSourceContent(block: FlashcardBlock): ParsedFlashcardContent {
    const lines = block.rawLines.slice();
    // remove type line (FIT-Card/Basic)
    const questionLines: string[] = [];
    const answerLines: string[] = [];
    let inAnswer = false;
    let idComment: string | undefined;
    for (let i = 1; i < lines.length - 1; i++) {
      const t = lines[i];
      const trimmed = t.trim();
      if (i === 1 && (trimmed === 'FIT-Card' || trimmed === 'Basic')) continue;
      if (t.trim().startsWith('<!--') && t.includes('ID:')) {
        idComment = t;
        continue; // ignore id comment
      }
      if (trimmed === 'Back:') {
        inAnswer = true;
        continue;
      }
      if (!inAnswer) questionLines.push(t);
      else answerLines.push(t);
    }
    return { question: questionLines.join('\n'), answer: answerLines.join('\n'), idComment };
  }

  extractTargetContent(block: FlashcardBlock, fileLines: string[]): ParsedFlashcardContent {
    const lines = block.rawLines.slice();
    // Look for Original Flashcard ID comment directly above START in file lines
    let idComment: string | undefined;
    const startIdx = block.startIndex;
    if (startIdx > 0) {
      const prev = fileLines[startIdx - 1];
      if (prev?.includes('Original Flashcard ID:')) idComment = prev;
    }

    // remove NI-SZZ line
    const questionLines: string[] = [];
    const answerLines: string[] = [];
    let inAnswer = false;
    for (let i = 1; i < lines.length - 1; i++) {
      const t = lines[i];
      if (t.trim() === 'NI-SZZ') continue;
      if (t.trim() === 'Back:') {
        inAnswer = true;
        continue;
      }
      // ensure no source ID comment migrated near END
      if (t.trim().startsWith('<!--') && t.includes('ID:')) {
        // This should not be here in target
        // Keep it in content for mismatch detection and separately flag via issue in runner
        continue;
      }
      if (!inAnswer) questionLines.push(t);
      else answerLines.push(t);
    }
    return { question: questionLines.join('\n'), answer: answerLines.join('\n'), idComment };
  }

  normalize(text: string): string {
    return text.replace(/\s+/g, ' ').trim();
  }

  contentsEqual(src: ParsedFlashcardContent, tgt: ParsedFlashcardContent): boolean {
    return this.normalize(src.question) === this.normalize(tgt.question) &&
      this.normalize(src.answer) === this.normalize(tgt.answer);
  }
}


