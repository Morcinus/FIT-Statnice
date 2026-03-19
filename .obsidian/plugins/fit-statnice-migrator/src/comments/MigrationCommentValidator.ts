export type CommentIssueName =
  | "MissingMigrationComment"
  | "KeyMissing"
  | "InvalidStatus"
  | "EmptyValue"
  | "InvalidExamNoteId"
  | "InvalidExamSectionName"
  | "InvalidNoneCombination"
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

export type ExamNoteSectionsMap = Map<string, Set<string>>;

const COMMENT_KEYS = {
  examNoteId: "Exam Note ID",
  examNoteSectionName: "Exam Note Section Name",
  migrationStatus: "Migration Status",
} as const;

type CommentFieldKey = (typeof COMMENT_KEYS)[keyof typeof COMMENT_KEYS];
type MigrationStatus = "review" | "migrate" | "done";

const REQUIRED_KEYS: readonly CommentFieldKey[] = [
  COMMENT_KEYS.examNoteId,
  COMMENT_KEYS.examNoteSectionName,
  COMMENT_KEYS.migrationStatus,
];

const ALLOWED_STATUSES = new Set<MigrationStatus>(["review", "migrate", "done"]);

interface ParsedCommentFields {
  examNoteId?: string;
  examNoteSectionName?: string;
  migrationStatus?: string;
  values: Map<string, string>;
}

export class MigrationCommentValidator {
  validateForFlashcard(
    lines: string[],
    startIndex: number,
    validExamNoteSections: ExamNoteSectionsMap
  ): CommentValidationResult {
    const issues: CommentIssue[] = [];
    const commentBlock = this.extractCommentBlockAboveStart(lines, startIndex);

    if (!commentBlock) {
      this.pushIssue(issues, "MissingMigrationComment", "No migration comment found above START");
      return this.toValidationResult(issues);
    }

    const parsed = this.parseCommentFields(commentBlock, issues);
    this.validateRequiredKeys(parsed.values, issues);
    this.validateStatus(parsed.migrationStatus, issues);
    this.validateRecommendationTarget(parsed, validExamNoteSections, issues);

    return this.toValidationResult(issues);
  }

  private extractCommentBlockAboveStart(lines: string[], startIndex: number): string | null {
    // START is at startIndex, comment should be above START (blank lines are allowed).
    let cursor = startIndex - 1;
    while (cursor >= 0 && lines[cursor].trim().length === 0) {
      cursor -= 1;
    }

    if (cursor < 0) {
      return null;
    }

    const endLine = lines[cursor];
    const endTrimmed = endLine.trim();

    if (endTrimmed.includes("<!--") && endTrimmed.includes("-->")) {
      return endLine;
    }

    if (!endTrimmed.includes("-->")) {
      return null;
    }

    let start = cursor;
    while (start >= 0) {
      const line = lines[start];
      if (line.trim().includes("<!--")) {
        return lines.slice(start, cursor + 1).join("\n");
      }
      start -= 1;
    }

    return null;
  }

  private parseCommentFields(
    block: string,
    issues: CommentIssue[]
  ): ParsedCommentFields {
    const startIdx = block.indexOf("<!--");
    const endIdx = block.lastIndexOf("-->");

    if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) {
      this.pushIssue(issues, "NotHtmlComment", "Comment must be in HTML comment syntax");
      return { values: new Map() };
    }

    const inner = block.substring(startIdx + 4, endIdx);
    const values = this.parseKeyValueLines(inner);

    return {
      examNoteId: values.get(COMMENT_KEYS.examNoteId),
      examNoteSectionName: values.get(COMMENT_KEYS.examNoteSectionName),
      migrationStatus: values.get(COMMENT_KEYS.migrationStatus),
      values,
    };
  }

  private parseKeyValueLines(innerComment: string): Map<string, string> {
    const values = new Map<string, string>();
    for (const rawLine of innerComment.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (line.length === 0) continue;

      const separatorIdx = line.indexOf(":");
      if (separatorIdx === -1) continue;

      const key = line.substring(0, separatorIdx).trim();
      const value = line.substring(separatorIdx + 1).trim();
      values.set(key, value);
    }
    return values;
  }

  private validateRequiredKeys(values: Map<string, string>, issues: CommentIssue[]): void {
    for (const key of REQUIRED_KEYS) {
      if (!values.has(key)) {
        this.pushIssue(issues, "KeyMissing", `Missing key: ${key}`);
        continue;
      }

      const value = values.get(key) ?? "";
      if (value.length === 0) {
        this.pushIssue(issues, "EmptyValue", `Empty value for key: ${key}`);
      }
    }
  }

  private validateStatus(status: string | undefined, issues: CommentIssue[]): void {
    if (!status) return;
    if (!ALLOWED_STATUSES.has(status as MigrationStatus)) {
      this.pushIssue(issues, "InvalidStatus", `Invalid Migration Status: ${status}`);
    }
  }

  private validateRecommendationTarget(
    parsed: ParsedCommentFields,
    validExamNoteSections: ExamNoteSectionsMap,
    issues: CommentIssue[]
  ): void {
    const { examNoteId, examNoteSectionName, migrationStatus } = parsed;
    if (!examNoteId || !examNoteSectionName || !migrationStatus) {
      return;
    }

    if (this.usesNone(examNoteId, examNoteSectionName)) {
      this.validateNoneCombination(examNoteId, examNoteSectionName, migrationStatus, issues);
      return;
    }

    this.validateExistingExamNoteAndSection(
      examNoteId,
      examNoteSectionName,
      validExamNoteSections,
      issues
    );
  }

  private usesNone(examNoteId: string, examNoteSectionName: string): boolean {
    return examNoteId === "none" || examNoteSectionName === "none";
  }

  private validateNoneCombination(
    examNoteId: string,
    examNoteSectionName: string,
    migrationStatus: string,
    issues: CommentIssue[]
  ): void {
    const isValidNoneTuple =
      examNoteId === "none" &&
      examNoteSectionName === "none" &&
      migrationStatus === "done";

    if (isValidNoneTuple) return;

    this.pushIssue(
      issues,
      "InvalidNoneCombination",
      'If "none" is used, allowed tuple is exactly: Exam Note ID=none, Exam Note Section Name=none, Migration Status=done',
      {
        examNoteId,
        examNoteSectionName,
        status: migrationStatus,
      }
    );
  }

  private validateExistingExamNoteAndSection(
    examNoteId: string,
    examNoteSectionName: string,
    validExamNoteSections: ExamNoteSectionsMap,
    issues: CommentIssue[]
  ): void {
    if (!validExamNoteSections.has(examNoteId)) {
      this.pushIssue(issues, "InvalidExamNoteId", `Invalid Exam Note ID: ${examNoteId}`);
      return;
    }

    const sections = validExamNoteSections.get(examNoteId);
    if (!sections?.has(examNoteSectionName)) {
      this.pushIssue(
        issues,
        "InvalidExamSectionName",
        `Invalid Exam Note Section Name for ${examNoteId}: ${examNoteSectionName}`
      );
    }
  }

  private pushIssue(
    issues: CommentIssue[],
    name: CommentIssueName,
    message: string,
    context?: Record<string, unknown>
  ): void {
    issues.push({ name, message, context });
  }

  private toValidationResult(issues: CommentIssue[]): CommentValidationResult {
    return { isValid: issues.length === 0, issues };
  }
}

