import { MigrationCommentValidator, ExamNoteSectionsMap } from './MigrationCommentValidator';

function makeCard(comment: string | null): string[] {
  const before = comment ? [comment] : [];
  return [...before, 'START', 'FIT-Card', '', 'Back:', '', 'END'];
}

function makeValidExamNotes(): ExamNoteSectionsMap {
  return new Map<string, Set<string>>([
    ['NI-SI-1', new Set(['Foo', 'Bar'])],
    ['NI-SI-9', new Set(['Alpha'])],
  ]);
}

describe('MigrationCommentValidator', () => {
  const v = new MigrationCommentValidator();

  test('missing comment', () => {
    const lines = makeCard(null);
    const res = v.validateForFlashcard(lines, 0, makeValidExamNotes());
    expect(res.isValid).toBe(false);
    expect(res.issues.some(i => i.name === 'MissingMigrationComment' || i.name === 'NotHtmlComment')).toBe(true);
  });

  test('valid existing note id, section and review status', () => {
    const comment = `<!--\nExam Note ID: NI-SI-1\nExam Note Section Name: Foo\nMigration Status: review\n-->`;
    const lines = makeCard(comment);
    const res = v.validateForFlashcard(lines, 1, makeValidExamNotes());
    expect(res.isValid).toBe(true);
    expect(res.issues).toHaveLength(0);
  });

  test('allows migrate and done for valid note and section', () => {
    for (const status of ['migrate', 'done']) {
      const comment = `<!--\nExam Note ID: NI-SI-1\nExam Note Section Name: Foo\nMigration Status: ${status}\n-->`;
      const lines = makeCard(comment);
      const res = v.validateForFlashcard(lines, 1, makeValidExamNotes());
      expect(res.isValid).toBe(true);
    }
  });

  test('invalid status flagged', () => {
    const comment = `<!--\nExam Note ID: NI-SI-1\nExam Note Section Name: Foo\nMigration Status: wrong\n-->`;
    const lines = makeCard(comment);
    const res = v.validateForFlashcard(lines, 1, makeValidExamNotes());
    expect(res.isValid).toBe(false);
    expect(res.issues.some(i => i.name === 'InvalidStatus')).toBe(true);
  });

  test('missing keys flagged', () => {
    const comment = `<!--\nExam Note ID: NI-SI-1\nMigration Status: review\n-->`;
    const lines = makeCard(comment);
    const res = v.validateForFlashcard(lines, 1, makeValidExamNotes());
    expect(res.isValid).toBe(false);
    expect(res.issues.some(i => i.name === 'KeyMissing')).toBe(true);
  });

  test('empty values flagged', () => {
    const comment = `<!--\nExam Note ID: \nExam Note Section Name: Foo\nMigration Status: review\n-->`;
    const lines = makeCard(comment);
    const res = v.validateForFlashcard(lines, 1, makeValidExamNotes());
    expect(res.isValid).toBe(false);
    expect(res.issues.some(i => i.name === 'EmptyValue')).toBe(true);
  });

  test('invalid exam note id is flagged', () => {
    const comment = `<!--\nExam Note ID: NI-SI-999\nExam Note Section Name: Foo\nMigration Status: review\n-->`;
    const lines = makeCard(comment);
    const res = v.validateForFlashcard(lines, 1, makeValidExamNotes());
    expect(res.isValid).toBe(false);
    expect(res.issues.some(i => i.name === 'InvalidExamNoteId')).toBe(true);
  });

  test('invalid exam section name is flagged', () => {
    const comment = `<!--\nExam Note ID: NI-SI-1\nExam Note Section Name: Unknown section\nMigration Status: review\n-->`;
    const lines = makeCard(comment);
    const res = v.validateForFlashcard(lines, 1, makeValidExamNotes());
    expect(res.isValid).toBe(false);
    expect(res.issues.some(i => i.name === 'InvalidExamSectionName')).toBe(true);
  });

  test('valid none tuple passes', () => {
    const comment = `<!--\nExam Note ID: none\nExam Note Section Name: none\nMigration Status: done\n-->`;
    const lines = makeCard(comment);
    const res = v.validateForFlashcard(lines, 1, makeValidExamNotes());
    expect(res.isValid).toBe(true);
    expect(res.issues).toHaveLength(0);
  });

  test('none in one field only is invalid', () => {
    const comment = `<!--\nExam Note ID: none\nExam Note Section Name: Foo\nMigration Status: done\n-->`;
    const lines = makeCard(comment);
    const res = v.validateForFlashcard(lines, 1, makeValidExamNotes());
    expect(res.isValid).toBe(false);
    expect(res.issues.some(i => i.name === 'InvalidNoneCombination')).toBe(true);
  });

  test('none tuple with wrong status is invalid', () => {
    const comment = `<!--\nExam Note ID: none\nExam Note Section Name: none\nMigration Status: review\n-->`;
    const lines = makeCard(comment);
    const res = v.validateForFlashcard(lines, 1, makeValidExamNotes());
    expect(res.isValid).toBe(false);
    expect(res.issues.some(i => i.name === 'InvalidNoneCombination')).toBe(true);
  });

  test('blank line between comment and START is allowed', () => {
    const comment = `<!--\nExam Note ID: NI-SI-1\nExam Note Section Name: Foo\nMigration Status: review\n-->`;
    const lines = [comment, '', 'START', 'FIT-Card', '', 'Back:', '', 'END'];
    const res = v.validateForFlashcard(lines, 2, makeValidExamNotes());
    expect(res.isValid).toBe(true);
    expect(res.issues).toHaveLength(0);
  });

  test('multiple blank lines between comment and START are allowed', () => {
    const comment = `<!--\nExam Note ID: NI-SI-1\nExam Note Section Name: Foo\nMigration Status: review\n-->`;
    const lines = [comment, '', '', 'START', 'FIT-Card', '', 'Back:', '', 'END'];
    const res = v.validateForFlashcard(lines, 3, makeValidExamNotes());
    expect(res.isValid).toBe(true);
    expect(res.issues).toHaveLength(0);
  });
});

