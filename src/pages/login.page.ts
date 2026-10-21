import { BasePage } from '@pages/base.page';
import { ROUTES } from '@constants/routes';
import { Credentials } from '@app-types/user.types';

export class LoginPage extends BasePage {
  readonly path = ROUTES.login;

  readonly usernameInput = this.page.getByPlaceholder('Username');
  readonly passwordInput = this.page.getByPlaceholder('Password');
  readonly loginButton = this.page.getByRole('button', { name: 'Login' });
  readonly errorMessage = this.page.locator('.oxd-alert-content-text');
  readonly requiredMessages = this.page.locator('.oxd-input-field-error-message');

  async login({ username, password }: Credentials): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}