import { test, expect } from '@playwright/test';

test('Mouse Drag and Drop', async ({ page }) => {  

    await page.goto('https://testautomationpractice.blogspot.com/');

    const from = await page.locator("//div[@id='draggable']");
    const to = await page.locator("//div[@id='droppable']");
    const textLocator = await page.locator("//div[@id='droppable']/p");

    //Way 1
    // await from.hover();
    // await page.mouse.down();
    // await to.hover();
    // await page.mouse.up();

    //Way 2
    await from.dragTo(to);

    await expect(textLocator).toHaveText('Dropped!');

    await page.waitForTimeout(5000);
    
});