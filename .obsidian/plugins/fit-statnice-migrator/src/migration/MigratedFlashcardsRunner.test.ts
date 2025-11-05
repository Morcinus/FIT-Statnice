import * as fs from 'fs';
import * as path from 'path';
import { MigratedFlashcardsRunner } from './MigratedFlashcardsRunner';
import { QuietConsoleLoggingService } from '../logging';

const tmp = path.join(__dirname, '__tmp_migration__');
const srcNotes = path.join(tmp, 'FIT-Notes', 'Notes');
const tgtNotes = path.join(tmp, 'FIT-Statnice', 'Notes', 'Magisterske');

function mkdirp(p: string) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

beforeEach(() => {
  mkdirp(srcNotes);
  mkdirp(tgtNotes);
});

afterEach(() => {
  if (fs.existsSync(tmp)) fs.rmSync(tmp, { recursive: true, force: true });
});

function write(p: string, c: string) { mkdirp(path.dirname(p)); fs.writeFileSync(p, c, 'utf8'); }

function srcCard(id: string, question = 'Q', answer = 'A') {
  return `START\nFIT-Card\n${question}\n\nBack:\n${answer}\n<!-- ID: ${id} -->\nEND`;
}

function tgtCard(id: string, question = 'Q', answer = 'A') {
  return `<!--\nOriginal Flashcard ID: ${id}\n-->\nSTART\nNI-SZZ\n${question}\n\nBack:\n${answer}\nEND\n\n---`;
}

describe('MigratedFlashcardsRunner', () => {
  test('detects missing migrated flashcard', () => {
    write(path.join(srcNotes, 'NI-ADP source.md'), srcCard('id-1'));
    const runner = new MigratedFlashcardsRunner(new QuietConsoleLoggingService());
    const res = runner.run(path.join(tmp, 'FIT-Notes'), path.join(tmp, 'FIT-Statnice'), ['NI-ADP']);
    expect(res.issues.some(i => i.name === 'MissingMigratedFlashcard')).toBe(true);
  });

  test('valid migrated format passes', () => {
    write(path.join(srcNotes, 'NI-ADP source.md'), srcCard('id-1'));
    write(path.join(tgtNotes, 'NI-ADP target.md'), tgtCard('id-1'));
    const runner = new MigratedFlashcardsRunner(new QuietConsoleLoggingService());
    const res = runner.run(path.join(tmp, 'FIT-Notes'), path.join(tmp, 'FIT-Statnice'), ['NI-ADP']);
    expect(res.issues.filter(i => i.name !== 'ContentMismatch')).toHaveLength(0);
  });

  test('format violations are reported', () => {
    write(path.join(srcNotes, 'NI-ADP source.md'), srcCard('id-1'));
    // missing NI-SZZ, missing separator
    write(path.join(tgtNotes, 'NI-ADP target.md'), `<!--\nOriginal Flashcard ID: id-1\n-->\nSTART\nFIT-Card\nQ\nBack:\nA\nEND`);
    const runner = new MigratedFlashcardsRunner(new QuietConsoleLoggingService());
    const res = runner.run(path.join(tmp, 'FIT-Notes'), path.join(tmp, 'FIT-Statnice'), ['NI-ADP']);
    expect(res.issues.some(i => i.name === 'InvalidMigratedFormat')).toBe(true);
    expect(res.issues.some(i => i.name === 'MissingOriginalIdComment')).toBe(false);
  });

  test('content mismatch detected ignoring whitespace and type/id', () => {
    write(path.join(srcNotes, 'NI-ADP source.md'), srcCard('id-1', 'Q  one', 'A two'));
    write(path.join(tgtNotes, 'NI-ADP target.md'), tgtCard('id-1', 'Q   one  ', 'A   two'));
    const runner = new MigratedFlashcardsRunner(new QuietConsoleLoggingService());
    const res = runner.run(path.join(tmp, 'FIT-Notes'), path.join(tmp, 'FIT-Statnice'), ['NI-ADP']);
    expect(res.issues.some(i => i.name === 'ContentMismatch')).toBe(false);
  });

  test('original ID comment near END should not be in target', () => {
    write(path.join(srcNotes, 'NI-ADP source.md'), srcCard('id-1'));
    const badTarget = `<!--\nOriginal Flashcard ID: id-1\n-->\nSTART\nNI-SZZ\nQ\nBack:\nA\n<!-- ID: id-1 -->\nEND\n---`;
    write(path.join(tgtNotes, 'NI-ADP target.md'), badTarget);
    const runner = new MigratedFlashcardsRunner(new QuietConsoleLoggingService());
    const res = runner.run(path.join(tmp, 'FIT-Notes'), path.join(tmp, 'FIT-Statnice'), ['NI-ADP']);
    expect(res.issues.some(i => i.name === 'ContainsSourceIdComment')).toBe(true);
  });
});


