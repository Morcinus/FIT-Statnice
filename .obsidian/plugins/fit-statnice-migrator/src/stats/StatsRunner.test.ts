import * as fs from "fs";
import * as path from "path";
import { QuietConsoleLoggingService } from "../logging";
import { StatsRunner } from "./StatsRunner";

const tmp = path.join(__dirname, "__tmp_stats__");
const fitNotesRoot = path.join(tmp, "FIT-Notes");
const fitNotesNotes = path.join(fitNotesRoot, "Notes");
const statniceRoot = path.join(tmp, "FIT-Statnice");
const statniceNotes = path.join(statniceRoot, "Notes", "Magisterske");

function mkdirp(p: string): void {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function writeFile(filePath: string, content: string): void {
  mkdirp(path.dirname(filePath));
  fs.writeFileSync(filePath, content, "utf8");
}

function card(index: number): string {
  return `START\nNI-SZZ\nQ${index}\n\nBack:\nA${index}\nEND\n\n---`;
}

function cards(count: number): string {
  return Array.from({ length: count }, (_, i) => card(i + 1)).join("\n\n");
}

function sourceCardWithStatus(status: "done" | "review"): string {
  return `<!--
Exam Note ID: SOME-NOTE
Exam Note Section Name: Some section
Migration Status: ${status}
-->
START
FIT-Card
Q

Back:
A
END

---`;
}

function sourceCardWithoutComment(): string {
  return `START
FIT-Card
Q

Back:
A
END

---`;
}

beforeEach(() => {
  mkdirp(fitNotesNotes);
  mkdirp(statniceNotes);
});

afterEach(() => {
  if (fs.existsSync(tmp)) fs.rmSync(tmp, { recursive: true, force: true });
});

describe("StatsRunner", () => {
  test("computes card counts, bins and totals for all exam notes", () => {
    const notes = [
      { id: "NI-SI-101", count: 19, expectedColor: "red" },
      { id: "NI-SI-102", count: 20, expectedColor: "yellow" },
      { id: "NI-SI-103", count: 29, expectedColor: "yellow" },
      { id: "NI-SI-104", count: 30, expectedColor: "green" },
      { id: "NI-SI-105", count: 49, expectedColor: "green" },
      { id: "NI-SI-106", count: 50, expectedColor: "yellow" },
      { id: "NI-SI-107", count: 59, expectedColor: "yellow" },
      { id: "NI-SI-108", count: 60, expectedColor: "red" },
    ] as const;

    for (const note of notes) {
      writeFile(
        path.join(statniceNotes, `${note.id} NI-TST.md`),
        `# Header\n\n${cards(note.count)}`
      );
    }

    writeFile(
      path.join(fitNotesNotes, "Semestr 1", "NI-TST", "src.md"),
      `${sourceCardWithStatus("done")}\n\n${sourceCardWithStatus("done")}`
    );

    const runner = new StatsRunner(new QuietConsoleLoggingService());
    const res = runner.run(fitNotesRoot, statniceRoot);

    expect(res.totalNotes).toBe(8);
    expect(res.totalFlashcards).toBe(316);
    expect(res.finishedNotes).toBe(8);

    for (const note of notes) {
      const found = res.notes.find((n) => n.examNoteId === note.id);
      expect(found).toBeDefined();
      expect(found?.flashcards).toBe(note.count);
      expect(found?.color).toBe(note.expectedColor);
      expect(found?.finished).toBe(true);
    }
  });

  test("uses course-based finished status and treats unresolved course as unfinished", () => {
    writeFile(path.join(statniceNotes, "NI-SI-1 NI-C1.md"), cards(10));
    writeFile(path.join(statniceNotes, "NI-SI-2 NI-C2.md"), cards(12));
    writeFile(path.join(statniceNotes, "NI-SI-3 NI-C3.md"), cards(4));
    writeFile(path.join(statniceNotes, "NI-SI-4.md"), cards(1));

    writeFile(
      path.join(fitNotesNotes, "Semestr 1", "NI-C1", "src.md"),
      `${sourceCardWithStatus("done")}\n\n${sourceCardWithStatus("done")}`
    );
    writeFile(
      path.join(fitNotesNotes, "Semestr 1", "NI-C2", "src.md"),
      `${sourceCardWithStatus("done")}\n\n${sourceCardWithStatus(
        "review"
      )}\n\n${sourceCardWithoutComment()}`
    );
    // NI-C3 has zero source cards -> unfinished by rule.

    const runner = new StatsRunner(new QuietConsoleLoggingService());
    const res = runner.run(fitNotesRoot, statniceRoot);

    expect(res.totalNotes).toBe(4);
    expect(res.totalFlashcards).toBe(27);
    expect(res.finishedNotes).toBe(1);

    expect(res.notes.find((n) => n.examNoteId === "NI-SI-1")?.finished).toBe(true);
    expect(res.notes.find((n) => n.examNoteId === "NI-SI-2")?.finished).toBe(false);
    expect(res.notes.find((n) => n.examNoteId === "NI-SI-3")?.finished).toBe(false);
    expect(res.notes.find((n) => n.examNoteId === "NI-SI-4")?.finished).toBe(false);
  });
});
