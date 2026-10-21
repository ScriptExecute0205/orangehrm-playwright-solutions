import { test, expect } from '@fixtures/index';
import { env } from '@config/environment';
import { Role } from '@enums/role.enum';
import { MESSAGES } from '@constants/messages';
import { readJson } from '@utils/file.helper';
import { InvalidLogin } from '@app-types/login.types';

const invalidLogins = readJson<InvalidLogin[]>('src/data/static/invalid-logins.json');

test.describe('Login', () => {
  test('LOGIN-01 valid login opens the dashboard @smoke', async ({
    loginPage,
    dashboardPage,
    page,
  }) => {
    await loginPage.goto();
    await loginPage.login(env.credentials[Role.Admin]);

    await expect(page).toHaveURL(/dashboard\/index/);
    await expect(dashboardPage.heading).toBeVisible();
  });

  for (const { id, title, username, password } of invalidLogins) {
    test(`${id} ${title} @regression @negative`, async ({ loginPage }) => {
      await loginPage.goto();
      await loginPage.login({ username, password });

      await expect(loginPage.errorMessage).toHaveText(MESSAGES.invalidCredentials);
    });
  }

  test('LOGIN-04 empty fields show required messages @regression @negative', async ({
    loginPage,
  }) => {
    await loginPage.goto();
    await loginPage.loginButton.click();

    await expect(loginPage.requiredMessages).toHaveText([MESSAGES.required, MESSAGES.required]);
  });

  test('LOGIN-05 logout returns to the login page @regression', async ({
    loginPage,
    topBar,
    page,
  }) => {
    await loginPage.goto();
    await loginPage.login(env.credentials[Role.Admin]);
    await topBar.logout();

    await expect(page).toHaveURL(/auth\/login/);
  });
});