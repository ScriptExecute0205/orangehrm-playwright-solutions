import { test, expect } from '@fixtures/index';
import { Menu } from '@enums/menu.enum';

test.describe('PIM', () => {
  test('PIM-00 sidebar opens the PIM page @smoke', async ({ dashboardPage, sidebar, page }) => {
    await dashboardPage.goto();
    await sidebar.openMenu(Menu.Pim);

    await expect(page).toHaveURL(/viewEmployeeList/);
  });
});