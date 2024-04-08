import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://nextjs-ecommerce-store-2024.fly.dev/');

  await expect(
    page.getByRole('heading', {
      name: ' Immerse Yourself: Nurture Your Mind, Body and Soul',
    }),
  ).toBeVisible();
});
