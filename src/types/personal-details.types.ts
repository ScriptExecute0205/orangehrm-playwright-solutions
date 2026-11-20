import { MaritalStatus } from '@enums/marital-status.enum';
import { Gender } from '@enums/gender.enum';

export interface PersonalDetails {
  driverLicense: string;
  licenseExpiry: string;
  nationality: string;
  maritalStatus: MaritalStatus;
  dateOfBirth: string;
  gender: Gender;
}
