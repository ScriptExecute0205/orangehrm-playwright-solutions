import {test,expect} from "@fixtures/index";
import {MESSAGES} from "@constants/messages";
import { createNamedItem } from "@data/factories/named-item.factory";
import { AddEmployeeStatusPage } from "@pages/add-employee-status.page";
import { toReadable } from "node:stream/iter";

test.describe('Admin - Employee Status',()=>{
    test('ADMIN-01 add an employee status @regression',async({
        addEmploymentStatusPage,
        toast,
        page
    })=>{
        await addEmploymentStatusPage.goto();
        await addEmploymentStatusPage.addEmployeeStatus(createNamedItem('Status'));
        await expect(toast.message).toContainText(MESSAGES.savedSuccessfully);
        await expect(page).toHaveURL(/employmentStatus/);
    });
})