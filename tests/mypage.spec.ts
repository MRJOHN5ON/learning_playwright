import { test, expect } from '@playwright/test';

// Test case for verifying the page title
test('has title', async ({ page }) => {
  await page.goto('https://mrjohn5on.github.io/');
  await expect(page).toHaveTitle('Ryley Johnson');
});

// Tests for navigation bar links
test.describe('Navigation bar links', () => {

  // Test case for navigating to the home section
  test('navigate to home', async ({ page }) => {
    await page.goto('https://mrjohn5on.github.io/');
    await page.locator('//*[@id="myNavMenu"]/ul/li[1]/a').click();
    await expect(page).toHaveURL('https://mrjohn5on.github.io/#home');
  });

  // Test case for navigating to the about section
  test('navigate to about', async ({ page }) => {
    await page.goto('https://mrjohn5on.github.io/');
    await page.locator('//*[@id="myNavMenu"]/ul/li[2]/a').click();
    await expect(page).toHaveURL('https://mrjohn5on.github.io/#about');
  });

  // Test case for navigating to the projects section
  test('navigate to projects', async ({ page }) => {
    await page.goto('https://mrjohn5on.github.io/');
    await page.locator('//*[@id="myNavMenu"]/ul/li[3]/a').click();
    await expect(page).toHaveURL('https://mrjohn5on.github.io/#projects');
  });

  // Test case for navigating to the contact section
  test('navigate to contact', async ({ page }) => {
    await page.goto('https://mrjohn5on.github.io/');
    await page.locator('//*[@id="myNavMenu"]/ul/li[4]/a').click();
    await expect(page).toHaveURL('https://mrjohn5on.github.io/#contact');
  });

});

// Tests For Resume and Cover Letter PDF Downloads
test.describe('Resume/CV PDF Downloads', () => {

// Test for the resume button download
test('resume button downloads PDF', async ({ page }) => {
  await page.goto('https://mrjohn5on.github.io/');

  const [resumeDownload] = await Promise.all([
    page.waitForEvent('download'), 
    page.locator('a.btn.blue-btn:has-text("RESUME")').click() 
  ]);
  expect(resumeDownload.suggestedFilename()).toBe('resume.pdf');
  });


// Test for the cover letter button download
test('cover letter button downloads PDF', async ({ page }) => {

  await page.goto('https://mrjohn5on.github.io/');

  // Intercept the download for the cover letter button
  const [coverLetterDownload] = await Promise.all([
    page.waitForEvent('download'), // Wait for the download event
    page.locator('a.btn:has-text("COVER LETTER")').click() // Click the cover letter button
  ]);
  expect(coverLetterDownload.suggestedFilename()).toBe('cover_letter.pdf');
});

});


// Tests for Social Links on top page section
test.describe('Top Page Social Links Connect onclick', () => {

  //linkedin button
  test('LinkedIn link works correctly', async ({ page, context }) => {
    await page.goto('https://mrjohn5on.github.io/');
  
    const linkedInButton = page.locator('a[href="https://www.linkedin.com/in/ryleyj"]').first();

  
    // Verify that the link is visible
    await expect(linkedInButton).toBeVisible();
  
    // Click the link and wait for a new page to open in a new tab
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      linkedInButton.click()
    ]);
  
    // Wait for the new page to load and check that the URL is correct
    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL('https://www.linkedin.com/in/ryleyj');
  
    // Close the new tab
    await newPage.close();
  });

//github button
test('Github link works correctly', async ({ page, context }) => {
  await page.goto('https://mrjohn5on.github.io/');

  const githubButton = page.locator('a[href="https://github.com/MRJOHN5ON"]').first();


  // Verify that the link is visible
  await expect(githubButton).toBeVisible();

  // Click the link and wait for a new page to open in a new tab
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    githubButton.click()
  ]);

  // Wait for the new page to load and check that the URL is correct
  await newPage.waitForLoadState();
  await expect(newPage).toHaveURL('https://github.com/MRJOHN5ON');

  // Close the new tab
  await newPage.close();
});
});
// Tests for Social Links on footer section
test.describe('Footer Social Links Connect onclick', () => {

  //linkedin button
  test('Footer LinkedIn link works correctly', async ({ page, context }) => {
    await page.goto('https://mrjohn5on.github.io/');
  
    const linkedInButton = page.locator('a[href="https://www.linkedin.com/in/ryleyj"]').last();

  
    // Verify that the link is visible
    await expect(linkedInButton).toBeVisible();
  
    // Click the link and wait for a new page to open in a new tab
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      linkedInButton.click()
    ]);
  
    // Wait for the new page to load and check that the URL is correct
    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL('https://www.linkedin.com/in/ryleyj');
  
    // Close the new tab
    await newPage.close();
  });

