type Level = 'INFO' | 'WARN' | 'ERROR' | 'DEBUG';

const write = (level: Level, message: string): void => {
  console.log(`${new Date().toISOString()} [${level}] ${message}`);
};

export const logger = {
  info: (message: string): void => write('INFO', message),
  warn: (message: string): void => write('WARN', message),
  error: (message: string): void => write('ERROR', message),
  debug: (message: string): void => write('DEBUG', message),
};