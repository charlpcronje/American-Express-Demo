// src/utils/Logger.js
class LoggerClass {
  static enabled = true; // Toggle this to enable/disable all logs

  constructor() {
    this.logLevel = process.env.NODE_ENV === 'production' ? 'error' : 'debug';
    this.levels = {
      debug: 0,
      info: 1,
      warn: 2,
      error: 3
    };
  }

  setLogLevel(level) {
    if (this.levels[level] !== undefined) {
      this.logLevel = level;
    } else {
      console.error(`Invalid log level: ${level}`);
    }
  }

  static setEnabled(flag) {
    LoggerClass.enabled = flag;
  }

  debug(...args) {
    if (!LoggerClass.enabled) return;
    // DEBUG: Force all logs to error for visibility in production
    console.error('[DEBUG]', ...args);
    // if (this.levels[this.logLevel] <= this.levels.debug) {
    //   console.debug('[DEBUG]', ...args);
    // }
  }

  info(...args) {
    if (!LoggerClass.enabled) return;
    // DEBUG: Force all logs to error for visibility in production
    console.error('[INFO]', ...args);
    // if (this.levels[this.logLevel] <= this.levels.info) {
    //   console.info('[INFO]', ...args);
    // }
  }

  warn(...args) {
    if (!LoggerClass.enabled) return;
    // DEBUG: Force all logs to error for visibility in production
    console.error('[WARN]', ...args);
    // if (this.levels[this.logLevel] <= this.levels.warn) {
    //   console.warn('[WARN]', ...args);
    // }
  }

  error(...args) {
    if (!LoggerClass.enabled) return;
    // DEBUG: Force all logs to error for visibility in production
    console.error('[ERROR]', ...args);
    // if (this.levels[this.logLevel] <= this.levels.error) {
    //   console.error('[ERROR]', ...args);
    // }
  }
}

/**
 * Usage:
 *   LoggerClass.enabled = true/false; // Toggle all logs
 *   Logger.setLogLevel('debug'|'info'|'warn'|'error'); // Set log level
 *   Logger.debug/info/warn/error(...)
 */
export const Logger = new LoggerClass();
