export type AnkiIssueName = "MissingAnkiIdComment" | "InvalidIdCommentFormat";

export interface AnkiIssue {
  name: AnkiIssueName;
  message: string;
  context?: Record<string, unknown>;
}

export interface AnkiValidationResult {
  isValid: boolean;
  issues: AnkiIssue[];
  idValue?: string;
}

export class AnkiIdValidator {
  validateForFlashcard(lines: string[], endIndex: number): AnkiValidationResult {
    // endIndex points to line with literal 'END'
    const issues: AnkiIssue[] = [];
    if (endIndex === 0) {
      issues.push({
        name: "MissingAnkiIdComment",
        message: "No comment present before END",
      });
      return { isValid: false, issues };
    }
    const prevLine = lines[endIndex - 1];
    if (!prevLine.trim().startsWith("<!--") || !prevLine.includes("-->")) {
      // Either not a comment, or multiline comment not on single line
      // Allow multiline comments: find the nearest comment block ending at endIndex - 1 with no blank lines between
      const block = this.extractImmediateCommentBlock(lines, endIndex - 1);
      if (!block) {
        issues.push({
          name: "MissingAnkiIdComment",
          message: "Expected HTML comment directly before END",
        });
        return { isValid: false, issues };
      }
      return this.validateIdComment(block, issues);
    }
    // Single-line HTML comment directly before
    return this.validateIdComment(prevLine, issues);
  }

  private extractImmediateCommentBlock(
    lines: string[],
    lastIdx: number
  ): string | null {
    // Walk upwards until we hit a non-empty line that is not part of an HTML comment block
    // Require that the line immediately before END is either '-->' or part of comment; no blank line allowed
    let i = lastIdx;
    if (lines[i].trim().length === 0) return null; // blank line not allowed
    let collected: string[] = [];
    while (i >= 0) {
      const line = lines[i];
      if (line.trim().length === 0) break;
      collected.unshift(line);
      if (line.includes("<!--")) break;
      i--;
    }
    const text = collected.join("\n");
    if (text.includes("<!--") && text.includes("-->")) return text;
    return null;
  }

  private validateIdComment(
    block: string,
    issues: AnkiIssue[]
  ): AnkiValidationResult {
    if (!block.includes("<!--") || !block.includes("-->")) {
      issues.push({
        name: "InvalidIdCommentFormat",
        message: "Comment must be in HTML comment syntax",
      });
      return { isValid: false, issues };
    }
    const inner = block.substring(
      block.indexOf("<!--") + 4,
      block.lastIndexOf("-->")
    );
    // Look for ID: or ID = pattern
    const idMatch = inner.match(/ID\s*[:=]\s*([^\n<]+)/i);
    if (!idMatch) {
      issues.push({
        name: "MissingAnkiIdComment",
        message: "Comment does not contain ID key",
      });
      return { isValid: false, issues };
    }
    const idValue = idMatch[1].trim();
    if (idValue.length === 0) {
      issues.push({
        name: "InvalidIdCommentFormat",
        message: "ID value is empty",
      });
      return { isValid: false, issues };
    }
    return { isValid: true, issues: [], idValue };
  }
}

