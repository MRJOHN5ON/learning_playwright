import { test, expect } from '@playwright/test';
import { selectors, urls } from "../POM/mypage";

test.describe('Product One Page Functions', () => {

    //Test Case for Header Github button link functionality
  test('Github link on header should lead to github repo', async ({ page, context }) => {
    await page.goto(urls.projectOne);
    const githubButton1 = page.locator(selectors.gitHubRepoBt).first();
  
  
    // Verify that the link is visible
    await expect(githubButton1).toBeVisible();
  
    // Click the link and wait for a new page to open in a new tab
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      githubButton1.click()
    ]);
  
    // Wait for the new page to load and check that the URL is correct
    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL(urls.projectOneRepo);
  
    // Close the new tab
    await newPage.close();
  });
  
  //Test Case for Footer Github button link functionality
  test('Github link on footer should lead to github repo', async ({ page, context }) => {
    await page.goto(urls.projectOne);
    const githubButton1 = page.locator(selectors.gitHubRepoBt).last();
  
  
    // Verify that the link is visible
    await expect(githubButton1).toBeVisible();
  
    // Click the link and wait for a new page to open in a new tab
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      githubButton1.click()
    ]);
  
    // Wait for the new page to load and check that the URL is correct
    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL(urls.projectOneRepo);
  
    // Close the new tab
    await newPage.close();
  });
  
  test('Adding products to kit photo should enlarge into new tab upon click', async ({ page, context }) => {
    // Go to the project page
    await page.goto(urls.projectOne);
  
    // Click on the image to open the enlarged photo
    const [newTab] = await Promise.all([
      context.waitForEvent('page'), // Wait for a new tab to open
      page.locator(selectors.image1).click(), // Click the image
    ]);
  
    // Wait for the new tab to load and check its URL
    await newTab.waitForLoadState();
    await expect(newTab).toHaveURL(urls.firstImage);
  
    // Close the new tab
    await newTab.close();
  });
  
  test('Exceeding 30 items photo should enlarge into new tab upon click', async ({ page, context }) => {
    // Go to the project page
    await page.goto(urls.projectOne);
  
    // Click on the image to open the enlarged photo
    const [newTab] = await Promise.all([
      context.waitForEvent('page'), // Wait for a new tab to open
      page.locator(selectors.image2).click(), // Click the image
    ]);
  
    // Wait for the new tab to load and check its URL
    await newTab.waitForLoadState();
    await expect(newTab).toHaveURL(urls.secondImage);
  
    // Close the new tab
    await newTab.close();
  });
  
  test('Bug report 1 photo should enlarge into new tab upon click', async ({ page, context }) => {
    // Go to the project page
    await page.goto(urls.projectOne);
  
    // Click on the specific image (e.g., the first one)
    const [newTab] = await Promise.all([
      context.waitForEvent('page'), // Wait for a new tab to open
      page.locator(selectors.jiraBugImage).first().click(), // Click the first image
    ]);
  
    // Wait for the new tab to load and check its URL
    await newTab.waitForLoadState();
    await expect(newTab).toHaveURL(urls.jira1);
  
    // Close the new tab
    await newTab.close();
  });
  
  
  test('Non-existent Product IDs photo should enlarge into new tab upon click', async ({ page, context }) => {
    // Go to the project page
    await page.goto(urls.projectOne);
  
    // Click on the image to open the enlarged photo
    const [newTab] = await Promise.all([
      context.waitForEvent('page'), // Wait for a new tab to open
      page.locator(selectors.image3).click(), // Click the image
    ]);
  
    // Wait for the new tab to load and check its URL
    await newTab.waitForLoadState();
    await expect(newTab).toHaveURL(urls.ThirdImage);
  
    // Close the new tab
    await newTab.close();
  });
  
  test('Bug report 2 photo should enlarge into new tab upon click', async ({ page, context }) => {
    // Go to the project page
    await page.goto(urls.projectOne);
  
    // Click on the image to open the enlarged photo
    const [newTab] = await Promise.all([
      context.waitForEvent('page'), // Wait for a new tab to open
      page.locator(selectors.jiraBugImage).nth(1).click(), // Click the 2nd bug report image
    ]);
  
    // Wait for the new tab to load and check its URL
    await newTab.waitForLoadState();
    await expect(newTab).toHaveURL(urls.jira2);
  
    // Close the new tab
    await newTab.close();
  });
  
  test('Results photo should enlarge into new tab upon click', async ({ page, context }) => {
    // Go to the project page
    await page.goto(urls.projectOne);
  
    // Click on the image to open the enlarged photo
    const [newTab] = await Promise.all([
      context.waitForEvent('page'), // Wait for a new tab to open
      page.locator(selectors.resultsImage).click(), // Click the image
    ]);
  
    // Wait for the new tab to load and check its URL
    await newTab.waitForLoadState();
    await expect(newTab).toHaveURL(urls.results);
  
    // Close the new tab
    await newTab.close();
  });
  test('Footer Back to Home Link Should Redirect Back To Homepage', async ({ page }) => {
    await page.goto(urls.projectOne);
    await page.locator(selectors.backToHome).click();
    await expect(page).toHaveURL(urls.BacktoHomeLink);
  
  
  
  });
  
});