import { test, expect } from '@fixtures/index';
import { MESSAGES } from '@constants/messages'
import { createEmployee } from '@data/factories/employee.factory'


test.describe("PIM - Add Employee", ()=>
{
    test('PIM-1 add an employee with first and last name @smoke', async ({addEmployeePage, toast, page})=>
    {
        const employee = createEmployee();

        await addEmployeePage.goto();
        await addEmployeePage.addEmployee(employee);
        await expect(toast.message).toContainText(MESSAGES.savedSuccessfully);
        await expect(page).toHaveURL(/viewPersonalDetails/)
    })
})