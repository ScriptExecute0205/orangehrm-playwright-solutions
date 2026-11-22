import { test, expect } from '@fixtures/index';
//import { MESSAGES } from '@constants/messages';
import { createNamedItem } from '@data/factories/named-item.factory';

test.describe('Admin- PayGrade', () => {
test.describe.configure({ mode: 'serial' });

  test.describe('Add', () => {

  test('PagGrade-01: add a new paygrade @regression', async ({
    addPayGradePage,
    page,
  }) => {
    await addPayGradePage.goto();
    await addPayGradePage.addPayGrade(createNamedItem('Garde'));
    //await expect(toast.message).toContainText(MESSAGES.savedSuccessfully);
    await expect(page).toHaveURL(/payGrade/);
  });

  })


})

