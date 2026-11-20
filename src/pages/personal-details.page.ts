import { Locator, Page } from '@playwright/test';
import { DropdownComponent } from '@components/dropdown.component';
import { PersonalDetails } from '@app-types/personal-details.types';
import { Gender } from '@enums/gender.enum';

export class PersonalDetailsPage {
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly driverLicenseInput: Locator;
  readonly licenseExpiryInput: Locator;
  readonly photo: Locator;
  readonly saveButton: Locator;
  private readonly photoFileInput: Locator;
  private readonly loader: Locator;
  private readonly dropdown: DropdownComponent;
  private readonly gender: Locator;
  private readonly dateOfBirth: Locator;

  constructor(private readonly page: Page) {
    this.firstNameInput = this.page.getByPlaceholder('First Name');
    this.lastNameInput = this.page.getByPlaceholder('Last Name');
    this.driverLicenseInput = this.page
      .locator('.oxd-input-group')
      .filter({ hasText: "Driver's License Number" })
      .locator('input');
    this.licenseExpiryInput = this.page
      .locator('.oxd-input-group')
      .filter({ hasText: 'License Expiry Date' })
      .getByPlaceholder('yyyy-dd-mm');
    this.photo = this.page.locator('.employee-image');
    this.saveButton = this.page.getByRole('button', { name: 'Save' }).first();
    this.photoFileInput = this.page.locator('input[type="file"]');
    this.dateOfBirth = this.page
      .locator('.oxd-input-group')
      .filter({ hasText: 'Date of Birth' })
      .getByPlaceholder('yyyy-dd-mm');

    this.gender = this.page.getByRole('radio', {
      name: Gender.Male,
      exact: true,
    });

    this.loader = this.page.locator('.oxd-form-loader');
    this.dropdown = new DropdownComponent(this.page);
  }

  async updateName(firstName: string, lastName: string): Promise<void> {
    await this.loader.waitFor({ state: 'hidden' });
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.saveButton.click();
  }
  async selectGender(): Promise<void> {
    await this.gender.check();
  }

  async updateDetails(details: PersonalDetails): Promise<void> {
    await this.loader.waitFor({ state: 'hidden' });
    await this.driverLicenseInput.fill(details.driverLicense);
    await this.licenseExpiryInput.fill(details.licenseExpiry);
    await this.dropdown.select('Nationality', details.nationality);
    await this.dropdown.select('Marital Status', details.maritalStatus);
    await this.dateOfBirth.fill(details.dateOfBirth);
    await this.saveButton.click();
  }

  async uploadPhoto(filePath: string): Promise<void> {
    await this.loader.waitFor({ state: 'hidden' });
    await this.photo.click();
    await this.page.waitForURL(/viewPhotograph/);
    await this.photoFileInput.setInputFiles(filePath);
    await this.saveButton.click();
  }
}
