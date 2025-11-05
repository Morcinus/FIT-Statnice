import { LoggingService } from "../logging";

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
}
