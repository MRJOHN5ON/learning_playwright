import { test, expect } from '@playwright/test';
import { selectors, urls, MyPage } from "../POM/mypage";



test.describe('Product 2 Page Functions', () => {

    // Test case for verifying the page title
test('has header title', async ({ page }) => {
    await page.goto(urls.projectTwo);
    const header = page.locator('h1');
    await expect(header).toHaveText('ANDROID EMULATION TESTING REPORT FOR URBAN LUNCH APP');
  });

  // Test case for finding and interacting with embedded youtube video
test('should find and interact with the demo link in the iframe', async ({ page }) => {
    const myPage = new MyPage(page);
    await page.goto(urls.projectTwo); 

    
    await myPage.clickDemoLink();
    await expect(myPage.demoLink).toBeVisible();

    const linkText = await myPage.getDemoLinkText();
    expect(linkText).toBe('Urban Lunch App Demonstration');
});

test('should click dropdown and reveal more infomation', async ({ page, context }) => {
    await page.goto(urls.projectTwo);
    const dropDown = page.locator(selectors.dropdownBt);
    await expect(dropDown).toBeVisible();
    await dropDown.click();
    const openedDropdown = page.locator(selectors.openedDropdown);
    await expect(openedDropdown).toBeVisible();
    await expect (page.locator(selectors.dropDownPic1)).toBeVisible();
    

});





});
