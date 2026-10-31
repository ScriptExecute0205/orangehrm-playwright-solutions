import { BasePage } from '@pages/base.page';
import { ROUTES } from '@constants/routes';

export class DashboardPage extends BasePage {
  readonly path = ROUTES.dashboard;

  readonly heading = this.page.getByRole('heading', { name: 'Dashboard' });
}
