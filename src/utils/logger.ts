import fs from 'node:fs';
import path from 'node:path';

type Level = 'INFO' | 'WARN' | 'ERROR' | 'DEBUG';

const LOG_FILE = path.resolve(process.cwd(), 'logs', 'run.log');

const write = (level: Level, message: string): void => {
  const line = `${new Date().toISOString()} [${level}] ${message}`;
  // eslint-disable-next-line no-console
  console.log(line);
  fs.mkdirSync(path.dirname(LOG_FILE), { recursive: true });
  fs.appendFileSync(LOG_FILE, `${line}\n`);
};

export const logger = {
  info: (message: string): void => write('INFO', message),
  warn: (message: string): void => write('WARN', message),
  error: (message: string): void => write('ERROR', message),
  debug: (message: string): void => write('DEBUG', message),
};
