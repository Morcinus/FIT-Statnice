#!/usr/bin/env node
import { QuietConsoleLoggingService } from "./logging";
import { MigratorFacade } from "./core/MigratorFacade";
import * as path from "path";
import * as fs from "fs";
import { MigratedFlashcardsRunner } from "./migration/MigratedFlashcardsRunner";
import { MigrationNotesRunner } from "./migration/MigrationNotesRunner";
import { MigrationCommentsRunner } from "./comments/MigrationCommentsRunner";
import { AnkiSyncRunner } from "./anki/AnkiSyncRunner";
import { StatsColor, StatsRunner } from "./stats/StatsRunner";

interface Config {
  testCourses?: string[];
  fitNotesRepoPath?: string;
}

function loadConfig(): Config {
  const configPath = path.join(__dirname, "data.json");
  if (fs.existsSync(configPath)) {
    try {
      const content = fs.readFileSync(configPath, "utf8");
      return JSON.parse(content) as Config;
    } catch (e) {
      return {};
    }
  }
  return {};
}

async function main() {
  const logger = new QuietConsoleLoggingService();
  const facade = new MigratorFacade({ logger });
  const config = loadConfig();
  const cmd = process.argv[2]?.toLowerCase() ?? "test-all";
  const vaultPath = path.resolve(__dirname, "..", "..", "..");
  const fitNotesPath =
    config.fitNotesRepoPath || path.resolve(vaultPath, "..", "FIT-Notes");
  const courseIds = config.testCourses || [];
  console.log("=== Running Migrator Tool ===");

  const printCommentIssues = (sourcePath: string, issues: ReturnType<MigrationCommentsRunner["run"]>["issues"]) => {
    if (issues.length === 0) return;
    console.log("\nIssues found:");
    for (const issue of issues) {
      const fileName = path.relative(sourcePath, issue.file);
      const question = issue.question
        ? `"${issue.question}"`
        : `(flashcard #${issue.flashcardIndex})`;
      console.log(`  [${issue.name}] ${fileName} (${question}): ${issue.message}`);
    }
  };

  const printMigratedIssues = (
    basePath: string,
    issues: ReturnType<MigratedFlashcardsRunner["run"]>["issues"]
  ) => {
    if (issues.length === 0) return;
    console.log("\nIssues found:");
    for (const issue of issues) {
      const fileInfo = issue.file ? ` in ${path.relative(basePath, issue.file)}` : "";
      const idInfo = issue.id ? ` (ID: ${issue.id})` : "";
      console.log(`  [${issue.name}]${fileInfo}${idInfo}: ${issue.message}`);
    }
  };

  const printMigrationNotesIssues = (
    sourcePath: string,
    issues: ReturnType<MigrationNotesRunner["run"]>["issues"]
  ) => {
    if (issues.length === 0) return;
    console.log("\nIssues found:");
    for (const issue of issues) {
      const fileInfo = issue.file ? ` in ${path.relative(sourcePath, issue.file)}` : "";
      const idInfo = issue.id ? ` (ID: ${issue.id})` : "";
      console.log(`  [${issue.name}]${fileInfo}${idInfo}: ${issue.message}`);
    }
  };

  const printAnkiIssues = (
    basePath: string,
    issues: ReturnType<AnkiSyncRunner["run"]>["issues"]
  ) => {
    if (issues.length === 0) return;
    console.log("\nIssues found:");
    for (const issue of issues) {
      const fileName = path.relative(basePath, issue.file);
      const question = issue.question
        ? `"${issue.question}"`
        : `(flashcard #${issue.flashcardIndex})`;
      console.log(`  [${issue.name}] ${fileName} (${question}): ${issue.message}`);
    }
  };

  const runCommentsCheck = () => {
    const runner = new MigrationCommentsRunner(logger);
    const res = runner.run(fitNotesPath, vaultPath, courseIds);
    console.log(`Comments checked: ${res.totalFlashcards}`);
    console.log(`Issues: ${res.issues.length}`);
    printCommentIssues(fitNotesPath, res.issues);
    console.log("Ran Comments Test");
  };

  const runMigratedCardsCheck = () => {
    const runner = new MigratedFlashcardsRunner(logger);
    const res = runner.run(fitNotesPath, vaultPath, courseIds);
    console.log(`Source (done non-none): ${res.totalSource}`);
    console.log(`Target flashcards: ${res.totalTarget}`);
    console.log(`Issues: ${res.issues.length}`);
    printMigratedIssues(vaultPath, res.issues);
    console.log("Ran Migrated Cards Test");
  };

  const runAnkiSyncCheck = () => {
    const runner = new AnkiSyncRunner(logger);
    const res = runner.run(vaultPath);
    console.log(`Flashcards checked: ${res.totalFlashcards}`);
    console.log(`Issues: ${res.issues.length}`);
    printAnkiIssues(vaultPath, res.issues);
    console.log("Ran Anki Sync Check");
  };

  const colorize = (text: string, color: StatsColor | "gray"): string => {
    const reset = "\x1b[0m";
    const code =
      color === "green"
        ? "\x1b[92m"
        : color === "gray"
          ? "\x1b[30m"
        : color === "yellow"
          ? "\x1b[33m"
          : "\x1b[31m";
    return `${code}${text}${reset}`;
  };

  const runStats = () => {
    const runner = new StatsRunner(logger);
    const res = runner.run(fitNotesPath, vaultPath);
    console.log("Exam note stats:");
    for (const note of res.notes) {
      const coloredCount = colorize(`${note.flashcards} cards`, note.color);
      const courseLabel = note.courseId ?? "unknown-course";
      const statusIcon = note.finished
        ? colorize("✓", "green")
        : colorize("✕", "gray");
      console.log(
        `  ${note.examNoteId} (${courseLabel}): ${coloredCount} | ${statusIcon}`
      );
    }
    console.log(`Finished exam notes: ${res.finishedNotes}/${res.totalNotes}`);
    console.log(`Total flashcards in exam notes: ${res.totalFlashcards}`);
    console.log("Ran Stats");
  };

  if (cmd === "comments") {
    runCommentsCheck();
  } else if (cmd === "migrate-notes") {
    const runner = new MigrationNotesRunner(logger);
    const res = runner.run(fitNotesPath, vaultPath, courseIds);
    console.log(`Scanned flashcards: ${res.scannedFlashcards}`);
    console.log(`Candidates (migrate): ${res.candidateFlashcards}`);
    console.log(`Migrated: ${res.migratedFlashcards}`);
    console.log(`Skipped duplicates: ${res.skippedDuplicates}`);
    console.log(`Statuses updated: ${res.updatedStatuses}`);
    console.log(`Issues: ${res.issues.length}`);
    printMigrationNotesIssues(fitNotesPath, res.issues);
    console.log("Ran Migrate Notes");
  } else if (cmd === "test-migrated-cards") {
    runMigratedCardsCheck();
  } else if (cmd === "prepare-sections") {
    const courseId = process.argv[3];
    if (!courseId) {
      logger.error({
        name: "MissingCourseId",
        message: "No courseId provided for prepare-sections",
        fixInstructions:
          "Run: npm run migrator:prepare -- <courseId> (e.g., NI-ADP)",
      });
      process.exitCode = 1;
      return;
    }
    // Resolve vault root as the plugin is inside <vault>/.obsidian/plugins/fit-statnice-migrator
    const output = await facade.prepareMigrationSections(courseId, vaultPath);
    console.log(output);
    console.log("\nPrepared Note Sections");
  } else if (cmd === "test-anki-sync") {
    runAnkiSyncCheck();
  } else if (cmd === "stats") {
    runStats();
  } else if (cmd === "test-all") {
    // Run Comments Check
    console.log("\n--- Comments Check ---");
    runCommentsCheck();
    
    // Run Migration Check
    console.log("\n--- Migration Check ---");
    runMigratedCardsCheck();
    
    // Run Anki Sync Check
    console.log("\n--- Anki Sync Check ---");
    runAnkiSyncCheck();
    
    console.log("\nRan All Tests");
  } else {
    logger.error({
      name: "InvalidCLICommand",
      message: `Unknown command: ${cmd}`,
      fixInstructions:
        "Use one of: comments | migrate-notes | test-migrated-cards | test-anki-sync | stats | test-all | prepare-sections <courseId>",
    });
    process.exitCode = 1;
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();
