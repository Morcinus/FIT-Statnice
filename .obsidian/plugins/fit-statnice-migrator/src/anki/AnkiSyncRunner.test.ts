import * as fs from "fs";
import * as path from "path";
import { AnkiSyncRunner } from "./AnkiSyncRunner";
import { QuietConsoleLoggingService } from "../logging";

const tmpDir = path.join(__dirname, "__tmp_anki__");
const notesDir = path.join(tmpDir, "Notes", "Magisterske");

function mkdirp(p: string) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

beforeEach(() => {
  mkdirp(notesDir);
});

afterEach(() => {
  if (fs.existsSync(tmpDir))
    fs.rmSync(tmpDir, { recursive: true, force: true });
});

function writeFile(rel: string, content: string) {
  const p = path.join(notesDir, rel);
  mkdirp(path.dirname(p));
  fs.writeFileSync(p, content, "utf8");
  return p;
}

function card(id: string | null) {
  const comment = id ? `<!-- ID: ${id} -->` : null;
  return `START\nNI-SZZ\nQ\n\nBack:\nA${comment ? `\n${comment}` : ""}\nEND\n\n---`;
}

function cardWithBlankLinesBeforeEnd(id: string): string {
  return `START\nNI-SZZ\nQ\n\nBack:\nA\n<!-- ID: ${id} -->\n\n\nEND\n\n---`;
}

function cardWithOriginalFlashcardIdOnly(originalId: string): string {
  return `<!--\nOriginal Flashcard ID: ${originalId}\n-->\nSTART\nNI-SZZ\nQ\n\nBack:\nA\nEND\n\n---`;
}

describe("AnkiSyncRunner", () => {
  test("counts flashcards and reports missing ID comments", () => {
    const md = `# Note\n\n${card("anki-1")}\n\n${card(null)}`;
    writeFile("test1.md", md);
    const runner = new AnkiSyncRunner(new QuietConsoleLoggingService());
    const res = runner.run(tmpDir);
    expect(res.totalFlashcards).toBe(2);
    expect(
      res.issues.some(
        (i) =>
          i.name === "MissingAnkiIdComment" ||
          i.name === "InvalidIdCommentFormat"
      )
    ).toBe(true);
  });

  test("all valid cards pass", () => {
    const md = `# Note\n\n${card("anki-1")}\n\n${card("anki-2")}`;
    writeFile("test1.md", md);
    const runner = new AnkiSyncRunner(new QuietConsoleLoggingService());
    const res = runner.run(tmpDir);
    expect(res.totalFlashcards).toBe(2);
    expect(res.issues).toHaveLength(0);
  });

  test("scans nested directories", () => {
    writeFile("subdir/test.md", card("anki-1"));
    writeFile("test2.md", card("anki-2"));
    const runner = new AnkiSyncRunner(new QuietConsoleLoggingService());
    const res = runner.run(tmpDir);
    expect(res.totalFlashcards).toBe(2);
    expect(res.issues).toHaveLength(0);
  });

  test("filters scanned exam notes by configured course IDs", () => {
    writeFile("NI-SI-09 NI-AM1.md", card("anki-am1"));
    writeFile("NI-SI-13 NI-NUR.md", card(null));
    const runner = new AnkiSyncRunner(new QuietConsoleLoggingService());
    const res = runner.run(tmpDir, ["NI-AM1"]);
    expect(res.totalFlashcards).toBe(1);
    expect(res.issues).toHaveLength(0);
  });

  test("duplicate ID detection is scoped to scanned courses", () => {
    writeFile("NI-SI-09 NI-AM1.md", card("shared-id"));
    writeFile("NI-SI-13 NI-NUR.md", card("shared-id"));
    const runner = new AnkiSyncRunner(new QuietConsoleLoggingService());
    const res = runner.run(tmpDir, ["NI-AM1"]);
    expect(res.totalFlashcards).toBe(1);
    expect(res.issues.filter((i) => i.name === "DuplicateAnkiId")).toHaveLength(0);
  });

  test("allows blank lines between ID comment and END", () => {
    writeFile("blanks.md", cardWithBlankLinesBeforeEnd("anki-blank"));
    const runner = new AnkiSyncRunner(new QuietConsoleLoggingService());
    const res = runner.run(tmpDir);
    expect(res.totalFlashcards).toBe(1);
    expect(res.issues).toHaveLength(0);
  });

  test("reports duplicate IDs across files", () => {
    writeFile("a.md", card("dup-1"));
    writeFile("nested/b.md", card("dup-1"));
    const runner = new AnkiSyncRunner(new QuietConsoleLoggingService());
    const res = runner.run(tmpDir);
    const duplicateIssues = res.issues.filter((i) => i.name === "DuplicateAnkiId");
    expect(res.totalFlashcards).toBe(2);
    expect(duplicateIssues).toHaveLength(2);
  });

  test("reports duplicate IDs in same file", () => {
    writeFile("same.md", `${card("dup-same")}\n\n${card("dup-same")}`);
    const runner = new AnkiSyncRunner(new QuietConsoleLoggingService());
    const res = runner.run(tmpDir);
    const duplicateIssues = res.issues.filter((i) => i.name === "DuplicateAnkiId");
    expect(res.totalFlashcards).toBe(2);
    expect(duplicateIssues).toHaveLength(2);
  });

  test("original flashcard id comment above START is not accepted as Anki ID", () => {
    writeFile("orig-only.md", cardWithOriginalFlashcardIdOnly("source-123"));
    const runner = new AnkiSyncRunner(new QuietConsoleLoggingService());
    const res = runner.run(tmpDir);
    expect(res.totalFlashcards).toBe(1);
    expect(res.issues.some((i) => i.name === "MissingAnkiIdComment")).toBe(true);
  });
});

