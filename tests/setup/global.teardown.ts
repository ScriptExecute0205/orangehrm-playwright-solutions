import { logger } from '@utils/logger';

export default async function globalTeardown(): Promise<void> {
  logger.info('Test run finished');
}