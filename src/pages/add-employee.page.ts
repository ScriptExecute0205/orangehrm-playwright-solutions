import { BasePage } from "./base.page";
import { ROUTES } from "@constants/routes";
import { Employee, NewEmployee } from "@app-types/employee.types";

export class AddEmployeePage extends BasePage
{
    readonly path = ROUTES.addEmployee;
    
      readonly firstNameInput = this.page.getByPlaceholder('First Name');
  readonly lastNameInput = this.page.getByPlaceholder('Last Name');
readonly employeeInput = this.page.locator('.oxd-input-group').filter({ hasText: 'Employee Id' }).locator('input');
  readonly saveButton = this.page.getByRole('button', { name: 'Save' });

  async addEmployee({ firstName, lastName }: NewEmployee): Promise<Employee> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
const employeeId = await this.employeeInput.inputValue();
    await this.saveButton.click();
    return {firstName, lastName, employeeId}
  }
}