import * as fs from "fs";
import * as path from "path";
import { QuietConsoleLoggingService } from "../logging";
import { MigrationNotesRunner } from "./MigrationNotesRunner";

const tmp = path.join(__dirname, "__tmp_migrate_notes__");
const srcRoot = path.join(tmp, "FIT-Notes");
const srcNotes = path.join(srcRoot, "Notes");
const srcAssets = path.join(srcRoot, "Assets");
const tgtRoot = path.join(tmp, "FIT-Statnice");
const tgtNotes = path.join(tgtRoot, "Notes", "Magisterske");
const tgtAssets = path.join(tgtRoot, "Assets");

function mkdirp(p: string): void {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function writeFile(filePath: string, content: string): void {
  mkdirp(path.dirname(filePath));
  fs.writeFileSync(filePath, content, "utf8");
}

beforeEach(() => {
  mkdirp(srcNotes);
  mkdirp(srcAssets);
  mkdirp(tgtNotes);
  mkdirp(tgtAssets);
});

afterEach(() => {
  if (fs.existsSync(tmp)) fs.rmSync(tmp, { recursive: true, force: true });
});

function sourceCard(opts?: { status?: string; id?: string; section?: string; includeMarker?: boolean }): string {
  const status = opts?.status ?? "migrate";
  const id = opts?.id ?? "src-1";
  const section = opts?.section ?? "Section A";
  const marker = opts?.includeMarker === false ? "" : "\n(FIT-Notes flashcard)\n";
  return `<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: ${section}
Migration Status: ${status}
-->

START
FIT-Card${marker}
Question

Back:
Answer
![](../../../Assets/test%20image.png)
<!--ID: ${id}-->
END

---`;
}

function sourceCardWithWikiImage(opts?: { status?: string; id?: string; section?: string }): string {
  const status = opts?.status ?? "migrate";
  const id = opts?.id ?? "wiki-1";
  const section = opts?.section ?? "Section A";
  return `<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: ${section}
Migration Status: ${status}
-->

START
FIT-Card

Question

Back:
Answer
![[test image.png]]
<!--ID: ${id}-->
END

---`;
}

function targetNote(contentInsideSection: string): string {
  return `---
created: now
---

## Section A
${contentInsideSection}

## Section B
`;
}

describe("MigrationNotesRunner", () => {
  test("migrates migrate cards, rewrites content, copies assets and marks status done", () => {
    writeFile(
      path.join(srcNotes, "Semestr 1", "NI-AM1", "src.md"),
      `${sourceCard({ status: "migrate", id: "src-1" })}\n${sourceCard({
        status: "review",
        id: "src-2",
      })}`
    );
    writeFile(path.join(srcAssets, "test image.png"), "asset-content");
    writeFile(path.join(tgtNotes, "NI-SI-9 NI-AM1.md"), targetNote(""));

    const runner = new MigrationNotesRunner(new QuietConsoleLoggingService());
    const res = runner.run(srcRoot, tgtRoot, ["NI-AM1"]);

    expect(res.candidateFlashcards).toBe(1);
    expect(res.migratedFlashcards).toBe(1);
    expect(res.updatedStatuses).toBe(1);
    expect(res.issues).toHaveLength(0);

    const updatedSource = fs.readFileSync(
      path.join(srcNotes, "Semestr 1", "NI-AM1", "src.md"),
      "utf8"
    );
    expect(updatedSource).toContain("Migration Status: done");
    expect(updatedSource).toContain("Migration Status: review");

    const updatedTarget = fs.readFileSync(
      path.join(tgtNotes, "NI-SI-9 NI-AM1.md"),
      "utf8"
    );
    expect(updatedTarget).toContain("Original Flashcard ID: src-1");
    expect(updatedTarget).toContain("\nNI-SZZ\n");
    expect(updatedTarget).not.toContain("(FIT-Notes flashcard)");
    expect(updatedTarget).not.toContain("<!--ID: src-1-->");
    expect(updatedTarget).toContain("![](../../Assets/test%20image.png)");
    expect(fs.existsSync(path.join(tgtAssets, "test image.png"))).toBe(true);
  });

  test("existing duplicate in same location is skipped and source status is updated", () => {
    writeFile(
      path.join(srcNotes, "Semestr 1", "NI-AM1", "src.md"),
      sourceCard({ status: "migrate", id: "dup-1", includeMarker: false })
    );
    writeFile(path.join(srcAssets, "test image.png"), "asset-content");
    const existing = `<!--
Original Flashcard ID: dup-1
-->

START
NI-SZZ
Question
Back:
Answer
![](../../Assets/test%20image.png)
END

---`;
    writeFile(path.join(tgtNotes, "NI-SI-9 NI-AM1.md"), targetNote(existing));
    writeFile(path.join(tgtAssets, "test image.png"), "asset-content");

    const runner = new MigrationNotesRunner(new QuietConsoleLoggingService());
    const res = runner.run(srcRoot, tgtRoot, ["NI-AM1"]);

    expect(res.migratedFlashcards).toBe(0);
    expect(res.skippedDuplicates).toBe(1);
    expect(res.updatedStatuses).toBe(1);
    expect(res.issues).toHaveLength(0);
  });

  test("missing target section reports issue and keeps source status unchanged", () => {
    writeFile(
      path.join(srcNotes, "Semestr 1", "NI-AM1", "src.md"),
      sourceCard({ status: "migrate", id: "sec-1", section: "Missing section" })
    );
    writeFile(path.join(srcAssets, "test image.png"), "asset-content");
    writeFile(path.join(tgtNotes, "NI-SI-9 NI-AM1.md"), targetNote(""));

    const runner = new MigrationNotesRunner(new QuietConsoleLoggingService());
    const res = runner.run(srcRoot, tgtRoot, ["NI-AM1"]);

    expect(res.issues.some((i) => i.name === "MissingTargetSection")).toBe(true);
    const source = fs.readFileSync(
      path.join(srcNotes, "Semestr 1", "NI-AM1", "src.md"),
      "utf8"
    );
    expect(source).toContain("Migration Status: migrate");
  });

  test("asset conflict reports issue and keeps source status unchanged", () => {
    writeFile(
      path.join(srcNotes, "Semestr 1", "NI-AM1", "src.md"),
      sourceCard({ status: "migrate", id: "asset-1" })
    );
    writeFile(path.join(srcAssets, "test image.png"), "source-asset");
    writeFile(path.join(tgtAssets, "test image.png"), "different-target-asset");
    writeFile(path.join(tgtNotes, "NI-SI-9 NI-AM1.md"), targetNote(""));

    const runner = new MigrationNotesRunner(new QuietConsoleLoggingService());
    const res = runner.run(srcRoot, tgtRoot, ["NI-AM1"]);

    expect(res.issues.some((i) => i.name === "AssetConflict")).toBe(true);
    const source = fs.readFileSync(
      path.join(srcNotes, "Semestr 1", "NI-AM1", "src.md"),
      "utf8"
    );
    expect(source).toContain("Migration Status: migrate");
  });

  test("bare wiki image embeds resolve from FIT-Notes Assets", () => {
    writeFile(
      path.join(srcNotes, "Semestr 1", "NI-AM1", "src.md"),
      sourceCardWithWikiImage({ status: "migrate", id: "wiki-embed-1" })
    );
    writeFile(path.join(srcAssets, "test image.png"), "asset-content");
    writeFile(path.join(tgtNotes, "NI-SI-9 NI-AM1.md"), targetNote(""));

    const runner = new MigrationNotesRunner(new QuietConsoleLoggingService());
    const res = runner.run(srcRoot, tgtRoot, ["NI-AM1"]);

    expect(res.issues).toHaveLength(0);
    expect(res.migratedFlashcards).toBe(1);
    const updatedTarget = fs.readFileSync(
      path.join(tgtNotes, "NI-SI-9 NI-AM1.md"),
      "utf8"
    );
    expect(updatedTarget).toContain("![[../../Assets/test%20image.png]]");
    expect(fs.existsSync(path.join(tgtAssets, "test image.png"))).toBe(true);
  });
});
