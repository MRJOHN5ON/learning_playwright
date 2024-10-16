import { test, expect, Page } from '@playwright/test';
import { selectors, urls } from '../POM/mypage'; 

// Helper function to handle dialog assertions
async function assertDialogMessage(page: Page, expectedMessage: string) {
    page.on('dialog', async dialog => {
        await expect(dialog.message()).toContain(expectedMessage);
        await dialog.dismiss(); // Dismiss the alert
    });
}

test.describe('Email Form Validation Tests', () => {
    let page: Page; 

    test.beforeEach(async ({ page: testPage }) => {
        page = testPage;
        await page.goto(urls.BASEURL); // Navigate to the base URL
    });

    // Array of test cases for empty fields
    const testCases = [
        { name: '', email: 'john@example.com', message: '', expected: "Please fill in all fields before sending the email." },
        { name: 'John', email: '', message: 'Hello!', expected: "Please fill in all fields before sending the email." },
        { name: '', email: '', message: '', expected: "Please fill in all fields before sending the email." },
        { name: 'John123', email: 'john@example.com', message: 'Hello!', expected: "Name must contain only letters." },
        { name: 'John', email: 'johnexample.com', message: 'Hello!', expected: "Please enter a valid email address." },
        { name: 'John', email: '.@', message: 'Hello!', expected: "Please enter a valid email address." },
    ];

    // Loop through each test case
    for (const { name, email, message, expected } of testCases) {
        test(`should alert when fields are invalid: ${name ? name : 'Empty name'}, ${email ? email : 'Empty email'}, ${message ? message : 'Empty message'}`, async () => {
            await page.locator(selectors.nameField).fill(name);
            await page.locator(selectors.emailField).fill(email);
            await page.locator(selectors.messageField).fill(message);
            await assertDialogMessage(page, expected);
            await page.locator(selectors.sendButton).click(); // Attempt to send
        });
    }

    test('should alert success when email is sent successfully', async () => {
        await assertDialogMessage(page, "Email sent successfully!");
        await page.locator(selectors.nameField).fill('John'); // Valid name
        await page.locator(selectors.emailField).fill('john@example.com'); // Valid email
        await page.locator(selectors.messageField).fill('Hello!'); // Valid message
        await page.locator(selectors.sendButton).click(); // Attempt to send
    });
});