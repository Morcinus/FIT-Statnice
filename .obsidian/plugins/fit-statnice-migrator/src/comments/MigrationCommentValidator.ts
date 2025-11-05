export type CommentIssueName =
  | "MissingMigrationComment"
  | "KeyMissing"
  | "InvalidStatus"
  | "EmptyValue"
  | "NotDirectlyAboveStart"
  | "NotHtmlComment";

export interface CommentIssue {
  name: CommentIssueName;
  message: string;
  context?: Record<string, unknown>;
}

export interface CommentValidationResult {
  isValid: boolean;
  issues: CommentIssue[];
}

const REQUIRED_KEYS = [
  "Exam Note ID",
  "Exam Note Section Name",
  "Migration Status",
];

const ALLOWED_STATUSES = new Set(["review", "migrate", "done"]);

export class MigrationCommentValidator {
  validateForFlashcard(
    lines: string[],
    startIndex: number
  ): CommentValidationResult {
    // startIndex points to line with literal 'START'
    const issues: CommentIssue[] = [];
    if (startIndex === 0) {
      issues.push({
        name: "MissingMigrationComment",
        message: "No comment present above START",
      });
      return { isValid: false, issues };
    }
    const prevLine = lines[startIndex - 1];
    if (!prevLine.trim().startsWith("<!--") || !prevLine.includes("-->")) {
      // Either not a comment, or multiline comment not on single line
      // Allow multiline comments: find the nearest comment block ending at startIndex - 1 with no blank lines between
      const block = this.extractImmediateCommentBlock(lines, startIndex - 1);
      if (!block) {
        // Not a comment
        issues.push({
          name: "NotHtmlComment",
          message: "Expected HTML comment directly above START",
        });
        return { isValid: false, issues };
      }
      return this.validateCommentBlock(block, issues);
    }
    // Single-line HTML comment directly above
    const block = prevLine;
    return this.validateCommentBlock(block, issues);
  }

  private extractImmediateCommentBlock(
    lines: string[],
    lastIdx: number
  ): string | null {
    // Walk upwards until we hit a non-empty line that is not part of an HTML comment block
    // Require that the line immediately above START is either '-->' or part of comment; no blank line allowed
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

  private validateCommentBlock(
    block: string,
    issues: CommentIssue[]
  ): CommentValidationResult {
    if (!block.includes("<!--") || !block.includes("-->")) {
      issues.push({
        name: "NotHtmlComment",
        message: "Comment must be in HTML comment syntax",
      });
      return { isValid: false, issues };
    }
    const inner = block.substring(
      block.indexOf("<!--") + 4,
      block.lastIndexOf("-->")
    );
    const lines = inner
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter((l) => l.length > 0);
    const map = new Map<string, string>();
    for (const line of lines) {
      const idx = line.indexOf(":");
      if (idx === -1) continue;
      const key = line.substring(0, idx).trim();
      const value = line.substring(idx + 1).trim();
      map.set(key, value);
    }

    for (const key of REQUIRED_KEYS) {
      if (!map.has(key)) {
        issues.push({ name: "KeyMissing", message: `Missing key: ${key}` });
      } else {
        const val = map.get(key) ?? "";
        if (val.length === 0) {
          issues.push({
            name: "EmptyValue",
            message: `Empty value for key: ${key}`,
          });
        }
      }
    }

    const status = map.get("Migration Status");
    if (status && !ALLOWED_STATUSES.has(status)) {
      issues.push({
        name: "InvalidStatus",
        message: `Invalid Migration Status: ${status}`,
      });
    }

    return { isValid: issues.length === 0, issues };
  }
}
