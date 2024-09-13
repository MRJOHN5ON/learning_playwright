import { test, expect} from '@playwright/test';
import { selectors, urls } from '../POM/mypage';


test.describe('Project 3 functionalities', () => {


test('Should have top header title', async ({ page }) => {
await page.goto(urls.projectThree);
const header = page.locator('h1');
await expect(header).toHaveText('Working The Steps Of The SDLC For Web Based Testing');



});

test('should have Requirement Analysis as a header', async ({page}) => {
    await page.goto(urls.projectThree);
    const header = page.getByRole('heading', { name: 'Requirement Analysis' });

    await expect(header).toHaveText('Requirement Analysis');
});




});