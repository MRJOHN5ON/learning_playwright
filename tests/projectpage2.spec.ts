import { test, expect } from '@playwright/test';
import { selectors, urls, MyPage } from "../POM/mypage";



test.describe('Project 2 Page Functions', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(urls.projectTwo);
    });

    // Test case for verifying the page title
test('has header title', async ({ page }) => {
    const header = page.locator('h1');
    await expect(header).toHaveText('ANDROID EMULATION TESTING REPORT FOR URBAN LUNCH APP');
  });

  // Test case for finding and interacting with embedded youtube video
test('should find and interact with the demo link in the iframe', async ({ page }) => {

    const myPage = new MyPage(page);

    await myPage.clickDemoLink();
    await expect(myPage.demoLink).toBeVisible();

    const linkText = await myPage.getDemoLinkText();
    expect(linkText).toBe('Urban Lunch App Demonstration');
});

test('should click dropdown and reveal five photos', async ({ page, context }) => {
// Find the dropdown button and click it
    const dropDown = page.locator(selectors.dropdownBt);
    await expect(dropDown).toBeVisible();
    await dropDown.click();
    const openedDropdown = page.locator(selectors.openedDropdown);
    await expect(openedDropdown).toBeVisible();
    // Wait for all five images to be visible
    await Promise.all([
        expect(page.locator(selectors.dropDownPic1)).toBeVisible(),
        expect(page.locator(selectors.dropDownPic2)).toBeVisible(),
        expect(page.locator(selectors.dropDownPic3)).toBeVisible(),
        expect(page.locator(selectors.dropDownPic4)).toBeVisible(),
        expect(page.locator(selectors.dropDownPic5)).toBeVisible()
    ]);
});

test('should verify text color for all text in the table data labeled failed', async ({ page }) => {

    const failedTextElements = page.locator(selectors.failedText);

    // Ensure all elements have the correct color
    const colors = await failedTextElements.evaluateAll(elements =>
        elements.map(element => window.getComputedStyle(element).color)
    );

    // Assert that all elements have the correct color
    colors.forEach(color => {
        expect(color).toBe('rgb(255, 0, 0)');
        
    });
    
});

test('should have a fully home and project bank links', async ({ page }) => {
    await expect(page.locator(selectors.backToHomeLink)).toBeVisible();
    await page.locator(selectors.backToHomeLink).click();
    await expect(page).toHaveURL(urls.indexUrl);
    await page.goBack();
    await expect(page.locator(selectors.projectBankLink)).toBeVisible();
    await page.locator(selectors.projectBankLink).click();
    await expect(page).toHaveURL(urls.topProjectsUrl);
    
});
  
});
