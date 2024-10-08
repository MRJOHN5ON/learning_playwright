import { test, expect } from '@playwright/test';
import { selectors, urls } from '../POM/mypage';


test.describe('Project 3 functionalities', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(urls.projectThree);
    });


    test('Should have top header title', async ({ page }) => {
        const header = page.locator('h1');
        await expect(header).toHaveText('Working The Steps Of The SDLC For Web Based Testing');
    });

    test('should have Requirement Analysis as a header', async ({ page }) => {
        const header = page.getByRole('heading', { name: 'Requirement Analysis' });
        await expect(header).toHaveText('Requirement Analysis');
    });

    test('should have Equivalency Partitions & Boundary Values as a header', async ({ page }) => {
        const header = page.getByRole('heading', { name: 'Equivalency Partitions & Boundary Values' });
        await expect(header).toHaveText('Equivalency Partitions & Boundary Values');
    });

    test('should have Test Creation & Execution as a header', async ({ page }) => {
        const header = page.getByRole('heading', { name: 'Test Creation & Execution' });
        await expect(header).toHaveText('Test Creation & Execution');
    });

    test('should have Test Results Stats as a header', async ({ page }) => {
        const header = page.getByRole('heading', { name: 'Test Results Stats' });
        await expect(header).toHaveText('Test Results Stats');
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
});