import * as fs from 'fs';
import * as path from 'path';
import { MigrationCommentsRunner } from './MigrationCommentsRunner';
import { QuietConsoleLoggingService } from '../logging';

const tmpDir = path.join(__dirname, '__tmp__');
const fitNotesDir = path.join(tmpDir, 'FIT-Notes');
const fitNotesNotesDir = path.join(fitNotesDir, 'Notes');
const statniceDir = path.join(tmpDir, 'FIT-Statnice');
const statniceExamNotesDir = path.join(statniceDir, 'Notes', 'Magisterske');

function rimraf(dir: string) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) rimraf(full);
    else fs.unlinkSync(full);
  }
  fs.rmdirSync(dir);
}

function ensureDir(dir: string) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeFile(root: string, rel: string, content: string): string {
  const full = path.join(root, rel);
  ensureDir(path.dirname(full));
  fs.writeFileSync(full, content, 'utf8');
  return full;
}

beforeEach(() => {
  rimraf(tmpDir);
  ensureDir(fitNotesNotesDir);
  ensureDir(statniceExamNotesDir);
});

afterAll(() => {
  rimraf(tmpDir);
});

function validComment(noteId = 'NI-SI-9', section = 'Valid section'): string {
  return `<!--\nExam Note ID: ${noteId}\nExam Note Section Name: ${section}\nMigration Status: review\n-->`;
}

function card(comment: string | null): string {
  const c = comment ? `${comment}\n` : '';
  return `${c}START\nFIT-Card\nQuestion\n\nBack:\nAnswer\nEND\n\n---`;
}

describe('MigrationCommentsRunner', () => {
  test('counts flashcards and reports missing comments', () => {
    writeFile(
      statniceExamNotesDir,
      'NI-SI-9 NI-AM1.md',
      '# NI-AM1\n\n## Valid section\n'
    );

    const md = `${card(validComment())}\n${card(null)}`;
    writeFile(fitNotesNotesDir, 'NI-AM1 test.md', md);

    const runner = new MigrationCommentsRunner(new QuietConsoleLoggingService());
    const res = runner.run(fitNotesDir, statniceDir, ['NI-AM1']);
    expect(res.totalFlashcards).toBe(2);
    expect(res.issues.some(i => i.name === 'MissingMigrationComment')).toBe(true);
  });

  test('only configured courses are scanned and course match works for folder and filename', () => {
    writeFile(
      statniceExamNotesDir,
      'NI-SI-9 NI-AM1.md',
      '# NI-AM1\n\n## Valid section\n'
    );
    writeFile(
      statniceExamNotesDir,
      'NI-SI-10 NI-AM2.md',
      '# NI-AM2\n\n## Other section\n'
    );

    writeFile(fitNotesNotesDir, path.join('NI-AM1', 'lecture.md'), card(validComment()));
    writeFile(fitNotesNotesDir, 'some NI-AM1 file.md', card(validComment()));
    writeFile(
      fitNotesNotesDir,
      path.join('NI-AM2', 'lecture.md'),
      card(`<!--\nExam Note ID: NI-SI-10\nExam Note Section Name: Other section\nMigration Status: review\n-->`)
    );

    const runner = new MigrationCommentsRunner(new QuietConsoleLoggingService());
    const res = runner.run(fitNotesDir, statniceDir, ['NI-AM1']);

    expect(res.totalFlashcards).toBe(2);
    expect(res.issues).toHaveLength(0);
  });

  test('reports invalid exam note id and section based on course catalog', () => {
    writeFile(
      statniceExamNotesDir,
      'NI-SI-9 NI-AM1.md',
      '# NI-AM1\n\n## Valid section\n'
    );

    const invalidNote = card(validComment('NI-SI-404', 'Valid section'));
    const invalidSection = card(validComment('NI-SI-9', 'Missing section'));
    writeFile(
      fitNotesNotesDir,
      path.join('NI-AM1', 'strict-check.md'),
      `${invalidNote}\n${invalidSection}`
    );

    const runner = new MigrationCommentsRunner(new QuietConsoleLoggingService());
    const res = runner.run(fitNotesDir, statniceDir, ['NI-AM1']);

    expect(res.totalFlashcards).toBe(2);
    expect(res.issues.some(i => i.name === 'InvalidExamNoteId')).toBe(true);
    expect(res.issues.some(i => i.name === 'InvalidExamSectionName')).toBe(true);
  });
});

