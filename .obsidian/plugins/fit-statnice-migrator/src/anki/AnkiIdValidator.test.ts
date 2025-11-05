import { AnkiIdValidator } from "./AnkiIdValidator";

function makeCard(comment: string | null): string[] {
  const before = comment ? [comment] : [];
  return [
    "START",
    "NI-SZZ",
    "Question",
    "",
    "Back:",
    "Answer",
    ...before,
    "END",
  ];
}

describe("AnkiIdValidator", () => {
  const v = new AnkiIdValidator();

  test("missing comment", () => {
    const lines = makeCard(null);
    const res = v.validateForFlashcard(lines, lines.length - 1);
    expect(res.isValid).toBe(false);
    expect(
      res.issues.some(
        (i) =>
          i.name === "MissingAnkiIdComment" ||
          i.name === "InvalidIdCommentFormat"
      )
    ).toBe(true);
  });

  test("valid single-line comment with ID:", () => {
    const comment = `<!-- ID: anki-12345 -->`;
    const lines = makeCard(comment);
    const res = v.validateForFlashcard(lines, lines.length - 1);
    expect(res.isValid).toBe(true);
    expect(res.issues).toHaveLength(0);
    expect(res.idValue).toBe("anki-12345");
  });

  test("valid multiline comment with ID:", () => {
    const comment = `<!--\nID: anki-12345\n-->`;
    const lines = makeCard(comment);
    const res = v.validateForFlashcard(lines, lines.length - 1);
    expect(res.isValid).toBe(true);
    expect(res.idValue).toBe("anki-12345");
  });

  test("valid comment with ID = pattern", () => {
    const comment = `<!-- ID = anki-12345 -->`;
    const lines = makeCard(comment);
    const res = v.validateForFlashcard(lines, lines.length - 1);
    expect(res.isValid).toBe(true);
    expect(res.idValue).toBe("anki-12345");
  });

  test("comment without ID key", () => {
    const comment = `<!-- Some other comment -->`;
    const lines = makeCard(comment);
    const res = v.validateForFlashcard(lines, lines.length - 1);
    expect(res.isValid).toBe(false);
    expect(res.issues.some((i) => i.name === "MissingAnkiIdComment")).toBe(
      true
    );
  });

  test("empty ID value", () => {
    const comment = `<!-- ID: -->`;
    const lines = makeCard(comment);
    const res = v.validateForFlashcard(lines, lines.length - 1);
    expect(res.isValid).toBe(false);
    expect(
      res.issues.some((i) => i.name === "InvalidIdCommentFormat")
    ).toBe(true);
  });

  test("blank line between comment and END is invalid", () => {
    const comment = `<!-- ID: anki-12345 -->`;
    const lines = ["START", "NI-SZZ", "Q", "Back:", "A", comment, "", "END"];
    const res = v.validateForFlashcard(lines, lines.length - 1);
    expect(res.isValid).toBe(false);
  });

  test("case-insensitive ID matching", () => {
    const comment = `<!-- id: anki-12345 -->`;
    const lines = makeCard(comment);
    const res = v.validateForFlashcard(lines, lines.length - 1);
    expect(res.isValid).toBe(true);
    expect(res.idValue).toBe("anki-12345");
  });
});

