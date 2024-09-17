import { test, expect } from '@playwright/test';
import { selectors, urls } from "../POM/mypage";

test.describe('Project 4 Functionalities', () => {
    

test('Title header should exist and contain Bug Jam Experience', async ({page}) => {
    await page.goto(urls.projectFive);
    const header = page.locator('h1.title');
   
    await expect(header).toHaveText('Bug Jam Experience');
});

test('Summer Adventure link should exist and open in a new tab', async ({page, context}) => {
    await page.goto(urls.projectFive);
    const summerAppText = page.locator(selectors.summerAppBt);
    await expect(summerAppText).toBeVisible();
    await expect(summerAppText).toHaveText('Summer Adventure');

    // Click the link and wait for a new page to open in a new tab
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        summerAppText.click()
      ]);

      // Wait for the new page to load and check that the URL is correct
    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL(urls.summerApp);

    // Close the new tab
    await newPage.close();

});
test('Teammate links should exist and open in a new tab', async ({ page, context }) => {
    
    //Teammate 1
    await page.goto(urls.projectFive);

    const jasmineText = page.locator(selectors.jasmineBt);
    await expect(jasmineText).toBeVisible();
    await expect(jasmineText).toHaveText('Jasmine Dardy');

    // Click the link and wait for the page to load
    await jasmineText.click();
    await page.waitForLoadState('domcontentloaded');  

    // Check for the presence of linkedin popup modal and close it if visible
    const modalCloseButton = page.locator('//*[@id="geom_inter_1726533376515_68_0"]/section/button'); 
    if (await modalCloseButton.isVisible()) {
        await modalCloseButton.click();
    }
    const jasmineURL = page.url();
    expect(jasmineURL).toContain('linkedin.com');

    //Teammate 2
    await page.goto(urls.projectFive);
    const noahText = page.locator(selectors.noahBt);
    await expect(noahText).toBeVisible();
    await expect(noahText).toHaveText('Noah Arbaugh');

    // Click the link and wait for the page to load
    await noahText.click();
    await page.waitForLoadState('domcontentloaded');  

    // Check for the presence of linkedin popup modal and close it if visible 
    if (await modalCloseButton.isVisible()) {
        await modalCloseButton.click();
    }
    const noahURL = page.url();
    expect(noahURL).toContain('linkedin.com');


});


test('Footer Back to Home Link Should Redirect Back To Homepage', async ({ page }) => {
    await page.goto(urls.projectThree);
    await page.locator(selectors.backToHome).click();
    await expect(page).toHaveURL(urls.BacktoHomeLink);
  
  
  
  });



});