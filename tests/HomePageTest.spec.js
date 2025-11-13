import { test, expect, mergeExpects } from '@playwright/test';

test('Title Check', async({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    const pagetitle = await page.title();
    console.log('page title is : ' + pagetitle);
    await expect(page).toHaveTitle('STORE');
    const pageURL = page.url();
    console.log('Page url : ' + pageURL)
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
    await page.close();
})