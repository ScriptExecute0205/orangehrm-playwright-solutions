
import { BasePage } from '@pages/base.page';
import { ROUTES } from '@constants/routes';
import { NamedItem } from '@app-types/named-item.types';

export class AddPayGradePage extends BasePage {
  readonly path = ROUTES.addpayGrade;

  readonly nameInput = this.page
    .locator('.oxd-input-group')
    .filter({ hasText: 'Name' })
    .locator('input');

  readonly submitBtn = this.page.getByRole('button', { name: 'Save' });

  async addPayGrade({ Name }: NamedItem): Promise<void> {
    await this.nameInput.fill(Name);
    await this.submitBtn.click();
  }

async searchpaygradeByName(paygradename: string): Promise<void> {
    await this.employeeNameInput.fill(paygradename);
    await this.page.getByRole('option').filter({ hasText: paygradename }).first().click();
    await this.searchButton.click();
  }

  

  async deletePaygrade(employeeId: string): Promise<void> {
    await this.rowFor(employeeId)
      .getByRole('button')
      .filter({ has: this.page.locator('.bi-trash') })
      .click();
    await this.confirmButton.click();
  }


}