//github button
test(' Footer Github link works correctly', async ({ page, context }) => {
  await page.goto('https://mrjohn5on.github.io/');

  const githubButton = page.locator('a[href="https://github.com/MRJOHN5ON"]').last();


  // Verify that the link is visible
  await expect(githubButton).toBeVisible();

  // Click the link and wait for a new page to open in a new tab
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    githubButton.click()
  ]);

  // Wait for the new page to load and check that the URL is correct
  await newPage.waitForLoadState();
  await expect(newPage).toHaveURL('https://github.com/MRJOHN5ON');

  // Close the new tab
  await newPage.close();
});

});


// Tests for Projects link
test.describe('Project links', () => {

  // Test case for Project 1
  test('Load Project 1 Page', async ({ page }) => {
    await page.goto('https://mrjohn5on.github.io/');
    await page.locator('//*[@id="projects"]/div[2]/div[1]/a/h3').click();
    await expect(page).toHaveURL('https://mrjohn5on.github.io/project1.html');
  });

  // Test case for Project 2
  test('Load Project 2 Page', async ({ page }) => {
    await page.goto('https://mrjohn5on.github.io/');
    await page.locator('//*[@id="projects"]/div[2]/div[2]/a/h3').click();
    await expect(page).toHaveURL('https://mrjohn5on.github.io/project2.html');
  });

  // Test case Project 3
  test('Load Project 3 Page', async ({ page }) => {
    await page.goto('https://mrjohn5on.github.io/');
    await page.locator('#projects > div.project-container > div:nth-child(3) > a > h3').click();
    await expect(page).toHaveURL('https://mrjohn5on.github.io/project3.html');
  });

  // Test case Project 4
  test('Load Project 4 Page', async ({ page }) => {
    await page.goto('https://mrjohn5on.github.io/');
    await page.locator('#projects > div.project-container > div:nth-child(4) > a > h3').click();
    await expect(page).toHaveURL('https://github.com/MRJOHN5ON/Swaglabs-Username-Acceptance-Test');
  });

  // Test case Project 5
  test('Load Project 5 Page', async ({ page }) =>{
    await page.goto('https://mrjohn5on.github.io/');
    await page.locator('#projects > div.project-container > div:nth-child(5) > a > h3').click();
    await expect(page).toHaveURL('https://mrjohn5on.github.io/project4.html');

  });
});

test.describe('Images should be Visible', () => {

  // Test Case First Profile Image
  test('Check First Profile Photo', async ({ page }) => {
    await page.goto('https://mrjohn5on.github.io/');
    const image = page.locator('img[alt="avatar"]');
    await expect(image).toBeVisible();
  });

  //Test Case 2nd Profile Image
  test('Check Second Profile Photo', async ({ page }) => {
    await page.goto('https://mrjohn5on.github.io/');
    const image = page.locator('img[alt="My Photo"]');
    await expect(image).toBeVisible();
  });

});

test.describe('Product One Page Functions', () => {

  //Test Case for Header Github button link functionality
test('Github link on header should lead to github repo', async ({ page, context }) => {
  await page.goto('https://mrjohn5on.github.io/project1.html');
  const githubButton1 = page.locator('a[href="https://github.com/MRJOHN5ON/postmanAPI_testing"]').first();


  // Verify that the link is visible
  await expect(githubButton1).toBeVisible();

  // Click the link and wait for a new page to open in a new tab
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    githubButton1.click()
  ]);

  // Wait for the new page to load and check that the URL is correct
  await newPage.waitForLoadState();
  await expect(newPage).toHaveURL('https://github.com/MRJOHN5ON/postmanAPI_testing');

  // Close the new tab
  await newPage.close();
});

//Test Case for Header Github button link functionality
test('Github link on footer should lead to github repo', async ({ page, context }) => {
  await page.goto('https://mrjohn5on.github.io/project1.html');
  const githubButton1 = page.locator('a[href="https://github.com/MRJOHN5ON/postmanAPI_testing"]').last();


  // Verify that the link is visible
  await expect(githubButton1).toBeVisible();

  // Click the link and wait for a new page to open in a new tab
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    githubButton1.click()
  ]);

  // Wait for the new page to load and check that the URL is correct
  await newPage.waitForLoadState();
  await expect(newPage).toHaveURL('https://github.com/MRJOHN5ON/postmanAPI_testing');

  // Close the new tab
  await newPage.close();
});

