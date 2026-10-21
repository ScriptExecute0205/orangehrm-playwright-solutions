import fs from 'node:fs';
import path from 'node:path';

export const fromRoot = (...segments: string[]): string =>
  path.resolve(process.cwd(), ...segments);

export const readJson = <T>(...segments: string[]): T =>
  JSON.parse(fs.readFileSync(fromRoot(...segments), 'utf-8')) as T;