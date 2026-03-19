import * as fs from "fs";
import * as path from "path";

export interface FlashcardBlock {
  startIndex: number;
  endIndex: number;
  rawLines: string[];
}

export interface CommentBlock {
  startLine: number;
  endLine: number;
  text: string;
}

export interface RecommendationComment {
  examNoteId: string;
  examNoteSectionName: string;
  migrationStatus: string;
  statusLineIndex: number;
  commentStartLine: number;
  commentEndLine: number;
}

export interface CourseMatchedFile {
  filePath: string;
  courseId: string;
}

export interface AssetReference {
  sourceAbsolutePath: string;
  targetFileName: string;
  rewrittenPath: string;
}

const ID_COMMENT_RE = /<!--\s*ID\s*:\s*([^\n<]+?)\s*-->/i;
const ORIGINAL_ID_COMMENT_RE = /Original Flashcard ID:\s*([^\n<]+?)(?:\s*-->|\s*$)/i;

export function listMarkdownFiles(dir: string): string[] {
  const files: string[] = [];
  const stack = [dir];
  while (stack.length > 0) {
    const current = stack.pop();
    if (!current) continue;
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(full);
        continue;
      }
      if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
        files.push(full);
      }
    }
  }
  return files.sort((a, b) => a.localeCompare(b, "cs"));
}

export function collectCourseMatchedFiles(
  notesDir: string,
  courseIds: string[]
): CourseMatchedFile[] {
  if (courseIds.length === 0) return [];
  const sortedCourseIds = [...new Set(courseIds)].sort(
    (a, b) => b.length - a.length
  );
  const files = listMarkdownFiles(notesDir);
  const matched: CourseMatchedFile[] = [];

  for (const filePath of files) {
    const courseId = resolveCourseId(filePath, notesDir, sortedCourseIds);
    if (!courseId) continue;
    matched.push({ filePath, courseId });
  }

  return matched;
}

function resolveCourseId(
  filePath: string,
  notesDir: string,
  sortedCourseIds: string[]
): string | null {
  const relative = path.relative(notesDir, filePath);
  const segments = relative.split(path.sep);
  const fileName = path.basename(filePath);

  for (const courseId of sortedCourseIds) {
    if (segments.some((segment) => segment === courseId)) return courseId;
    if (fileName.includes(courseId)) return courseId;
  }

  return null;
}

export function parseFlashcardBlocks(lines: string[]): FlashcardBlock[] {
  const blocks: FlashcardBlock[] = [];
  for (let i = 0; i < lines.length; i += 1) {
    if (lines[i].trim() !== "START") continue;
    let end = i + 1;
    while (end < lines.length && lines[end].trim() !== "END") {
      end += 1;
    }
    if (end >= lines.length) continue;
    blocks.push({
      startIndex: i,
      endIndex: end,
      rawLines: lines.slice(i, end + 1),
    });
    i = end;
  }
  return blocks;
}

export function extractCommentBlockAboveLine(
  lines: string[],
  lineIndex: number
): CommentBlock | null {
  let cursor = lineIndex - 1;
  while (cursor >= 0 && lines[cursor].trim().length === 0) {
    cursor -= 1;
  }
  if (cursor < 0) return null;

  const endLine = lines[cursor];
  const endTrimmed = endLine.trim();

  if (endTrimmed.includes("<!--") && endTrimmed.includes("-->")) {
    return { startLine: cursor, endLine: cursor, text: endLine };
  }
  if (!endTrimmed.includes("-->")) {
    return null;
  }

  let start = cursor;
  while (start >= 0) {
    if (lines[start].includes("<!--")) {
      return {
        startLine: start,
        endLine: cursor,
        text: lines.slice(start, cursor + 1).join("\n"),
      };
    }
    start -= 1;
  }

  return null;
}

export function parseRecommendationAboveStart(
  lines: string[],
  startIndex: number
): RecommendationComment | null {
  const block = extractCommentBlockAboveLine(lines, startIndex);
  if (!block) return null;

  const inner = extractHtmlInner(block.text);
  if (inner === null) return null;

  const values = parseKeyValues(inner);
  const examNoteId = values.get("Exam Note ID");
  const examNoteSectionName = values.get("Exam Note Section Name");
  const migrationStatus = values.get("Migration Status");
  if (!examNoteId || !examNoteSectionName || !migrationStatus) return null;

  let statusLineIndex = -1;
  for (let i = block.startLine; i <= block.endLine; i += 1) {
    if (lines[i].includes("Migration Status:")) {
      statusLineIndex = i;
      break;
    }
  }
  if (statusLineIndex === -1) return null;

  return {
    examNoteId,
    examNoteSectionName,
    migrationStatus,
    statusLineIndex,
    commentStartLine: block.startLine,
    commentEndLine: block.endLine,
  };
}

