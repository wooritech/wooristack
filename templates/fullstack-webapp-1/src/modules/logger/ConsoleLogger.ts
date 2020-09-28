/* eslint-disable no-console */
import format from 'date-fns/format';

import { Logger, LogMessage, LogType, LogLevel } from './types';

class ConsoleLogger implements Logger {
  name: string;

  level = LogLevel.INFO;

  tsFormat = 'HH:mm:ss.SSS';

  constructor(name: string) {
    this.name = name;
  }

  private _ts(): string {
    return format(new Date(), this.tsFormat);
  }

  private _log(type: LogType, ...msg: LogMessage): void {
    const logLevel = LogLevel[process.env.NEXT_PUBLIC_LOG_LEVEL] || this.level;

    if (!(LogLevel[type] >= logLevel)) {
      return;
    }

    let log = console.log.bind(console);

    if (type === LogType.WARN && console.warn) {
      log = console.warn.bind(console);
    }
    if (type === LogType.ERROR && console.error) {
      log = console.error.bind(console);
    }

    const prefix = `[${type}] ${this._ts()} ${this.name}`;

    if (msg.length === 1 && typeof msg[0] === 'string') {
      log(`${prefix} - ${msg[0]}`);
    } else if (msg.length === 1) {
      log(prefix, msg[0]);
    } else if (typeof msg[0] === 'string') {
      const objs = msg.slice(1);
      log(`${prefix} - ${msg[0]}`, objs.length === 1 ? objs[0] : objs);
    } else {
      log(prefix, msg);
    }
  }

  debug(...msg: LogMessage): void {
    this._log(LogType.DEBUG, ...msg);
  }

  info(...msg: LogMessage): void {
    this._log(LogType.INFO, ...msg);
  }

  warn(...msg: LogMessage): void {
    this._log(LogType.WARN, ...msg);
  }

  error(...msg: LogMessage): void {
    this._log(LogType.ERROR, ...msg);
  }
}

export default ConsoleLogger;
