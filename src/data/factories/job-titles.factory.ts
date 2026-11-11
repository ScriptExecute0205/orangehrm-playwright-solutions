import { faker } from '@faker-js/faker';
import { jobTitles } from '@app-types/job-titles.types';

export const createJobTitles = (prefix: string, overrides: Partial<jobTitles> = {}): jobTitles => ({
  JobTitle: `${prefix} ${faker.string.alphanumeric(6)}`,
  ...overrides,
});