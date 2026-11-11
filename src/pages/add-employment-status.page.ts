import {BasePage} from '@pages/base.page';
import { ROUTES } from '@constants/routes';
import { NamedItem } from '@app-types/named-item.types';


export class AddEmploymentStatusPage extends BasePage{
    readonly path = ROUTES.addEmploymentStatus;
    readonly nameInput=this.page.locator('.oxd-input-group').filter({hasText: 'Name'}).locator('input');
    readonly saveButton=this.page.getByRole('button', {name: 'Save'});
   
    async AddEmploymentStatusPage({Name}: NamedItem): Promise<void> {
        await this.nameInput.fill(Name);
        await this.saveButton.click();
    }
} 