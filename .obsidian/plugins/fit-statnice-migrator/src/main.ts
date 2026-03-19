import {
  App,
  Plugin,
  PluginSettingTab,
  Setting,
  Notice,
  SuggestModal,
} from "obsidian";
import { ConsoleLoggingService, LoggingService } from "./logging";
import { MigratorFacade } from "./core/MigratorFacade";
import { MigratedFlashcardsRunner } from "./migration/MigratedFlashcardsRunner";
import { MigrationNotesRunner } from "./migration/MigrationNotesRunner";
import { MigrationCommentsRunner } from "./comments/MigrationCommentsRunner";
import { AnkiSyncRunner } from "./anki/AnkiSyncRunner";

export interface MigratorSettings {
  testCourses: string[];
  fitNotesRepoPath: string;
}

const DEFAULT_SETTINGS: MigratorSettings = {
  testCourses: [],
  fitNotesRepoPath: "",
};

export default class FitStatniceMigratorPlugin extends Plugin {
  settings: MigratorSettings;
  logger: LoggingService = new ConsoleLoggingService();

  async onload() {
    await this.loadSettings();
    const facade = new MigratorFacade({ logger: this.logger });

    this.addCommand({
      id: "fit-statnice-test-migration-comments",
      name: "Test all migration comments",
      callback: async () => {
        new Notice("Test all migration comments: started");
        this.logger.info("Starting: Test all migration comments");
        const baseVaultPath =
          (this.app.vault.adapter as any).getBasePath?.() ?? "";
        const runner = new MigrationCommentsRunner(this.logger);
        const res = runner.run(
          this.settings.fitNotesRepoPath,
          baseVaultPath,
          this.settings.testCourses
        );
        this.logger.success("Finished: Test all migration comments", {
          total: res.totalFlashcards,
          issues: res.issues.length,
        });
        const summary = `Comments checked: ${res.totalFlashcards}\nIssues: ${res.issues.length}`;
        new Notice(summary, 0);
      },
    });

    this.addCommand({
      id: "fit-statnice-test-flashcards-migrated",
      name: "Test migrated flashcards",
      callback: async () => {
        new Notice("Test migrated flashcards: started");
        this.logger.info("Starting: Test migrated flashcards");
        const runner = new MigratedFlashcardsRunner(this.logger);
        const res = runner.run(
          this.settings.fitNotesRepoPath,
          (this.app.vault.adapter as any).getBasePath?.() ?? "",
          this.settings.testCourses
        );
        this.logger.success("Finished: Test migrated flashcards", {
          totalSource: res.totalSource,
          totalTarget: res.totalTarget,
          issues: res.issues.length,
        });
        const summary = `Source (done non-none): ${res.totalSource}\nTarget flashcards: ${res.totalTarget}\nIssues: ${res.issues.length}`;
        new Notice(summary, 0);
      },
    });

    this.addCommand({
      id: "fit-statnice-migrate-notes",
      name: "Migrate notes (migrate -> done)",
      callback: async () => {
        new Notice("Migrate notes: started");
        this.logger.info("Starting: Migrate notes");
        const baseVaultPath =
          (this.app.vault.adapter as any).getBasePath?.() ?? "";
        const runner = new MigrationNotesRunner(this.logger);
        const res = runner.run(
          this.settings.fitNotesRepoPath,
          baseVaultPath,
          this.settings.testCourses
        );
        this.logger.success("Finished: Migrate notes", {
          scanned: res.scannedFlashcards,
          candidates: res.candidateFlashcards,
          migrated: res.migratedFlashcards,
          skippedDuplicates: res.skippedDuplicates,
          updatedStatuses: res.updatedStatuses,
          issues: res.issues.length,
        });
        const summary =
          `Scanned flashcards: ${res.scannedFlashcards}\n` +
          `Candidates (migrate): ${res.candidateFlashcards}\n` +
          `Migrated: ${res.migratedFlashcards}\n` +
          `Skipped duplicates: ${res.skippedDuplicates}\n` +
          `Statuses updated: ${res.updatedStatuses}\n` +
          `Issues: ${res.issues.length}`;
        new Notice(summary, 0);
      },
    });

    this.addCommand({
      id: "fit-statnice-prepare-migration-sections",
      name: "Prepare Migration Sections",
      callback: async () => {
        new Notice("Prepare Migration Sections: started");
        this.logger.info("Starting: Prepare Migration Sections");
        const courseId = await new CoursePickModal(
          this.app,
          this.settings.testCourses
        ).openAndGet();
        if (!courseId) {
          this.logger.info("Prepare Migration Sections cancelled");
          return;
        }
        const baseVaultPath =
          (this.app.vault.adapter as any).getBasePath?.() ?? "";
        const output = await facade.prepareMigrationSections(
          courseId,
          baseVaultPath
        );
        this.logger.success("Prepare Migration Sections finished");
        new Notice(output || `No exam notes found for ${courseId}.`, 0);
      },
    });

    this.addCommand({
      id: "fit-statnice-anki-sync-check",
      name: "Anki Sync Check",
      callback: async () => {
        new Notice("Anki Sync Check: started");
        this.logger.info("Starting: Anki Sync Check");
        const baseVaultPath =
          (this.app.vault.adapter as any).getBasePath?.() ?? "";
        const runner = new AnkiSyncRunner(this.logger);
        const res = runner.run(baseVaultPath);
        this.logger.success("Finished: Anki Sync Check", {
          total: res.totalFlashcards,
          issues: res.issues.length,
        });
        const summary = `Flashcards checked: ${res.totalFlashcards}\nIssues: ${res.issues.length}`;
        new Notice(summary, 0);
      },
    });

    this.addSettingTab(new MigratorSettingTab(this.app, this));
  }

