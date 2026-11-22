import {test,expect} from "@fixtures/index";
import {MESSAGES} from "@constants/messages";
import { createJobTitle } from "@data/factories/job-title.factory";
import { AddJobTitlePage } from "@pages/add-job-titles.page";
import { toReadable } from "node:stream/iter";

test.describe('Admin - Job Title',()=>{
    test('ADMIN-02 add an job title @regression',async({
        addJobTitlePage,
        toast,
        page
    })=>{
        await addJobTitlePage.goto();
        await addJobTitlePage.addJobTitle(createJobTitle());
        await expect(toast.message).toContainText(MESSAGES.savedSuccessfully);
        await expect(page).toHaveURL(/saveJobTitle/);
    });
})