function extractHtmlInner(text: string): string | null {
  const startIdx = text.indexOf("<!--");
  const endIdx = text.lastIndexOf("-->");
  if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) return null;
  return text.substring(startIdx + 4, endIdx);
}

function parseKeyValues(inner: string): Map<string, string> {
  const values = new Map<string, string>();
  for (const rawLine of inner.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (line.length === 0) continue;
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.substring(0, idx).trim();
    const value = line.substring(idx + 1).trim();
    values.set(key, value);
  }
  return values;
}

export function extractSourceIdFromBlock(block: FlashcardBlock): string | null {
  for (const line of block.rawLines) {
    const match = line.match(ID_COMMENT_RE);
    if (match) return match[1].trim();
  }
  return null;
}

export function extractOriginalIdAboveStart(
  fileLines: string[],
  startIndex: number
): string | null {
  const comment = extractCommentBlockAboveLine(fileLines, startIndex);
  if (!comment) return null;
  const match = comment.text.match(ORIGINAL_ID_COMMENT_RE);
  return match ? match[1].trim() : null;
}

export function extractOwnIdFromBlock(block: FlashcardBlock): string | null {
  for (const line of block.rawLines) {
    const match = line.match(ID_COMMENT_RE);
    if (match) return match[1].trim();
  }
  return null;
}

export function findSectionNameForLine(
  lines: string[],
  lineIndex: number
): string | null {
  for (let i = lineIndex; i >= 0; i -= 1) {
    if (lines[i].startsWith("## ")) {
      return lines[i].substring(3).trim();
    }
  }
  return null;
}

export function findSectionBounds(
  lines: string[],
  sectionName: string
): { headingIndex: number; insertIndex: number } | null {
  const headingLine = `## ${sectionName}`;
  const headingIndex = lines.findIndex((line) => line.trim() === headingLine);
  if (headingIndex === -1) return null;

  let nextHeading = lines.length;
  for (let i = headingIndex + 1; i < lines.length; i += 1) {
    if (lines[i].startsWith("## ")) {
      nextHeading = i;
      break;
    }
  }

  return { headingIndex, insertIndex: nextHeading };
}

export function normalizeForComparison(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

export function rewriteAssetLinksInLine(
  line: string,
  sourceFilePath: string
): { rewrittenLine: string; assets: AssetReference[] } {
  const assets: AssetReference[] = [];
  let rewrittenLine = rewriteMarkdownAssetLinks(line, sourceFilePath, assets);
  rewrittenLine = rewriteWikiAssetLinks(rewrittenLine, sourceFilePath, assets);
  return { rewrittenLine, assets };
}

export function extractLocalAssetFileNamesFromLine(line: string): string[] {
  const names: string[] = [];
  const markdownImageRe = /!\[[^\]]*]\(([^)]+)\)/g;
  for (const match of line.matchAll(markdownImageRe)) {
    const linkTarget = String(match[1]).trim();
    const local = toLocalAssetFileName(linkTarget);
    if (local) names.push(local);
  }

  const wikiImageRe = /!\[\[([^\]]+)]]/g;
  for (const match of line.matchAll(wikiImageRe)) {
    const inner = String(match[1]);
    const pipeIdx = inner.indexOf("|");
    const baseTarget = pipeIdx === -1 ? inner : inner.substring(0, pipeIdx);
    const local = toLocalAssetFileName(baseTarget.trim());
    if (local) names.push(local);
  }

  return names;
}

function rewriteMarkdownAssetLinks(
  line: string,
  sourceFilePath: string,
  assets: AssetReference[]
): string {
  const markdownImageRe = /!\[[^\]]*]\(([^)]+)\)/g;
  return line.replace(markdownImageRe, (full, rawTarget: string) => {
    const linkTarget = String(rawTarget).trim();
    const resolved = resolveLocalAsset(linkTarget, sourceFilePath);
    if (!resolved) return full;
    assets.push(resolved);
    return full.replace(linkTarget, resolved.rewrittenPath);
  });
}

