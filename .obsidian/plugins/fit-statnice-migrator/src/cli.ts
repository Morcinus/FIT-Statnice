#!/usr/bin/env node
import { QuietConsoleLoggingService } from "./logging";
import { MigratorFacade } from "./core/MigratorFacade";
import * as path from "path";
import * as fs from "fs";
import { MigratedFlashcardsRunner } from "./migration/MigratedFlashcardsRunner";
import { MigrationCommentsRunner } from "./comments/MigrationCommentsRunner";
import { AnkiSyncRunner } from "./anki/AnkiSyncRunner";

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
  const cmd = process.argv[2]?.toLowerCase() ?? "all";
  console.log("=== Running Migrator Tool ===");
  if (cmd === "comments") {
    const courseIds = process.argv.slice(3).length > 0 
      ? process.argv.slice(3) 
      : (config.testCourses || []);
    const fitNotesPath = config.fitNotesRepoPath || path.resolve(__dirname, "..", "..", "..", "..", "FIT-Notes");
    const runner = new MigrationCommentsRunner(logger);
    const res = runner.run(fitNotesPath, courseIds);
    console.log(`Comments checked: ${res.totalFlashcards}`);
    console.log(`Issues: ${res.issues.length}`);
    if (res.issues.length > 0) {
      console.log("\nIssues found:");
      for (const issue of res.issues) {
        const fileName = path.relative(fitNotesPath, issue.file);
        const question = issue.question ? `"${issue.question}"` : `(flashcard #${issue.flashcardIndex})`;
        console.log(`  [${issue.name}] ${fileName} (${question}): ${issue.message}`);
      }
    }
    console.log("Ran Comments Test");
  } else if (cmd === "migration") {
    const courseIds = process.argv.slice(3).length > 0 
      ? process.argv.slice(3) 
      : (config.testCourses || []);
    const vaultPath = path.resolve(__dirname, "..", "..", "..");
    const fitNotesPath = config.fitNotesRepoPath || path.resolve(vaultPath, "..", "FIT-Notes");
    const runner = new MigratedFlashcardsRunner(logger);
    const res = runner.run(fitNotesPath, vaultPath, courseIds);
    console.log(`Source: ${res.totalSource}`);
    console.log(`Migrated: ${res.totalTarget}`);
    console.log(`Issues: ${res.issues.length}`);
    if (res.issues.length > 0) {
      console.log("\nIssues found:");
      for (const issue of res.issues) {
        const fileInfo = issue.file ? ` in ${path.relative(vaultPath, issue.file)}` : "";
        const idInfo = issue.id ? ` (ID: ${issue.id})` : "";
        console.log(`  [${issue.name}]${fileInfo}${idInfo}: ${issue.message}`);
      }
    }
    console.log("Ran Migration Test");
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
    const vaultPath = path.resolve(__dirname, "..", "..", "..");
    const output = await facade.prepareMigrationSections(courseId, vaultPath);
    console.log(output);
    console.log("\nPrepared Note Sections");
  } else if (cmd === "anki-sync") {
    const vaultPath = path.resolve(__dirname, "..", "..", "..");
    const runner = new AnkiSyncRunner(logger);
    const res = runner.run(vaultPath);
    console.log(`Flashcards checked: ${res.totalFlashcards}`);
    console.log(`Issues: ${res.issues.length}`);
    if (res.issues.length > 0) {
      console.log("\nIssues found:");
      for (const issue of res.issues) {
        const fileName = path.relative(vaultPath, issue.file);
        const question = issue.question ? `"${issue.question}"` : `(flashcard #${issue.flashcardIndex})`;
        console.log(`  [${issue.name}] ${fileName} (${question}): ${issue.message}`);
      }
    }
    console.log("Ran Anki Sync Check");
  } else if (cmd === "all") {
    const courseIds = process.argv.slice(3).length > 0 
      ? process.argv.slice(3) 
      : (config.testCourses || []);
    const vaultPath = path.resolve(__dirname, "..", "..", "..");
    const fitNotesPath = config.fitNotesRepoPath || path.resolve(vaultPath, "..", "FIT-Notes");
    
    // Run Comments Check
    console.log("\n--- Comments Check ---");
    const commentsRunner = new MigrationCommentsRunner(logger);
    const commentsRes = commentsRunner.run(fitNotesPath, courseIds);
    console.log(`Comments checked: ${commentsRes.totalFlashcards}`);
    console.log(`Issues: ${commentsRes.issues.length}`);
    if (commentsRes.issues.length > 0) {
      console.log("\nIssues found:");
      for (const issue of commentsRes.issues) {
        const fileName = path.relative(fitNotesPath, issue.file);
        const question = issue.question ? `"${issue.question}"` : `(flashcard #${issue.flashcardIndex})`;
        console.log(`  [${issue.name}] ${fileName} (${question}): ${issue.message}`);
      }
    }
    console.log("Ran Comments Test");
    
    // Run Migration Check
    console.log("\n--- Migration Check ---");
    const migrationRunner = new MigratedFlashcardsRunner(logger);
    const migrationRes = migrationRunner.run(fitNotesPath, vaultPath, courseIds);
    console.log(`Source: ${migrationRes.totalSource}`);
    console.log(`Migrated: ${migrationRes.totalTarget}`);
    console.log(`Issues: ${migrationRes.issues.length}`);
    if (migrationRes.issues.length > 0) {
      console.log("\nIssues found:");
      for (const issue of migrationRes.issues) {
        const fileInfo = issue.file ? ` in ${path.relative(vaultPath, issue.file)}` : "";
        const idInfo = issue.id ? ` (ID: ${issue.id})` : "";
        console.log(`  [${issue.name}]${fileInfo}${idInfo}: ${issue.message}`);
      }
    }
    console.log("Ran Migration Test");
    
    // Run Anki Sync Check
    console.log("\n--- Anki Sync Check ---");
    const ankiRunner = new AnkiSyncRunner(logger);
    const ankiRes = ankiRunner.run(vaultPath);
    console.log(`Flashcards checked: ${ankiRes.totalFlashcards}`);
    console.log(`Issues: ${ankiRes.issues.length}`);
    if (ankiRes.issues.length > 0) {
      console.log("\nIssues found:");
      for (const issue of ankiRes.issues) {
        const fileName = path.relative(vaultPath, issue.file);
        const question = issue.question ? `"${issue.question}"` : `(flashcard #${issue.flashcardIndex})`;
        console.log(`  [${issue.name}] ${fileName} (${question}): ${issue.message}`);
      }
    }
    console.log("Ran Anki Sync Check");
    
    console.log("\nRan All Tests");
  } else {
    logger.error({
      name: "InvalidCLICommand",
      message: `Unknown command: ${cmd}`,
      fixInstructions:
        "Use one of: comments | migration | all | prepare-sections <courseId> | anki-sync",
    });
    process.exitCode = 1;
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();
