import { Locator, Page } from '@playwright/test';

export class TopBarComponent {
  readonly userName: Locator;

  constructor(private readonly page: Page) {
    this.userName = this.page.locator('.oxd-userdropdown-name');
  }

  async logout(): Promise<void> {
    await this.page.locator('.oxd-userdropdown-tab').click();
    await this.page.getByRole('menuitem', { name: 'Logout' }).click();
  }
}