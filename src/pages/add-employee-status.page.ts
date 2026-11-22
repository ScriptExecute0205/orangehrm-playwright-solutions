import { BasePage } from "./base.page";
import {ROUTES} from '@constants/routes';
import { NamedItem } from "@app-types/named-item.type";

export class AddEmployeeStatusPage extends BasePage{
    readonly path = ROUTES.addEmployeeStatus;

    readonly nameInput = this.page
    .locator('.oxd-input-group')
    .filter({hasText:'Name'})
    .locator('input')

    readonly saveButton = this.page.getByRole('button',{name:'Save'});
    async addEmployeeStatus({Name}:NamedItem):Promise<void>{
        await this.nameInput.fill(Name);
        await this.saveButton.click();
    }

}