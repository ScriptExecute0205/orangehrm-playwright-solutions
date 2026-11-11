import {BasePage} from '@pages/base.page';
import { ROUTES } from '@constants/routes';
import { NamedItem } from '@app-types/named-item.types';


export class AddJobCategoryPage extends BasePage{
    readonly path = ROUTES.addJobCategory;
    readonly nameInput=this.page.locator('.oxd-input-group').filter({hasText: 'Name'}).locator('input');
    readonly saveButton=this.page.getByRole('button', {name: 'Save'});
   
    async AddJobCategoryPage({Name}: NamedItem): Promise<void> {
        await this.nameInput.fill(Name);
        await this.saveButton.click();
    }
} 