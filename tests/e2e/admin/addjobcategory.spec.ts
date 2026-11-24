import { test, expect } from '@fixtures/index';
import { MESSAGES } from '@constants/messages';
import { createNamedItem } from '@data/factories/named-item.factory';

test.describe('Admin - Add Job Category', () => {

  test('ADMIN-03 add job category @regression', async ({
    addJobCategoryPage,
    toast,
    page,
  }) => {

    await addJobCategoryPage.goto();

    await addJobCategoryPage.addJobCategory(
      createNamedItem('Job Category')
    );

    await expect(toast.message).toContainText(
      MESSAGES.savedSuccessfully
    );

    await expect(page).toHaveURL(/jobCategory/);

  });

});