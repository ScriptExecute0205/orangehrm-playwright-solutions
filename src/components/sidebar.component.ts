import { Page } from '@playwright/test';
import { Menu } from '@enums/menu.enum';

export class SidebarComponent {
  constructor(private readonly page: Page) {}

  async openMenu(menu: Menu): Promise<void> {
    await this.page.getByRole('link', { name: menu, exact: true }).click();
  }
}
