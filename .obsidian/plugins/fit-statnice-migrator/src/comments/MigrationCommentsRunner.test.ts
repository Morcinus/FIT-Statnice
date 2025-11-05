import * as fs from 'fs';
import * as path from 'path';
import { MigrationCommentsRunner } from './MigrationCommentsRunner';
import { QuietConsoleLoggingService } from '../logging';

const tmpDir = path.join(__dirname, '__tmp__');
const notesDir = path.join(tmpDir, 'Notes');

beforeAll(() => {
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);
  if (!fs.existsSync(notesDir)) fs.mkdirSync(notesDir);
});

function rimraf(dir: string) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) rimraf(full);
    else fs.unlinkSync(full);
  }
  fs.rmdirSync(dir);
}

afterAll(() => {
  rimraf(tmpDir);
});

function writeFile(rel: string, content: string) {
  const p = path.join(notesDir, rel);
  fs.writeFileSync(p, content, 'utf8');
  return p;
}

describe('MigrationCommentsRunner', () => {
  test('counts flashcards and reports missing comments', () => {
    const md = `# Note\n\n<!--\nExam Note ID: NI-SI-1\nExam Note Section Name: Foo\nMigration Status: review\n-->\nSTART\nFIT-Card\n\nBack:\n\nEND\n\nSTART\nFIT-Card\n\nBack:\n\nEND`;
    writeFile('test1.md', md);
    const runner = new MigrationCommentsRunner(new QuietConsoleLoggingService());
    const res = runner.run(tmpDir, ['test1']);
    expect(res.totalFlashcards).toBe(2);
    // second card missing comment
    expect(res.issues.some(i => i.name === 'MissingMigrationComment' || i.name === 'NotHtmlComment')).toBe(true);
  });
});


