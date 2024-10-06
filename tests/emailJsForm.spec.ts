import { test, expect, Page } from '@playwright/test';
import { selectors, urls } from '../POM/mypage'; 

//NOTE - THIS TEST SUITE WAS WRITTEN WITH THE HELP OF AN AI ASSISTANT

test.describe('Email Form Validation Tests', () => {
    let page: Page; 

    test.beforeEach(async ({ page: testPage }) => {
        page = testPage;
        await page.goto(urls.BASEURL); // Navigate to the base URL
    });

    test('should alert when fields are empty', async () => {
        page.on('dialog', async dialog => {
            await expect(dialog.message()).toContain("Please fill in all fields before sending the email.");
            await dialog.dismiss(); // Dismiss the alert
        });
        await page.locator(selectors.sendButton).click(); // Attempt to send without filling fields
    });
    test('should alert when message is empty', async () => {
        page.on('dialog', async dialog => {
            await expect(dialog.message()).toContain("Please fill in all fields before sending the email.");
            await dialog.dismiss(); // Dismiss the alert
        });
        await page.locator(selectors.nameField).fill('John'); // Valid name
        await page.locator(selectors.emailField).fill('john@example.com'); // Valid email
        await page.locator(selectors.messageField).fill(''); // Empty message
        await page.locator(selectors.sendButton).click(); // Attempt to send
    });
    test('should alert when name is empty', async () => {
        page.on('dialog', async dialog => {
            await expect(dialog.message()).toContain("Please fill in all fields before sending the email.");
            await dialog.dismiss(); // Dismiss the alert
        });
        await page.locator(selectors.nameField).fill(''); // Empty name
        await page.locator(selectors.emailField).fill('john@example.com'); // Valid email
        await page.locator(selectors.messageField).fill('Hello!'); // Valid message
        await page.locator(selectors.sendButton).click(); // Attempt to send
    });
    test('should alert when email is empty', async () => {
        page.on('dialog', async dialog => {
            await expect(dialog.message()).toContain("Please fill in all fields before sending the email.");
            await dialog.dismiss(); // Dismiss the alert
        });
        await page.locator(selectors.nameField).fill('John'); // Valid name
        await page.locator(selectors.emailField).fill(''); // Empty email
        await page.locator(selectors.messageField).fill('Hello!'); // Valid message
        await page.locator(selectors.sendButton).click(); // Attempt to send
    });
    

    test('should alert when name contains non-letter characters', async () => {
        page.on('dialog', async dialog => {
            await expect(dialog.message()).toContain("Name must contain only letters.");
            await dialog.dismiss(); // Dismiss the alert
        });
        await page.locator(selectors.nameField).fill('John123'); // Invalid name input
        await page.locator(selectors.emailField).fill('john@example.com'); // Valid email
        await page.locator(selectors.messageField).fill('Hello!'); // Valid message
        await page.locator(selectors.sendButton).click(); // Attempt to send
    });

    test('should alert when email format is invalid', async () => {
        page.on('dialog', async dialog => {
            await expect(dialog.message()).toContain("Please enter a valid email address.");
            await dialog.dismiss(); // Dismiss the alert
        });
        await page.locator(selectors.nameField).fill('John'); // Valid name
        await page.locator(selectors.emailField).fill('johnexample.com'); // Invalid email
        await page.locator(selectors.messageField).fill('Hello!'); // Valid message
        await page.locator(selectors.sendButton).click(); // Attempt to send
    });

    test('should alert success when email is sent successfully', async () => {
        page.on('dialog', async dialog => {
            await expect(dialog.message()).toContain("Email sent successfully!");
            await dialog.dismiss(); // Dismiss the alert
        });
        await page.locator(selectors.nameField).fill('John'); // Valid name
        await page.locator(selectors.emailField).fill('john@example.com'); // Valid email
        await page.locator(selectors.messageField).fill('Hello!'); // Valid message
        await page.locator(selectors.sendButton).click(); // Attempt to send
    });
    test('should alert when email is only a dot and an at symbol', async () => {
        page.on('dialog', async dialog => {
            await expect(dialog.message()).toContain("Please enter a valid email address.");
            await dialog.dismiss(); // Dismiss the alert
        });
        await page.locator(selectors.nameField).fill('John'); // Valid name
        await page.locator(selectors.emailField).fill('.@'); // Invalid email with only a dot and an at symbol
        await page.locator(selectors.messageField).fill('Hello!'); // Valid message
        await page.locator(selectors.sendButton).click(); // Attempt to send
    });
    
});
