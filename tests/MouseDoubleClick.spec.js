import { test, expect } from '@playwright/test';

test('Mouse Double Click', async ({ page }) => {  

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Perform a double-click on the button
    const dblocator = await page.locator("//button[normalize-space()='Copy Text']");
    await dblocator.dblclick();

    // Verify that the text has been copied to the textarea
    const textArea = await page.locator('#field2');
    await expect(textArea).toHaveValue('Hello World!');

    await page.waitForTimeout(3000);
    
});