import { faker } from '@faker-js/faker';
import { NewEmployee } from '@app-types/employee.types';

export const createEmployee = (overrides: Partial<NewEmployee> = {}): NewEmployee => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  ...overrides,
});