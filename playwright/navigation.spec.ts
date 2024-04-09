import { expect, test } from '@playwright/test';

test('navigation test', async ({ page }) => {
  await page.goto('https://nextjs-ecommerce-store-2024.fly.dev/');

  await expect(
    page.getByRole('heading', {
      name: ' Immerse Yourself: Nurture Your Mind, Body and Soul',
    }),
  ).toBeVisible();

  await expect(
    page.getByRole('img', { name: 'yoga place' }).first(),
  ).toBeVisible();

  await page.getByRole('link', { name: 'Workshops' }).click();
  await page.waitForURL(
    'https://nextjs-ecommerce-store-2024.fly.dev/workshops',
  );
  await expect(page.getByText('Upcoming workshops')).toBeVisible();
});
