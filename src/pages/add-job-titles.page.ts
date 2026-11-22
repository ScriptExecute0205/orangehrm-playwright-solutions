import { BasePage } from "./base.page";
import {ROUTES} from '@constants/routes';
import { JobTitles } from "@app-types/job-title.type";

export class AddJobTitlePage extends BasePage{
    readonly path = ROUTES.addJobTitles;

    readonly jobTitle = this.page
    .locator('.oxd-input-group')
    .filter({hasText:'Job Title'})
    .locator('input')

    readonly jobDescription = this.page.getByPlaceholder('Type description here');

    readonly saveButton = this.page.getByRole('button',{name:'Save'});
    async addJobTitle({JobTitle,JobDescription}:JobTitles):Promise<void>{
        await this.jobTitle.fill(JobTitle);
        await this.jobDescription.fill(JobDescription);
        await this.saveButton.click();
    }

}