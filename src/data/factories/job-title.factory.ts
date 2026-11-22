import { faker } from "@faker-js/faker";
import { JobTitles } from "@app-types/job-title.type";

export const createJobTitle = (
  overrides: Partial<JobTitles> = {}
): JobTitles => ({
  JobTitle: `${faker.person.jobTitle()}`,
  JobDescription: `${faker.lorem.sentence()}`,
  ...overrides,
});