function rewriteWikiAssetLinks(
  line: string,
  sourceFilePath: string,
  assets: AssetReference[]
): string {
  const wikiImageRe = /!\[\[([^\]]+)]]/g;
  return line.replace(wikiImageRe, (full, rawInner: string) => {
    const inner = String(rawInner);
    const pipeIdx = inner.indexOf("|");
    const baseTarget = pipeIdx === -1 ? inner : inner.substring(0, pipeIdx);
    const suffix = pipeIdx === -1 ? "" : inner.substring(pipeIdx);
    const resolved = resolveLocalAsset(baseTarget.trim(), sourceFilePath);
    if (!resolved) return full;
    assets.push(resolved);
    return `![[${resolved.rewrittenPath}${suffix}]]`;
  });
}

function resolveLocalAsset(
  linkTarget: string,
  sourceFilePath: string
): AssetReference | null {
  if (isExternalLink(linkTarget)) return null;

  const targetNoQuery = stripQueryAndHash(linkTarget);
  const normalizedPath = targetNoQuery.replace(/\\/g, "/");
  const encodedFileName = path.posix.basename(normalizedPath);
  if (!encodedFileName || encodedFileName === "." || encodedFileName === "..") {
    return null;
  }

  const decodedFileName = safeDecodeURIComponent(encodedFileName);
  const decodedSourcePath = safeDecodeURIComponent(normalizedPath);
  const sourceAbsolutePath = resolveSourceAssetPath(
    sourceFilePath,
    decodedSourcePath,
    decodedFileName
  );

  return {
    sourceAbsolutePath,
    targetFileName: decodedFileName,
    rewrittenPath: `../../Assets/${encodeURIComponent(decodedFileName)}`,
  };
}

function resolveSourceAssetPath(
  sourceFilePath: string,
  decodedSourcePath: string,
  decodedFileName: string
): string {
  const candidates: string[] = [];

  // 1) Standard markdown-relative resolution from current note directory.
  candidates.push(path.resolve(path.dirname(sourceFilePath), decodedSourcePath));

  // 2) Obsidian-vault style fallback for wiki embeds like ![[Pasted image ...]].
  const vaultRoot = detectVaultRootFromNotePath(sourceFilePath);
  if (vaultRoot) {
    candidates.push(path.resolve(vaultRoot, decodedSourcePath));
    candidates.push(path.join(vaultRoot, "Assets", decodedFileName));
  }

  const uniqueCandidates = [...new Set(candidates)];
  const existing = uniqueCandidates.find((candidate) => fs.existsSync(candidate));
  return existing ?? uniqueCandidates[0];
}

function detectVaultRootFromNotePath(sourceFilePath: string): string | null {
  const normalized = path.normalize(sourceFilePath);
  const parts = normalized.split(path.sep);
  const notesIndex = parts.findIndex((part) => part.toLowerCase() === "notes");
  if (notesIndex <= 0) return null;
  const rootParts = parts.slice(0, notesIndex);
  if (rootParts.length === 0) return null;
  return rootParts.join(path.sep);
}

function toLocalAssetFileName(linkTarget: string): string | null {
  if (isExternalLink(linkTarget)) return null;
  const noQuery = stripQueryAndHash(linkTarget).replace(/\\/g, "/");
  const encodedName = path.posix.basename(noQuery);
  if (!encodedName || encodedName === "." || encodedName === "..") return null;
  return safeDecodeURIComponent(encodedName);
}

function stripQueryAndHash(linkTarget: string): string {
  const hashIdx = linkTarget.indexOf("#");
  const queryIdx = linkTarget.indexOf("?");
  let cutoff = linkTarget.length;
  if (hashIdx !== -1) cutoff = Math.min(cutoff, hashIdx);
  if (queryIdx !== -1) cutoff = Math.min(cutoff, queryIdx);
  return linkTarget.substring(0, cutoff);
}

function isExternalLink(linkTarget: string): boolean {
  const normalized = linkTarget.trim().toLowerCase();
  return (
    normalized.startsWith("http://") ||
    normalized.startsWith("https://") ||
    normalized.startsWith("data:")
  );
}

function safeDecodeURIComponent(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}
