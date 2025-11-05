export interface ActionableError {
  name: string;
  message: string;
  fixInstructions: string;
  context?: Record<string, unknown>;
}

export interface LoggingService {
  info(message: string, context?: Record<string, unknown>): void;
  success(message: string, context?: Record<string, unknown>): void;
  error(err: ActionableError): void;
}

export class ConsoleLoggingService implements LoggingService {
  info(message: string, context?: Record<string, unknown>): void {
    console.info(`[Migrator][INFO] ${message}`, context ?? "");
  }
  success(message: string, context?: Record<string, unknown>): void {
    console.log(`[Migrator][SUCCESS] ${message}`, context ?? "");
  }
  error(err: ActionableError): void {
    console.error(`[Migrator][ERROR][${err.name}] ${err.message}`, {
      fixInstructions: err.fixInstructions,
      context: err.context ?? {},
    });
  }
}
