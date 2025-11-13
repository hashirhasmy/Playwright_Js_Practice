import { test, expect } from '@playwright/test';


test('Inputbox test', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Input box - Name
    await expect(page.locator('#name')).toBeVisible();
    await expect(page.locator('#name')).toBeEnabled();
    await expect(page.locator('#name')).toBeEditable();
    await expect(page.locator('#name')).toBeEmpty();

    //await page.locator('#name').fill();
    await page.fill('#name', 'Hashir');
    await page.waitForTimeout(2000)  //push code
});