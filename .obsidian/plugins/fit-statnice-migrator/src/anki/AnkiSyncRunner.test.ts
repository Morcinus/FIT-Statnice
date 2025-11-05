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
});

