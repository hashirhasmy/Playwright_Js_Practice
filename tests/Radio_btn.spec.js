import { test, expect } from '@playwright/test';

test('Radio btn tests', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Radio btn
    //await page.locator('#male').check();  - male
    await page.check('#male');
    await expect(await page.locator('#male')).toBeChecked();
    await expect(await page.locator('#male').isChecked()).toBeTruthy();   //male

    await expect(await page.locator('#female').isChecked()).toBeFalsy();  //female

    await page.waitForTimeout(4000)  //push code
});
