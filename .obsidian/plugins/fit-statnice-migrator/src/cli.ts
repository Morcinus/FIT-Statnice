#!/usr/bin/env node
import { ConsoleLoggingService } from "./logging";
import { MigratorFacade } from "./core/MigratorFacade";

async function main() {
  const logger = new ConsoleLoggingService();
  const facade = new MigratorFacade({ logger });
  const cmd = process.argv[2]?.toLowerCase() ?? "all";
  if (cmd === "comments") {
    await facade.runCommentsChecks();
  } else if (cmd === "migration") {
    await facade.runMigrationChecks();
  } else if (cmd === "all") {
    await facade.runAllChecks();
  } else {
    logger.error({
      name: "InvalidCLICommand",
      message: `Unknown command: ${cmd}`,
      fixInstructions: "Use one of: comments | migration | all",
    });
    process.exitCode = 1;
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();
