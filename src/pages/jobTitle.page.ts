import { ROUTES } from "@constants/routes";
import { BasePage } from "./base.page";
import { jobTitle } from "@app-types/jobTitle.types";

export class AddJobTitlePage extends BasePage {
  readonly path = ROUTES.addJobTitle;
 
  readonly titleInput = this.page
    .locator('.oxd-input-group')
    .filter({ hasText: 'Job Title' })
    .locator('input');
  readonly descriptionInput = this.page.getByPlaceholder('Type description here');
  readonly saveButton = this.page.getByRole('button', { name: 'Save' });
 
  async addJobTitle({ title, description }: jobTitle): Promise<void> {
    await this.titleInput.fill(title);
    await this.descriptionInput.fill(description);
    await this.saveButton.click();
  }
}