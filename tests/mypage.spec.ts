import { test, expect } from '@playwright/test';
import { selectors, urls } from "../POM/mypage";

// Test case for verifying the page title
test('has title', async ({ page }) => {
  await page.goto(urls.BASEURL);
  await expect(page).toHaveTitle('Ryley Johnson');
});

// Tests for navigation bar links
test.describe('Navigation bar links', () => {

  // Test case for navigating to the home section
  test('navigate to home', async ({ page }) => {
    await page.goto(urls.BASEURL);
    await page.locator(selectors.topHomeButton).click();
    await expect(page).toHaveURL(urls.topHomeUrl);
  });

  // Test case for navigating to the about section
  test('navigate to about', async ({ page }) => {
    await page.goto(urls.BASEURL);
    await page.locator(selectors.topAboutButton).click();
    await expect(page).toHaveURL(urls.topAboutUrl);
  });

  // Test case for navigating to the projects section
  test('navigate to projects', async ({ page }) => {
    await page.goto(urls.BASEURL);
    await page.locator(selectors.topProjectButton).click();
    await expect(page).toHaveURL(urls.topProjectsUrl);
  });

  // Test case for navigating to the contact section
  test('navigate to contact', async ({ page }) => {
    await page.goto(urls.BASEURL);
    await page.locator(selectors.topContactButton).click();
    await expect(page).toHaveURL(urls.topContactButton);
  });

});

// Tests For Resume and Cover Letter PDF Downloads
test.describe('Resume/CV PDF Downloads', () => {

// Test for the resume button download
test('resume button downloads PDF', async ({ page }) => {
  await page.goto(urls.BASEURL);

  const [resumeDownload] = await Promise.all([
    page.waitForEvent('download'), 
    page.locator(selectors.resumePDF).click() 
  ]);
  expect(resumeDownload.suggestedFilename()).toBe('resume.pdf');
  });


// Test for the cover letter button download
test('cover letter button downloads PDF', async ({ page }) => {

  await page.goto(urls.BASEURL);

  // Intercept the download for the cover letter button
  const [coverLetterDownload] = await Promise.all([
    page.waitForEvent('download'), // Wait for the download event
    page.locator(selectors.coverLetterPDF).click() // Click the cover letter button
  ]);
  expect(coverLetterDownload.suggestedFilename()).toBe('cover_letter.pdf');
});

});


// Tests for Social Links on top page section
test.describe('Top Page Social Links Connect onclick', () => {

  //linkedin button
  test('LinkedIn link works correctly', async ({ page, context }) => {
    await page.goto(urls.BASEURL);
  
    const linkedInButton = page.locator(selectors.linkedIn).first();

  
    // Verify that the link is visible
    await expect(linkedInButton).toBeVisible();
  
    // Click the link and wait for a new page to open in a new tab
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      linkedInButton.click()
    ]);
  
    // Wait for the new page to load and check that the URL is correct
    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL(urls.linkedInPage);
  
    // Close the new tab
    await newPage.close();
  });

//github button
test('Github link works correctly', async ({ page, context }) => {
  await page.goto(urls.BASEURL);

  const githubButton = page.locator(selectors.gitHub).first();


  // Verify that the link is visible
  await expect(githubButton).toBeVisible();

  // Click the link and wait for a new page to open in a new tab
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    githubButton.click()
  ]);

  // Wait for the new page to load and check that the URL is correct
  await newPage.waitForLoadState();
  await expect(newPage).toHaveURL(urls.gitHubPage);

  // Close the new tab
  await newPage.close();
});
});
// Tests for Social Links on footer section
test.describe('Footer Social Links Connect onclick', () => {

  //linkedin button
  test('Footer LinkedIn link works correctly', async ({ page, context }) => {
    await page.goto(urls.BASEURL);
  
    const linkedInButton = page.locator(selectors.linkedIn).last();

  
    // Verify that the link is visible
    await expect(linkedInButton).toBeVisible();
  
    // Click the link and wait for a new page to open in a new tab
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      linkedInButton.click()
    ]);
  
    // Wait for the new page to load and check that the URL is correct
    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL(urls.linkedInPage);
  
    // Close the new tab
    await newPage.close();
  });

