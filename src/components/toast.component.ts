import { Locator, Page } from '@playwright/test';

export class ToastComponent {
  readonly message: Locator;

  constructor(private readonly page: Page) {
    this.message = this.page.locator('.oxd-toast');
  }
}