test('Adding products to kit photo should enlarge into new tab upon click', async ({ page, context }) => {
  // Go to the project page
  await page.goto('https://mrjohn5on.github.io/project1.html');

  // Click on the image to open the enlarged photo
  const [newTab] = await Promise.all([
    context.waitForEvent('page'), // Wait for a new tab to open
    page.locator('img[alt="Adding Products to a Kit"]').click(), // Click the image
  ]);

  // Wait for the new tab to load and check its URL
  await newTab.waitForLoadState();
  await expect(newTab).toHaveURL('https://mrjohn5on.github.io/assets/images/p1.png');

  // Close the new tab
  await newTab.close();
});

test('Exceeding 30 items photo should enlarge into new tab upon click', async ({ page, context }) => {
  // Go to the project page
  await page.goto('https://mrjohn5on.github.io/project1.html');

  // Click on the image to open the enlarged photo
  const [newTab] = await Promise.all([
    context.waitForEvent('page'), // Wait for a new tab to open
    page.locator('img[alt="Exceeding 30 Items"]').click(), // Click the image
  ]);

  // Wait for the new tab to load and check its URL
  await newTab.waitForLoadState();
  await expect(newTab).toHaveURL('https://mrjohn5on.github.io/assets/images/p2.png');

  // Close the new tab
  await newTab.close();
});

test('Bug report 1 photo should enlarge into new tab upon click', async ({ page, context }) => {
  // Go to the project page
  await page.goto('https://mrjohn5on.github.io/project1.html');

  // Click on the specific image (e.g., the first one)
  const [newTab] = await Promise.all([
    context.waitForEvent('page'), // Wait for a new tab to open
    page.locator('img[alt="Bug Report in JIRA"]').first().click(), // Click the first image
  ]);

  // Wait for the new tab to load and check its URL
  await newTab.waitForLoadState();
  await expect(newTab).toHaveURL('https://mrjohn5on.github.io/assets/images/p3.png');

  // Close the new tab
  await newTab.close();
});


test('Non-existent Product IDs photo should enlarge into new tab upon click', async ({ page, context }) => {
  // Go to the project page
  await page.goto('https://mrjohn5on.github.io/project1.html');

  // Click on the image to open the enlarged photo
  const [newTab] = await Promise.all([
    context.waitForEvent('page'), // Wait for a new tab to open
    page.locator('img[alt="Non-existent Product IDs"]').click(), // Click the image
  ]);

  // Wait for the new tab to load and check its URL
  await newTab.waitForLoadState();
  await expect(newTab).toHaveURL('https://mrjohn5on.github.io/assets/images/p4.png');

  // Close the new tab
  await newTab.close();
});

test('Bug report 2 photo should enlarge into new tab upon click', async ({ page, context }) => {
  // Go to the project page
  await page.goto('https://mrjohn5on.github.io/project1.html');

  // Click on the image to open the enlarged photo
  const [newTab] = await Promise.all([
    context.waitForEvent('page'), // Wait for a new tab to open
    page.locator('img[alt="Bug Report in JIRA"]').nth(1).click(), // Click the 2nd bug report image
  ]);

  // Wait for the new tab to load and check its URL
  await newTab.waitForLoadState();
  await expect(newTab).toHaveURL('https://mrjohn5on.github.io/assets/images/p5.png');

  // Close the new tab
  await newTab.close();
});

test('Results photo should enlarge into new tab upon click', async ({ page, context }) => {
  // Go to the project page
  await page.goto('https://mrjohn5on.github.io/project1.html');

  // Click on the image to open the enlarged photo
  const [newTab] = await Promise.all([
    context.waitForEvent('page'), // Wait for a new tab to open
    page.locator('img[alt="Results"]').click(), // Click the image
  ]);

  // Wait for the new tab to load and check its URL
  await newTab.waitForLoadState();
  await expect(newTab).toHaveURL('https://mrjohn5on.github.io/assets/images/p6.png');

  // Close the new tab
  await newTab.close();
});
test.describe('Hover Color Changes', () => {

test('nav bar titles change color on hover', async ({ page }) => {
  const defaultColor = 'rgb(255, 4, 4)';
  const hoverColor = 'rgb(0, 0, 0)';

  await page.goto('https://mrjohn5on.github.io/')

  const homeEL = page.locator('#myNavMenu').getByRole('link', { name: 'Home' });
  const aboutEl = page.locator('#myNavMenu').getByRole('link',{ name: 'About' });
  const projectsEl = page.locator('#myNavMenu').getByRole('link',{ name: 'Projects' });
  const contactEl = page.locator('#myNavMenu').getByRole('link',{ name: 'Contact' });

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

});

});