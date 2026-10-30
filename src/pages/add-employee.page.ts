import { BasePage } from "./base.page";
import { ROUTES } from "@constants/routes";
import { Employee } from "@app-types/employee.types";

export class AddEmployeePage extends BasePage
{
    readonly path = ROUTES.addEmployee;
    
      readonly firstNameInput = this.page.getByPlaceholder('First Name');
  readonly lastNameInput = this.page.getByPlaceholder('Last Name');
  readonly employeeIdInput = this.page
    .locator('.oxd-input--active').nth(4)
  readonly saveButton = this.page.getByRole('button', { name: 'Save' });

  async addEmployee({ firstName, lastName }: Employee): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
 //   await this.employeeIdInput.fill(employeeId);
    await this.saveButton.click();
  }
}