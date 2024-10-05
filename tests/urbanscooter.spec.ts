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
    test('should have a fully functional footer', async ({ page }) => {
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.getByText(/.*Ryley.*Johnson/)).toBeVisible();
    await expect(page.getByText('ryleyjohnsonemail@gmail.com')).toBeVisible();
    await expect(page.getByText('ryleyjohnsonemail@gmail.com')).toHaveAttribute('href', 'mailto:ryleyjohnsonemail@gmail.com');
});
});
test.describe('Urban Scooter Page Elements', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(urls.urbanScooter);
    });
test('should have photos', async ({ page }) => {
    await expect(page.locator(selectors.urbanScooterPic)).toBeVisible();
    await expect(page.locator(selectors.placeOrderpic)).toBeVisible();
    await expect(page.locator(selectors.requiermentsPic)).toBeVisible();
    await expect(page.locator(selectors.typeErrorPic)).toBeVisible();
    await expect(page.locator(selectors.JiraBugReport1)).toBeVisible();
    await expect(page.locator(selectors.loginAndroidPic)).toBeVisible();
    await expect(page.locator(selectors.notificationsAndroidPic)).toBeVisible();
    await expect(page.locator(selectors.androidAlertPic)).toBeVisible();
    await expect(page.locator(selectors.noInternetPic)).toBeVisible();
    await expect(page.locator(selectors.JiraBugReport2)).toBeVisible();
    await expect(page.locator(selectors.JiraBugReport3)).toBeVisible();

    
});
test('should have icons', async ({ page }) => {
    await expect(page.locator(selectors.webIcon)).toBeVisible();
    await expect(page.locator(selectors.mobileIcon)).toBeVisible();
    await expect(page.locator(selectors.databaseIcon)).toBeVisible();
    await expect(page.locator(selectors.checkMarkIcon)).toBeVisible();
    await expect(page.locator(selectors.softwareEngineerIconFirst)).toBeVisible();
    await expect(page.locator(selectors.softwareEngineerIconSecond)).toBeVisible();
    await expect(page.locator(selectors.softwareEngineerIconThird)).toBeVisible();
    await expect(page.locator(selectors.bugIconFirst)).toBeVisible();
    await expect(page.locator(selectors.bugIconSecond)).toBeVisible();
    await expect(page.locator(selectors.bugIconThird)).toBeVisible();
    await expect(page.locator(selectors.ApiIcon)).toBeVisible();
    await expect(page.locator(selectors.postmanIcon)).toBeVisible();
    await expect(page.locator(selectors.JiraIcon)).toBeVisible
});

});