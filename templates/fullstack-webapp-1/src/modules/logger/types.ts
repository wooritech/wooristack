export interface Logger {
  debug: (...msg: LogMessage) => void;
  info: (...msg: LogMessage) => void;
  warn: (...msg: LogMessage) => void;
  error: (...msg: LogMessage) => void;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type LogMessage = (string | object)[];

export enum LogType {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

export const LogLevel: Record<LogType, number> = {
  DEBUG: 1,
  INFO: 2,
  WARN: 3,
  ERROR: 4,
};
