import { test, expect } from '@fixtures/index';
import { env } from '@config/environment';
import { Role } from '@enums/role.enum';
import { MESSAGES } from '@constants/messages';

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

  test('LOGIN-02 wrong password shows an error @regression @negative', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login({ username: 'Admin', password: 'wrong-password' });
    await expect(loginPage.errorMessage).toHaveText(MESSAGES.invalidCredentials);
  });

  test('LOGIN-03 wrong username shows an error @regression @negative', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login({ username: 'WrongUser', password: 'admin123' });
    await expect(loginPage.errorMessage).toHaveText(MESSAGES.invalidCredentials);
  });
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
