import {BasePage} from '@pages/base.page';
import { ROUTES } from '@constants/routes';
import { jobTitles } from '@app-types/job-titles.types';


export class AddJobTitlePage extends BasePage{
    readonly path = ROUTES.addJobTitles;
    readonly jobTitle=this.page.locator('.oxd-input-group').filter({hasText: 'Name'}).locator('input');
    readonly saveButton=this.page.getByRole('button', {name: 'Save'});
   
    async AddJobTitlePage({JobTitle}: jobTitles): Promise<void> {
        await this.jobTitle.fill(JobTitle);
        await this.saveButton.click();
    }
} 