import dotenv from 'dotenv';
import path from 'node:path';
import { Role } from '../src/enums/role.enum';
import { Credentials } from '../src/types/user.types';

const envName = process.env.TEST_ENV ?? 'qa';

dotenv.config({ path: path.resolve(__dirname, 'env', `.env.${envName}`) });

const required = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing value for ${key}. Check config/env/.env.${envName}`);
  }
  return value;
};

const credentials: Record<Role, Credentials> = {
  [Role.Admin]: { username: required('ADMIN_USERNAME'), password: required('ADMIN_PASSWORD') },
  [Role.Ess]: { username: required('ESS_USERNAME'), password: required('ESS_PASSWORD') },
};

export const env = {
  name: envName,
  baseUrl: required('BASE_URL'),
  credentials,
};