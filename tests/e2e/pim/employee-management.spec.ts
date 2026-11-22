import { test, expect } from '@fixtures/index';
import { MESSAGES } from '@constants/messages';
import { fromRoot } from '@utils/file.helper';
import { createPersonalDetails } from '@data/factories/personal-details.factory';

test.describe('PIM - Employee Management', () => {
  test.describe.configure({ mode: 'serial' });

  test.describe('Search', () => {
    test('PIM-02 search an employee ID @regression', async ({ employee, employeeListPage }) => {
      await employeeListPage.goto();
      await employeeListPage.seachById(employee.employeeId);
      await expect(employeeListPage.rowFor(employee.employeeId)).toBeVisible();
    });

    test('PIM-03 search an employee by name @regression', async ({
      employee,
      employeeListPage,
    }) => {
      const fullName = `${employee.firstName} ${employee.lastName}`;
      await employeeListPage.goto();
      await employeeListPage.searchByName(fullName);
      await expect(employeeListPage.rowFor(employee.firstName)).toBeVisible();
    });
  });

  test.describe('Delete', () => {
    test('PIM-04 delete an employee @smoke', async ({ employee, employeeListPage, toast }) => {
      await employeeListPage.goto();
      await employeeListPage.seachById(employee.employeeId);
      await employeeListPage.deleteEmployee(employee.employeeId);
      await expect(toast.message).toContainText(MESSAGES.deletedSuccessfully);
    });
  });

  test.describe('Personal details', () => {
    test('PIM-08 add license, nationality and marital status @regression', async ({
      employee,
      personalDetailsPage,
      toast,
      page,
    }) => {
      const details = createPersonalDetails();

      await expect(personalDetailsPage.firstNameInput).toHaveValue(employee.firstName);

      await personalDetailsPage.updateDetails(details);

      await personalDetailsPage.selectGender();
      await expect(toast.message).toContainText(MESSAGES.updatedSuccessfully);

      await page.reload();

      // await expect(personalDetailsPage.driverLicenseInput).toHaveValue(details.driverLicense);

      // await expect(personalDetailsPage.licenseExpiryInput).toHaveValue(details.licenseExpiry);
    });

    test('PIM-10 upload a profile picture @regression', async ({
      employee,

      personalDetailsPage,

      toast,
    }) => {
      await expect(personalDetailsPage.firstNameInput).toHaveValue(employee.firstName);

      await personalDetailsPage.uploadPhoto(fromRoot('tests', 'assets', 'profile.jpg'));

      await expect(toast.message).toContainText(MESSAGES.updatedSuccessfully);
    });
  });
});
