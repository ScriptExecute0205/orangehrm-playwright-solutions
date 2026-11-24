import { BasePage } from '@pages/base.page';
import { ROUTES } from '@constants/routes';
import { NamedItem } from '@app-types/named-item.types';

export class AddJobCategoryPage extends BasePage {
  readonly path = ROUTES.jobcategory
;

  readonly addBtn = this.page.getByRole('button', { name: 'Add' });

  readonly nameInput = this.page
    .locator('.oxd-input-group')
    .filter({ hasText: 'Name' })
    .locator('input');

  readonly submitBtn = this.page.getByRole('button', { name: 'Save' });

  async addJobCategory({ Name }: NamedItem): Promise<void> {
    await this.addBtn.click();
    await this.nameInput.fill(Name);
    await this.submitBtn.click();
  }
}

