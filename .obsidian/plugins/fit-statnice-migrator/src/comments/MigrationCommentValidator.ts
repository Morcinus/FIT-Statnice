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
    // Look for comment block, skipping blank lines between comment and START
    const block = this.extractCommentBlock(lines, startIndex - 1);
    if (!block) {
      issues.push({
        name: "MissingMigrationComment",
        message: "No migration comment found above START",
      });
      return { isValid: false, issues };
    }
    return this.validateCommentBlock(block, issues);
  }

  private extractCommentBlock(
    lines: string[],
    startIdx: number
  ): string | null {
    // Walk upwards from startIdx, skipping blank lines, to find the comment block
    let i = startIdx;
    // Skip blank lines
    while (i >= 0 && lines[i].trim().length === 0) {
      i--;
    }
    if (i < 0) return null; // No non-blank lines found

    // Now collect the comment block, starting from the first non-blank line
    let collected: string[] = [];
    let foundCommentStart = false;

    while (i >= 0) {
      const line = lines[i];
      const trimmed = line.trim();

      // If we hit a blank line after starting to collect, stop
      if (trimmed.length === 0 && collected.length > 0) {
        break;
      }

      // If we hit a non-blank line that's not part of a comment and we've already collected something, stop
      if (
        trimmed.length > 0 &&
        !trimmed.includes("<!--") &&
        !trimmed.includes("-->") &&
        collected.length > 0 &&
        foundCommentStart
      ) {
        break;
      }

      if (trimmed.length > 0) {
        collected.unshift(line);
        if (trimmed.includes("<!--")) {
          foundCommentStart = true;
        }
        // If we found the start and end of comment, we're done
        if (foundCommentStart && collected.join("\n").includes("-->")) {
          break;
        }
      }

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
