import { test, expect } from '@fixtures/index';
import { MESSAGES } from '@constants/messages';
import { createNamedItem } from '@data/factories/named-item.factory';

test.describe('Admin- Employment Status', () => {
  test('ADMIN-01 add an employment status @regression', async ({
    addEmploymentStatusPage,
    toast,
    page,
  }) => {
    await addEmploymentStatusPage.goto();
    await addEmploymentStatusPage.addEmploymentStatus(createNamedItem('Status'));
    await expect(toast.message).toContainText(MESSAGES.savedSuccessfully);
    await expect(page).toHaveURL(/employmentStatus/);
  });
});
