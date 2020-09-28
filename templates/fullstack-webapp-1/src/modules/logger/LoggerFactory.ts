import { Logger } from './types';
import ConsoleLogger from './ConsoleLogger';

// TODO: 다양한 로거 타입 지원 (ex. DB 등)
class LoggerFactory {
  // static configure(config: LoggerFactoryConfig) {
  // }

  static getLogger(name: string): Logger {
    return new ConsoleLogger(name);
  }
}

export default LoggerFactory;
