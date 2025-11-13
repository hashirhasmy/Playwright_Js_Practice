import { test, expect } from '@playwright/test';

test('Checkbox tests', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    //single checkbox
    await page.check('#sunday');
    await expect(await page.locator('#sunday')).toBeChecked();
    await expect(await page.locator('#sunday').isChecked()).toBeTruthy();

    await page.waitForTimeout(2000)

    //multi checkbox
    const checkBoxLocators = ['#monday', '#tuesday', '#wednesday', '#thursday', '#friday', '#saturday'];

    for (const locator of checkBoxLocators) {  //select multi checkbox
        await page.check(locator);
        await expect(await page.locator(locator)).toBeChecked();
        await expect(await page.locator(locator).isChecked()).toBeTruthy();
    }


    for (const locator of checkBoxLocators) {  //deselect multi checkbox
        if (await page.locator(locator).isChecked()) {
            await page.uncheck(locator);
            await expect(await page.locator(locator).isChecked()).toBeFalsy();
        }
    }

    await page.waitForTimeout(4000)  //push code

})