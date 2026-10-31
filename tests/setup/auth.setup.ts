import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '@pages/login.page';
import { env } from '@config/environment';
import { Role } from '@enums/role.enum';
import { AUTH_FILES } from '@constants/auth';

setup('authenticate as Admin', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(env.credentials[Role.Admin]);
  await expect(page).toHaveURL(/dashboard\/index/);

  await page.context().storageState({ path: AUTH_FILES.admin });
});
