import { env } from '@config/environment';
import { logger } from '@utils/logger';

export default async function globalSetup(): Promise<void> {
  logger.info(`Environment: ${env.name}`);
  logger.info(`Base URL: ${env.baseUrl}`);
}
