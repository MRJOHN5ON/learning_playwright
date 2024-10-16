import { test, expect } from '@playwright/test';
import { selectors, urls } from "../POM/mypage";
import { Page } from '@playwright/test'; // Import Page type

// Utility function to navigate and expect URL
async function navigateAndExpectURL(page: Page, url: string) {
  await page.goto(url);
  await expect(page).toHaveURL(url);
}

// Test case for verifying the page title
test('has title', async ({ page }) => {
  await navigateAndExpectURL(page, urls.BASEURL);
  await expect(page).toHaveTitle('Ryley Johnson');
});

// Tests for navigation bar links
test.describe('Navigation bar links', () => {
  test.beforeEach(async ({ page }) => {
    await navigateAndExpectURL(page, urls.BASEURL);
  });

  // Test cases for navigation
  const navTests = [
    { button: selectors.topHomeButton, url: urls.topHomeUrl, name: 'home' },
    { button: selectors.topAboutButton, url: urls.topAboutUrl, name: 'about' },
    { button: selectors.topProjectButton, url: urls.topProjectsUrl, name: 'projects' },
    { button: selectors.topContactButton, url: urls.topContactButton, name: 'contact' },
  ];

  navTests.forEach(({ button, url, name }) => {
    test(`navigate to ${name}`, async ({ page }) => {
      await page.locator(button).click();
      await expect(page).toHaveURL(url);
    });
  });
});

// Tests For Resume and Cover Letter PDF Downloads
test.describe('Resume/CV PDF Downloads', () => {
  test.beforeEach(async ({ page }) => {
    await navigateAndExpectURL(page, urls.BASEURL);
  });

  // Test for the resume button download
  test('resume button downloads PDF', async ({ page }) => {
    const [resumeDownload] = await Promise.all([
      page.waitForEvent('download'),
      page.locator(selectors.resumePDF).click(),
    ]);
    expect(resumeDownload.suggestedFilename()).toContain('resume');
  });

  // Test for the cover letter button download
  test('cover letter button downloads PDF', async ({ page }) => {
    const [coverLetterDownload] = await Promise.all([
      page.waitForEvent('download'),
      page.locator(selectors.coverLetterPDF).click(),
    ]);
    expect(coverLetterDownload.suggestedFilename()).toContain('Cover Letter');
  });
});

// Tests for Social Links on top page section
test.describe('Top Page Social Links Connect onclick', () => {
  test.beforeEach(async ({ page }) => {
    await navigateAndExpectURL(page, urls.BASEURL);
  });
  // Function to test social links
  async function testSocialLink(selector: string, expectedUrl: string, page: Page) {
    const button = page.locator(selector).first();
    await expect(button).toBeVisible();
    const [newPage] = await Promise.all([
      page.context().waitForEvent('page'),
      button.click(),
    ]);
    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL(expectedUrl);
    await newPage.close();
  }
  test('LinkedIn link works correctly', async ({ page }) => {
    await testSocialLink(selectors.linkedIn, urls.linkedInPage, page);
  });

  test('Github link works correctly', async ({ page }) => {
    await testSocialLink(selectors.gitHub, urls.gitHubPage, page);
  });
});

// Tests for Footer Social Links
test.describe('Footer Social Links Connect onclick', () => {
  test.beforeEach(async ({ page }) => {
    await navigateAndExpectURL(page, urls.BASEURL);
  });

  // Function to test footer social links
  test('Footer LinkedIn link works correctly', async ({ page, context }) => {
    const linkedInButton = page.locator(selectors.linkedIn).last();
    await expect(linkedInButton).toBeVisible();
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      linkedInButton.click(),
    ]);
    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL(/.*linkedin.*/);
    await newPage.close();
  });

  test('Footer Github link works correctly', async ({ page, context }) => {
    const githubButton = page.locator(selectors.gitHub).last();
    await expect(githubButton).toBeVisible();
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      githubButton.click(),
    ]);
    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL(urls.gitHubPage);
    await newPage.close();
  });
});

// Tests for Projects link
test.describe('Project links', () => {
  test.beforeEach(async ({ page }) => {
    await navigateAndExpectURL(page, urls.BASEURL);
  });

  // Test cases for project navigation
  const projectTests = [
    { selector: selectors.project1, url: urls.projectOne },
    { selector: selectors.project2, url: urls.projectTwo },
    { selector: selectors.project3, url: urls.projectThree },
    { selector: selectors.project4, url: urls.projectFour },
    { selector: selectors.project5, url: urls.projectFive },
  ];

  projectTests.forEach(({ selector, url }, index) => {
    test(`Load Project ${index + 1} Page`, async ({ page }) => {
      await page.locator(selector).click();
      await expect(page).toHaveURL(url);
    });
  });
});

// Tests for Images visibility
test.describe('Images should be Visible', () => {
  test.beforeEach(async ({ page }) => {
    await navigateAndExpectURL(page, urls.BASEURL);
  });

  // Test cases for image visibility
  const imageTests = [
    { selector: selectors.profilePic1, name: 'First Profile Photo' },
    { selector: selectors.profilePic2, name: 'Second Profile Photo' },
  ];

  imageTests.forEach(({ selector, name }) => {
    test(`Check ${name}`, async ({ page }) => {
      const image = page.locator(selector);
      await expect(image).toBeVisible();
    });
  });
});

// Tests for form submission
test('fill out form, click send, and handle alert', async ({ page }) => {
  await navigateAndExpectURL(page, urls.BASEURL);
  await page.locator(selectors.nameField).fill('George');
  await page.locator(selectors.emailField).fill('test123@gmail.com');
  await page.locator(selectors.messageField).fill('hello this is a test from playwright');
  await page.locator(selectors.sendButton).click();

  const dialog = await page.waitForEvent('dialog');
  expect(dialog.message()).toBe('Email sent successfully!');
  await dialog.accept();
});