import { test, expect } from '@fixtures/index';
import { MESSAGES } from '@constants/messages';
import { createNamedItem } from '@data/factories/named-item.factory';

test.describe('Admin - Add Pay Grade', () => {

  test('ADMIN-02 add pay grade @regression', async ({
    addPayGradePage,
    toast,
    page,
  }) => {

    await addPayGradePage.goto();

    await addPayGradePage.addPayGrade(
      createNamedItem('Pay Grade')
    );

    await expect(toast.message).toContainText(
      MESSAGES.savedSuccessfully
    );

    await expect(page).toHaveURL(/payGrade/);

  });

});