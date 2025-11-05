#!/usr/bin/env node
import { QuietConsoleLoggingService } from "./logging";
import { MigratorFacade } from "./core/MigratorFacade";
import * as path from "path";

async function main() {
  const logger = new QuietConsoleLoggingService();
  const facade = new MigratorFacade({ logger });
  const cmd = process.argv[2]?.toLowerCase() ?? "all";
  console.log("=== Running Migrator Tool ===");
  if (cmd === "comments") {
    await facade.runCommentsChecks();
    console.log("Ran Comments Test");
  } else if (cmd === "migration") {
    await facade.runMigrationChecks();
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
  } else if (cmd === "all") {
    await facade.runAllChecks();
    console.log("Ran All Tests");
  } else {
    logger.error({
      name: "InvalidCLICommand",
      message: `Unknown command: ${cmd}`,
      fixInstructions:
        "Use one of: comments | migration | all | prepare-sections <courseId>",
    });
    process.exitCode = 1;
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();
