import * as fs from "fs";
import * as path from "path";
import { QuietConsoleLoggingService } from "../logging";
import { MigratedFlashcardsRunner } from "./MigratedFlashcardsRunner";

const tmp = path.join(__dirname, "__tmp_migrated_cards__");
const srcNotes = path.join(tmp, "FIT-Notes", "Notes");
const tgtNotes = path.join(tmp, "FIT-Statnice", "Notes", "Magisterske");
const tgtAssets = path.join(tmp, "FIT-Statnice", "Assets");

function mkdirp(p: string): void {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function writeFile(filePath: string, content: string): void {
  mkdirp(path.dirname(filePath));
  fs.writeFileSync(filePath, content, "utf8");
}

beforeEach(() => {
  mkdirp(srcNotes);
  mkdirp(tgtNotes);
  mkdirp(tgtAssets);
});

afterEach(() => {
  if (fs.existsSync(tmp)) fs.rmSync(tmp, { recursive: true, force: true });
});

function sourceCard(options?: { status?: string; id?: string; section?: string; question?: string }): string {
  const status = options?.status ?? "done";
  const id = options?.id ?? "id-1";
  const section = options?.section ?? "Section A";
  const question = options?.question ?? "Q";
  return `<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: ${section}
Migration Status: ${status}
-->
START
FIT-Card

(FIT-Notes flashcard)
${question}

Back:
A
![](../../../Assets/test%20image.png)
<!--ID: ${id}-->
END
---`;
}

function targetCard(options?: {
  id?: string;
  type?: string;
  question?: string;
  ownId?: string | null;
}): string {
  const id = options?.id ?? "id-1";
  const type = options?.type ?? "NI-SZZ";
  const question = options?.question ?? "Q";
  const ownId = options?.ownId === undefined ? null : options.ownId;
  const ownIdLine = ownId ? `\n<!--ID: ${ownId}-->` : "";
  return `<!--
Original Flashcard ID: ${id}
-->

START
${type}

${question}

Back:
A
![](../../Assets/test%20image.png)${ownIdLine}
END

---`;
}

describe("MigratedFlashcardsRunner", () => {
  test("valid done source card passes migrated checks", () => {
    writeFile(path.join(srcNotes, "Semestr 1", "NI-AM1", "src.md"), sourceCard());
    writeFile(
      path.join(tgtNotes, "NI-SI-9 NI-AM1.md"),
      `# Header\n\n## Section A\n\n${targetCard()}`
    );
    writeFile(path.join(tgtAssets, "test image.png"), "asset");

    const runner = new MigratedFlashcardsRunner(new QuietConsoleLoggingService());
    const res = runner.run(path.join(tmp, "FIT-Notes"), path.join(tmp, "FIT-Statnice"), ["NI-AM1"]);
    expect(res.totalSource).toBe(1);
    expect(res.issues).toHaveLength(0);
  });

  test("missing migrated card is reported", () => {
    writeFile(path.join(srcNotes, "Semestr 1", "NI-AM1", "src.md"), sourceCard());
    writeFile(path.join(tgtNotes, "NI-SI-9 NI-AM1.md"), "# Header\n\n## Section A\n");
    writeFile(path.join(tgtAssets, "test image.png"), "asset");

    const runner = new MigratedFlashcardsRunner(new QuietConsoleLoggingService());
    const res = runner.run(path.join(tmp, "FIT-Notes"), path.join(tmp, "FIT-Statnice"), ["NI-AM1"]);
    expect(res.issues.some((i) => i.name === "MissingMigratedFlashcard")).toBe(true);
  });

  test("wrong section location is reported", () => {
    writeFile(path.join(srcNotes, "Semestr 1", "NI-AM1", "src.md"), sourceCard({ section: "Section A" }));
    writeFile(
      path.join(tgtNotes, "NI-SI-9 NI-AM1.md"),
      `# Header\n\n## Section B\n\n${targetCard()}`
    );
    writeFile(path.join(tgtAssets, "test image.png"), "asset");

    const runner = new MigratedFlashcardsRunner(new QuietConsoleLoggingService());
    const res = runner.run(path.join(tmp, "FIT-Notes"), path.join(tmp, "FIT-Statnice"), ["NI-AM1"]);
    expect(res.issues.some((i) => i.name === "OriginalIdInWrongLocation")).toBe(true);
  });

  test("invalid migrated format is reported", () => {
    writeFile(path.join(srcNotes, "Semestr 1", "NI-AM1", "src.md"), sourceCard());
    writeFile(
      path.join(tgtNotes, "NI-SI-9 NI-AM1.md"),
      `# Header\n\n## Section A\n\n${targetCard({ type: "FIT-Card" }).replace("\n---", "")}`
    );
    writeFile(path.join(tgtAssets, "test image.png"), "asset");

    const runner = new MigratedFlashcardsRunner(new QuietConsoleLoggingService());
    const res = runner.run(path.join(tmp, "FIT-Notes"), path.join(tmp, "FIT-Statnice"), ["NI-AM1"]);
    expect(res.issues.some((i) => i.name === "InvalidMigratedFormat")).toBe(true);
  });

  test("non-unique own ID is reported", () => {
    const own = "own-123";
    writeFile(path.join(srcNotes, "Semestr 1", "NI-AM1", "src.md"), sourceCard());
    writeFile(
      path.join(tgtNotes, "NI-SI-9 NI-AM1.md"),
      `# Header\n\n## Section A\n\n${targetCard({ ownId: own })}`
    );
    writeFile(path.join(srcNotes, "Semestr 1", "NI-AM1", "other.md"), `START\nFIT-Card\nQ\nBack:\nA\n<!--ID: ${own}-->\nEND`);
    writeFile(path.join(tgtAssets, "test image.png"), "asset");

    const runner = new MigratedFlashcardsRunner(new QuietConsoleLoggingService());
    const res = runner.run(path.join(tmp, "FIT-Notes"), path.join(tmp, "FIT-Statnice"), ["NI-AM1"]);
    expect(res.issues.some((i) => i.name === "NonUniqueOwnId")).toBe(true);
  });

  test("missing target asset is reported", () => {
    writeFile(path.join(srcNotes, "Semestr 1", "NI-AM1", "src.md"), sourceCard());
    writeFile(
      path.join(tgtNotes, "NI-SI-9 NI-AM1.md"),
      `# Header\n\n## Section A\n\n${targetCard()}`
    );

    const runner = new MigratedFlashcardsRunner(new QuietConsoleLoggingService());
    const res = runner.run(path.join(tmp, "FIT-Notes"), path.join(tmp, "FIT-Statnice"), ["NI-AM1"]);
    expect(res.issues.some((i) => i.name === "MissingAssetInTarget")).toBe(true);
  });

  test("non-canonical migrated asset link format is reported", () => {
    writeFile(path.join(srcNotes, "Semestr 1", "NI-AM1", "src.md"), sourceCard());
    writeFile(
      path.join(tgtNotes, "NI-SI-9 NI-AM1.md"),
      `# Header\n\n## Section A\n\n${targetCard().replace(
        "![](../../Assets/test%20image.png)",
        "![[../../Assets/test%20image.png]]"
      )}`
    );
    writeFile(path.join(tgtAssets, "test image.png"), "asset");

    const runner = new MigratedFlashcardsRunner(new QuietConsoleLoggingService());
    const res = runner.run(path.join(tmp, "FIT-Notes"), path.join(tmp, "FIT-Statnice"), ["NI-AM1"]);
    expect(res.issues.some((i) => i.name === "InvalidMigratedFormat")).toBe(true);
  });
});