//github button
test(' Footer Github link works correctly', async ({ page, context }) => {
  await page.goto(urls.BASEURL);

  const githubButton = page.locator(selectors.gitHub).last();


  // Verify that the link is visible
  await expect(githubButton).toBeVisible();

  // Click the link and wait for a new page to open in a new tab
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    githubButton.click()
  ]);

  // Wait for the new page to load and check that the URL is correct
  await newPage.waitForLoadState();
  await expect(newPage).toHaveURL(urls.gitHubPage);

  // Close the new tab
  await newPage.close();
});

});


// Tests for Projects link
test.describe('Project links', () => {

  // Test case for Project 1
  test('Load Project 1 Page', async ({ page }) => {
    await page.goto(urls.BASEURL);
    await page.locator(selectors.project1).click();
    await expect(page).toHaveURL(urls.projectOne);
  });

  // Test case for Project 2
  test('Load Project 2 Page', async ({ page }) => {
    await page.goto(urls.BASEURL);
    await page.locator(selectors.project2).click();
    await expect(page).toHaveURL(urls.projectTwo);
  });

  // Test case Project 3
  test('Load Project 3 Page', async ({ page }) => {
    await page.goto(urls.BASEURL);
    await page.locator(selectors.project3).click();
    await expect(page).toHaveURL(urls.projectThree);
  });

  // Test case Project 4
  test('Load Project 4 Page', async ({ page }) => {
    await page.goto(urls.BASEURL);
    await page.locator(selectors.project4).click();
    await expect(page).toHaveURL(urls.projectFour);
  });

  // Test case Project 5
  test('Load Project 5 Page', async ({ page }) =>{
    await page.goto(urls.BASEURL);
    await page.locator(selectors.project5).click();
    await expect(page).toHaveURL(urls.projectFive);

  });
});

test.describe('Images should be Visible', () => {

  // Test Case First Profile Image
  test('Check First Profile Photo', async ({ page }) => {
    await page.goto(urls.BASEURL);
    const image = page.locator(selectors.profilePic1);
    await expect(image).toBeVisible();
  });

  //Test Case 2nd Profile Image
  test('Check Second Profile Photo', async ({ page }) => {
    await page.goto(urls.BASEURL);
    const image = page.locator(selectors.profilePic2);
    await expect(image).toBeVisible();
  });

});


test.describe('Hover Color Changes', () => {

test('nav bar titles change color on hover', async ({ page }) => {
  const defaultColor = 'rgb(255, 4, 4)';
  const hoverColor = 'rgb(0, 0, 0)';

  await page.goto(urls.BASEURL)

  const homeEL = page.locator(selectors.topHomeButton);
  const aboutEl = page.locator(selectors.topAboutButton);
  const projectsEl = page.locator(selectors.topProjectButton);
  const contactEl = page.locator(selectors.topContactButton);

  await expect(homeEL).toHaveCSS('color', defaultColor);
  await expect(aboutEl).toHaveCSS('color', defaultColor);
  await expect(projectsEl).toHaveCSS('color', defaultColor);
  await expect(contactEl).toHaveCSS('color', defaultColor);

  await homeEL.hover();
  await expect(homeEL).toHaveCSS('color', hoverColor);

  await aboutEl.hover();
  await expect(aboutEl).toHaveCSS('color', hoverColor);

  await projectsEl.hover();
  await expect(projectsEl).toHaveCSS('color', hoverColor);

  await contactEl.hover();
  await expect(contactEl).toHaveCSS('color', hoverColor);
});

test('Footer Back to Home Link Should Redirect Back To Homepage', async ({ page }) => {
  await page.goto(urls.projectOne);
  await page.locator(selectors.backToHome).click();
  await expect(page).toHaveURL(urls.BacktoHomeLink);



});

});

test('fill out form, click send, and handle alert', async ({ page }) => {
  // Navigate to the page with the contact form
  await page.goto(urls.BASEURL);

 
  await page.locator(selectors.nameField).fill('George');
  await page.locator(selectors.emailField).fill('test123@gmail.com');
  await page.locator(selectors.messageField).fill('hello this is a test from playwright');


  await page.locator(selectors.sendButton).click();

  // Wait for and handle the alert dialog
  const dialog = await page.waitForEvent('dialog');
  expect(dialog.message()).toBe('Email sent successfully!');
  await dialog.accept();
});

