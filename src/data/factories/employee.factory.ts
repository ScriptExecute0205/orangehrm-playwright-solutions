import { faker } from '@faker-js/faker';
import { Employee } from '@app-types/employee.types';

export const createEmployee = (overrides: Partial<Employee> = {}): Employee => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  employeeId: faker.string.numeric(6),
  ...overrides,
});
