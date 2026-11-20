import { BasePage } from './base.page';
import { ROUTES } from '@constants/routes';
import { MESSAGES } from '@constants/messages';
import { Locator } from '@playwright/test';

export class EmployeeListPage extends BasePage {
  readonly path = ROUTES.pimList;

  readonly employeeNameInput = this.page
    .locator('.oxd-input-group')
    .filter({ hasText: 'Employee Name' })
    .getByPlaceholder('Type for hints...');
  readonly employeeIdInput = this.page
    .locator('.oxd-input-group')
    .filter({ hasText: 'Employee Id' })
    .locator('input');
  readonly searchButton = this.page.getByRole('button', { name: 'Search' });
  readonly confirmButton = this.page.getByRole('button', { name: 'Yes, Delete' });

  rowFor(employeeId: string): Locator {
    return this.page.locator('.oxd-table-card').filter({ hasText: employeeId });
  }

  async searchByName(fullName: string): Promise<void> {
    await this.employeeNameInput.fill(fullName);
    await this.page.getByRole('option').filter({ hasText: fullName }).first().click();
    await this.searchButton.click();
  }

  async seachById(employeeId: string): Promise<void> {
    await this.employeeIdInput.fill(employeeId);
    await this.searchButton.click();
  }

  async deleteEmployee(employeeId: string): Promise<void> {
    await this.rowFor(employeeId)
      .getByRole('button')
      .filter({ has: this.page.locator('.bi-trash') })
      .click();
    await this.confirmButton.click();
  }
}
