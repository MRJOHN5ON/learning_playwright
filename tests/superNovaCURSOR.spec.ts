import { test, expect } from '@playwright/test';
import { selectors, urls, wordsList } from '../POM/mypage';

test.describe('SuperNova Internship Test Report', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(urls.supernova);
    });


test('should have top header title', async ({ page }) => {
    const header = page.locator('h1');
    await expect(header).toHaveText('Supernova Internship Test Report');
});

test('should have visible and bold words in the introduction section', async ({ page }) => {
    const introductionLocator = page.locator('#introduction'); // Targeting the introduction section

    for (const word of wordsList) { // Use the imported words list
        const locator = introductionLocator.locator(`text="${word}"`).first(); // Select the first occurrence
        await expect(locator).toBeVisible();
        await expect(locator).toHaveCSS('font-weight', '700'); // Check if the text is bold
    }
}); 


    test('Check hover effect on all links', async ({ page }) => {
 
        // Select all anchor tags on the page
        const links = await page.locator('a').all();
    
        for (const link of links) {
            // Retrieve the initial styles for color and background color
            const initialStyles = await link.evaluate((el) => ({
                color: getComputedStyle(el).color,
                backgroundColor: getComputedStyle(el).backgroundColor,
                textDecoration: getComputedStyle(el).textDecoration,
            }));
    
            // Hover over each link
            await link.hover();
    
            // Retrieve styles after hover
            const hoverStyles = await link.evaluate((el) => ({
                color: getComputedStyle(el).color,
                backgroundColor: getComputedStyle(el).backgroundColor,
                textDecoration: getComputedStyle(el).textDecoration,
            }));
    
            // Check if any of the properties have changed
            const isHoverEffectPresent =
                initialStyles.color !== hoverStyles.color ||
                initialStyles.backgroundColor !== hoverStyles.backgroundColor ||
                initialStyles.textDecoration !== hoverStyles.textDecoration;
    
            // Expect at least one style to change on hover
            expect(isHoverEffectPresent).toBe(true);
        }
    });

    test('should have an internship certificate image', async ({ page }) => {
        await expect(page.locator(selectors.internshipCertificate)).toBeVisible();
    });

    test('Verify presence of video demonstration elements', async ({ page }) => {
    
        // Check that the section exists
        const section = page.locator('#video-demonstration');
        await expect(section).toBeVisible();
    
        // Check for heading, video, and disclaimer
        await expect(section.locator('h2')).toHaveText('Video Demonstration');
        await expect(section.locator('.video-responsive iframe')).toBeVisible();
        await expect(section.locator('p em')).toContainText('Disclaimer');
    });
    test('Check iframe properties for video functionality', async ({ page }) => {
    
        const iframe = page.locator('#video-demonstration .video-responsive iframe');
    
        // Check that the src attribute points to YouTube
        await expect(iframe).toHaveAttribute('src', /youtube\.com/);
    
        // Check that allowfullscreen is enabled
        await expect(iframe).toHaveAttribute('allowfullscreen', '');
    });
    
    test('Verify video container is responsive', async ({ page }) => {
    
        const videoContainer = page.locator('#video-demonstration .video-responsive');
    
        // Test with a smaller viewport
        await page.setViewportSize({ width: 400, height: 800 });
        const smallSize = await videoContainer.boundingBox();
        
        // Test with a larger viewport
        await page.setViewportSize({ width: 1200, height: 800 });
        const largeSize = await videoContainer.boundingBox();
    
        // Check if bounding boxes are defined before asserting
        if (smallSize && largeSize) {
            expect(smallSize.width).toBeLessThan(largeSize.width);
        } else {
            throw new Error("Bounding box not found for video container at one of the viewports.");
        }
    });

    test('Check iframe has accessible title attribute', async ({ page }) => {

    
        const iframe = page.locator('#video-demonstration .video-responsive iframe');
        await expect(iframe).toHaveAttribute('title', 'YouTube video player');
    });
    
    test('Verify presence of test results summary elements', async ({ page }) => {
        const section = page.locator('#test-results-summary');
        await expect(section).toBeVisible();
    
        // Check for the heading and table
        await expect(section.locator('h2')).toHaveText('Test Results Summary');
        await expect(section.locator('.table-container table')).toBeVisible();
    });
    
    test('Verify table headers in test results summary', async ({ page }) => {
        const headers = page.locator('#test-results-summary table th');
        const expectedHeaders = ['Component', 'Total Tests', 'Passed', 'Failed', 'Bugs Found'];
        
        for (let i = 0; i < expectedHeaders.length; i++) {
            await expect(headers.nth(i)).toHaveText(expectedHeaders[i]);
        }
    });
    
    test('Verify data in test results summary table', async ({ page }) => {
        const rows = page.locator('#test-results-summary table tr');
    
        // Validate data for specific rows by index
        await expect(rows.nth(1).locator('td').nth(0)).toHaveText('Cal_carrier_remmitance');
        await expect(rows.nth(1).locator('td').nth(1)).toHaveText('28');
        await expect(rows.nth(1).locator('td').nth(2)).toHaveText('14');
        await expect(rows.nth(1).locator('td').nth(3)).toHaveText('14');
        await expect(rows.nth(1).locator('td').nth(4)).toHaveText('14');
    });
    
    test('Check for placeholder values in test results summary table', async ({ page }) => {
        // Check for '-' in Leads Management/Kanban Board row
        const kanbanRow = page.locator('#test-results-summary table tr').nth(3);
        await expect(kanbanRow.locator('td').nth(1)).toHaveText('-');
        await expect(kanbanRow.locator('td').nth(2)).toHaveText('-');
        await expect(kanbanRow.locator('td').nth(3)).toHaveText('-');
    });

    
    
    
});