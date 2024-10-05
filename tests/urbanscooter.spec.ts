import { test, expect } from '@playwright/test';
import { selectors, urls } from "../POM/mypage";
test.describe('Urban Scooter Page Functionalities', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(urls.urbanScooter);
    });


    test('should have the correct title', async ({ page }) => {
        await expect(page).toHaveTitle(/.*urban.*scooter/i);
    });

test('should have menu buttons', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Overview' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Testing Scope' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Methodologies' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Tools' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Web Testing' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Mobile Testing' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'API Testing' })).toBeVisible();
});
test('menu button links should work', async ({ page }) => {
    await page.getByRole('link', { name: 'Overview' }).click();
    await expect(page).toHaveURL(urls.overviewMenuBt);
    await page.getByRole('link', { name: 'Testing Scope' }).click();
    await expect(page).toHaveURL(urls.testingScopeMenuBt);
    await page.getByRole('link', { name: 'Methodologies' }).click();
    await expect(page).toHaveURL(urls.methodologyMenuBt);
    await page.getByRole('link', { name: 'Tools' }).click();
    await expect(page).toHaveURL(urls.toolsMenuBt);
    await page.getByRole('link', { name: 'Web Testing' }).click();
    await expect(page).toHaveURL(urls.webTestingMenuBt);
    await page.getByRole('link', { name: 'Mobile Testing' }).click();
    await expect(page).toHaveURL(urls.mobileTestingMenuBt);
    await page.getByRole('link', { name: 'API Testing' }).click();
    await expect(page).toHaveURL(urls.apiTestingMenuBt);

});
});