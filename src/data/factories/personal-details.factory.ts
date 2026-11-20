import { faker } from '@faker-js/faker';
import { MaritalStatus } from '@enums/marital-status.enum';
import { PersonalDetails } from '@app-types/personal-details.types';
import { addDays, formatDate } from '@utils/date.helper';
import { Gender } from '@enums/gender.enum';

export const createPersonalDetails = (
  overrides: Partial<PersonalDetails> = {},
): PersonalDetails => ({
  driverLicense: faker.string.alphanumeric(10),
  licenseExpiry: formatDate(addDays(365)),
  nationality: 'Indian',
  maritalStatus: MaritalStatus.Single,
  gender: Gender.Male,
  dateOfBirth: formatDate(faker.date.birthdate({ min: 25, max: 45, mode: 'age' })),
  ...overrides,
});
