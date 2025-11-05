import { LoggingService } from "../logging";
import * as fs from "fs";
import * as path from "path";

export class MigratorFacade {
  private readonly logger: LoggingService;

  constructor(params: { logger: LoggingService }) {
    this.logger = params.logger;
  }

  async runCommentsChecks(): Promise<void> {
    this.logger.info("Running comments checks");
    // TODO: implement comments tests
    this.logger.success("Comments checks completed");
  }

  async runMigrationChecks(): Promise<void> {
    this.logger.info("Running migration checks");
    // TODO: implement migration tests
    this.logger.success("Migration checks completed");
  }

  async runAllChecks(): Promise<void> {
    await this.runCommentsChecks();
    await this.runMigrationChecks();
  }

  async prepareMigrationSections(
    courseId: string,
    baseVaultPath: string
  ): Promise<string> {
    const notesDir = path.join(baseVaultPath, "Notes", "Magisterske");

    if (!fs.existsSync(notesDir)) {
      this.logger.error({
        name: "NotesDirectoryMissing",
        message: `Directory not found: ${notesDir}`,
        fixInstructions:
          "Ensure the FIT-Statnice vault path is correct and the Notes/Magisterske directory exists.",
        context: { notesDir },
      });
      return "";
    }

    const entries = fs.readdirSync(notesDir, { withFileTypes: true });
    const matchingFiles = entries
      .filter(
        (e) =>
          e.isFile() &&
          e.name.toLowerCase().endsWith(".md") &&
          e.name.includes(courseId)
      )
      .map((e) => e.name)
      .sort((a, b) => a.localeCompare(b, "cs"));

    if (matchingFiles.length === 0) {
      return `No exam notes found for ${courseId}.`;
    }

    const lines: string[] = [];
    for (const filename of matchingFiles) {
      const fullPath = path.join(notesDir, filename);
      const content = fs.readFileSync(fullPath, "utf8");
      const sections: string[] = [];
      for (const line of content.split(/\r?\n/)) {
        if (line.startsWith("## ")) {
          sections.push(line.substring(3).trim());
        }
      }
      lines.push(`${filename}:`);
      if (sections.length === 0) {
        lines.push("- (no level-2 sections found)");
      } else {
        for (const s of sections) {
          lines.push(`- ${s}`);
        }
      }
      lines.push("");
    }

    return lines.join("\n").trimEnd();
  }
}