  onunload() {}

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}

class CoursePickModal extends SuggestModal<string> {
  private readonly options: string[];
  private resolveFn: ((value: string | null) => void) | null = null;

  constructor(app: App, options: string[]) {
    super(app);
    this.options = options;
    this.setPlaceholder("Select a courseId...");
  }

  getSuggestions(query: string): string[] {
    const q = query.toLowerCase();
    return this.options.filter((o) => o.toLowerCase().includes(q));
  }

  renderSuggestion(value: string, el: HTMLElement) {
    el.setText(value);
  }

  onChooseSuggestion(item: string) {
    if (this.resolveFn) this.resolveFn(item);
    this.close();
  }

  onClose(): void {
    if (this.resolveFn) this.resolveFn(null);
  }

  openAndGet(): Promise<string | null> {
    this.open();
    return new Promise((resolve) => {
      this.resolveFn = resolve;
    });
  }
}

class MigratorSettingTab extends PluginSettingTab {
  plugin: FitStatniceMigratorPlugin;

  constructor(app: App, plugin: FitStatniceMigratorPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();

    containerEl.createEl("h2", { text: "FIT Statnice Migrator - Settings" });

    new Setting(containerEl)
      .setName("Test Courses")
      .setDesc("Comma-separated course IDs to test (e.g., NI-ADP, NI-SI).")
      .addText((text) =>
        text
          .setPlaceholder("NI-ADP, NI-SI")
          .setValue(this.plugin.settings.testCourses.join(", "))
          .onChange(async (value) => {
            this.plugin.settings.testCourses = value
              .split(",")
              .map((s) => s.trim())
              .filter((s) => s.length > 0);
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("FIT-Notes Repository Path")
      .setDesc(
        "Absolute path to the FIT-Notes repository for source flashcards."
      )
      .addText((text) =>
        text
          .setPlaceholder("D:/path/to/FIT-Notes")
          .setValue(this.plugin.settings.fitNotesRepoPath)
          .onChange(async (value) => {
            this.plugin.settings.fitNotesRepoPath = value.trim();
            await this.plugin.saveSettings();
          })
      );
  }
}
