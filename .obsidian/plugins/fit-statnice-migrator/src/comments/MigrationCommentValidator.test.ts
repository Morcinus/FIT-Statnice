import { MigrationCommentValidator } from './MigrationCommentValidator';

function makeCard(comment: string | null): string[] {
  const before = comment ? [comment] : [];
  return [...before, 'START', 'FIT-Card', '', 'Back:', '', 'END'];
}

describe('MigrationCommentValidator', () => {
  const v = new MigrationCommentValidator();

  test('missing comment', () => {
    const lines = makeCard(null);
    const res = v.validateForFlashcard(lines, 0);
    expect(res.isValid).toBe(false);
    expect(res.issues.some(i => i.name === 'MissingMigrationComment' || i.name === 'NotHtmlComment')).toBe(true);
  });

  test('single-line valid comment review', () => {
    const comment = `<!--\nExam Note ID: NI-SI-1\nExam Note Section Name: Foo\nMigration Status: review\n-->`;
    const lines = makeCard(comment);
    const res = v.validateForFlashcard(lines, 1);
    expect(res.isValid).toBe(true);
    expect(res.issues).toHaveLength(0);
  });

  test('allows migrate and done', () => {
    for (const status of ['migrate', 'done']) {
      const comment = `<!--\nExam Note ID: NI-SI-1\nExam Note Section Name: Foo\nMigration Status: ${status}\n-->`;
      const lines = makeCard(comment);
      const res = v.validateForFlashcard(lines, 1);
      expect(res.isValid).toBe(true);
    }
  });

  test('invalid status flagged', () => {
    const comment = `<!--\nExam Note ID: NI-SI-1\nExam Note Section Name: Foo\nMigration Status: wrong\n-->`;
    const lines = makeCard(comment);
    const res = v.validateForFlashcard(lines, 1);
    expect(res.isValid).toBe(false);
    expect(res.issues.some(i => i.name === 'InvalidStatus')).toBe(true);
  });

  test('missing keys flagged', () => {
    const comment = `<!--\nExam Note ID: NI-SI-1\nMigration Status: review\n-->`;
    const lines = makeCard(comment);
    const res = v.validateForFlashcard(lines, 1);
    expect(res.isValid).toBe(false);
    expect(res.issues.some(i => i.name === 'KeyMissing')).toBe(true);
  });

  test('empty values flagged', () => {
    const comment = `<!--\nExam Note ID: \nExam Note Section Name: Foo\nMigration Status: review\n-->`;
    const lines = makeCard(comment);
    const res = v.validateForFlashcard(lines, 1);
    expect(res.isValid).toBe(false);
    expect(res.issues.some(i => i.name === 'EmptyValue')).toBe(true);
  });

  test('blank line between comment and START is invalid', () => {
    const comment = `<!-- Exam Note ID: NI-SI-1 -->`;
    const lines = [comment, '', ...makeCard(null)];
    const res = v.validateForFlashcard(lines, 2);
    expect(res.isValid).toBe(false);
  });
});


