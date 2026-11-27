import { test, expect } from '@fixtures/index';
import { MESSAGES } from '@constants/messages';
import { createJobTitle } from '@data/factories/job-title.factory';

test.describe('Admin - Job titles', () => {
  test('ADMIN-10 add a job title @regression', async ({ addJobTitlePage, toast, page }) => {
    await addJobTitlePage.goto();
    await addJobTitlePage.addJobTitle(createJobTitle());
    await expect(toast.message).toContainText(MESSAGES.savedSuccessfully);
    await expect(page).toHaveURL(/viewJobTitleList/);
  });
});