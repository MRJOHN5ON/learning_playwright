import { test, expect, Locator } from '@playwright/test';
import { selectors, urls } from "../POM/mypage";

// Helper function to check if all icons are visible
// This function was written by an AI assistant
async function checkIcons(locator: Locator, count: number): Promise<void> {
    for (let i = 0; i < count; i++) {
        await expect(locator.nth(i)).toBeVisible();
    }
}
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
test('menu button links should redirect to correct areas of the page', async ({ page }) => {
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
test('figma buttons should be visible and contain valid links', async ({ page }) => {
    // Check if both buttons are visible
    await expect(page.locator(selectors.figmaBt).nth(0)).toBeVisible();
    await expect(page.locator(selectors.figmaBt).nth(1)).toBeVisible();
    // Check if both buttons have valid links
    await expect(page.locator(selectors.figmaBt).nth(0)).toHaveAttribute('href', urls.figmaWebLink);
    await expect(page.locator(selectors.figmaBt).nth(1)).toHaveAttribute('href', urls.figmaMobileLink);
    // click on the first button and check if it redirects to the correct link
    await page.locator(selectors.figmaBt).nth(0).click();
    await expect(page).toHaveURL(urls.figmaWebLink);
    await page.goBack();
    // Click on the second button and check if it redirects to the correct link
    await page.locator(selectors.figmaBt).nth(1).click();
    await expect(page).toHaveURL(urls.figmaMobileLink);


    
});
test('should have a fully functional footer', async ({ page }) => {
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.getByText(/.*Ryley.*Johnson/)).toBeVisible();
    await expect(page.getByText('ryleyjohnsonemail@gmail.com')).toBeVisible();
    await expect(page.getByText('ryleyjohnsonemail@gmail.com')).toHaveAttribute('href', 'mailto:ryleyjohnsonemail@gmail.com');
    await expect(page.locator(selectors.backToHomeLink)).toBeVisible();
    await page.locator(selectors.backToHomeLink).click();
    await expect(page).toHaveURL(urls.indexUrl);
    await page.goBack();
    await expect(page.locator(selectors.projectBankLink)).toBeVisible();
    await page.locator(selectors.projectBankLink).click();
    await expect(page).toHaveURL(urls.topProjectsUrl);
    
});
test.describe('Urban Scooter Page Icons & Photos', () => {
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
    // checks for 3 web icons
    await expect(page.locator(selectors.webIcon).nth(0)).toBeVisible();
    await expect(page.locator(selectors.webIcon).nth(1)).toBeVisible();
    await expect(page.locator(selectors.webIcon).nth(2)).toBeVisible();
    
    // checks for 3 mobile icons
    await expect(page.locator(selectors.mobileIcon).nth(0)).toBeVisible();
    await expect(page.locator(selectors.mobileIcon).nth(1)).toBeVisible();
    await expect(page.locator(selectors.mobileIcon).nth(2)).toBeVisible();

    // checks for 3 database icons
    await expect(page.locator(selectors.databaseIcon).nth(0)).toBeVisible();
    await expect(page.locator(selectors.databaseIcon).nth(1)).toBeVisible();
    await expect(page.locator(selectors.databaseIcon).nth(2)).toBeVisible();

    // checks for 4 check mark icons
    await expect(page.locator(selectors.checkMarkIcon).nth(0)).toBeVisible();
    await expect(page.locator(selectors.checkMarkIcon).nth(1)).toBeVisible();
    await expect(page.locator(selectors.checkMarkIcon).nth(2)).toBeVisible();
    await expect(page.locator(selectors.checkMarkIcon).nth(3)).toBeVisible();

    // checks for 3 software engineer icons
    await expect(page.locator(selectors.softwareEngineerIcon).nth(0)).toBeVisible();
    await expect(page.locator(selectors.softwareEngineerIcon).nth(1)).toBeVisible();
    await expect(page.locator(selectors.softwareEngineerIcon).nth(2)).toBeVisible();
   
    // checks for 3 bug icons
    await expect(page.locator(selectors.bugIcon).nth(0)).toBeVisible();
    await expect(page.locator(selectors.bugIcon).nth(1)).toBeVisible();
    await expect(page.locator(selectors.bugIcon).nth(2)).toBeVisible();
});
   // brand icons
   test('should have brand icons', async ({ page }) => {
    await expect(page.locator(selectors.ApiIcon)).toBeVisible();
    await expect(page.locator(selectors.postmanIcon)).toBeVisible();
    await expect(page.locator(selectors.JiraIcon)).toBeVisible
    await expect(page.locator(selectors.googleSheetsIcon)).toBeVisible();
    await expect(page.locator(selectors.chromeDevToolsIcon)).toBeVisible();
    await expect(page.locator(selectors.androidStudioIcon)).toBeVisible();
    await expect(page.locator(selectors.figmaIcon)).toBeVisible();
    await expect(page.locator(selectors.terminalIcon)).toBeVisible();
    await expect(page.locator(selectors.swaggerIcon)).toBeVisible();
    
});

// This test was created with the help of an ai assistant
test('should have icons alternative method', async ({ page }) => {
    await checkIcons(page.locator(selectors.webIcon), 3);
    await checkIcons(page.locator(selectors.mobileIcon), 3);
    await checkIcons(page.locator(selectors.databaseIcon), 3);
    await checkIcons(page.locator(selectors.checkMarkIcon), 4);
    await checkIcons(page.locator(selectors.softwareEngineerIcon), 3);
    await checkIcons(page.locator(selectors.bugIcon), 3);
});
    // Check brand icons separately
test('should have brand icons alternative method', async ({ page }) => {
    const brandIcons = [
        selectors.ApiIcon,
        selectors.postmanIcon,
        selectors.JiraIcon,
        selectors.googleSheetsIcon,
        selectors.chromeDevToolsIcon,
        selectors.androidStudioIcon,
        selectors.figmaIcon,
        selectors.terminalIcon,
        selectors.swaggerIcon
    ];
    
    for (const icon of brandIcons) {
        await expect(page.locator(icon)).toBeVisible();
    }
});

});

});
