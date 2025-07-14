import { test, expect } from '@playwright/test';

test('home page should display Welcome', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page.getByText('Welcome')).toBeVisible();
}); 