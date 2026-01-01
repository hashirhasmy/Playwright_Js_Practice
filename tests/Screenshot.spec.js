import { test, expect } from '@playwright/test';

test('page screenshot', async ({ page }) => { 
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'page.png' });

});


test('Full page screenshot', async ({ page }) => { 
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'fullpage.png', fullPage: true });
});


test.only('Element screenshot', async ({ page }) => { 
    await page.goto('https://testautomationpractice.blogspot.com/');
    const element = await page.locator("//div[@id='HTML3']");
    await element.screenshot({ path: 'tests/screenshots/' + Date.now() + 'element.png' });
});