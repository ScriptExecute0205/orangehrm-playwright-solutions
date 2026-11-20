import { Page } from '@playwright/test';

export class DropdownComponent {
  constructor(private readonly page: Page) {}

  async select(label: string, option: string): Promise<void> {
    await this.page
      .locator('.oxd-input-group')
      .filter({ hasText: label })
      .locator('.oxd-select-text')
      .click();
    await this.page.getByRole('option', { name: option }).click();
  }
}
