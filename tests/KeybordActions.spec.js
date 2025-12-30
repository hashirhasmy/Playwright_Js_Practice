import { test, expect } from '@playwright/test';

test('Keyboard Actions', async ({ page }) => {  

    await page.goto('https://gotranscript.com/text-compare');

    await page.locator('[name="text1"]').fill('Hello World');

    // Select all text (Ctrl + A or Command + A)
    await page.keyboard.press('Control+A');

    // Copy the selected text (Ctrl + C or Command + C)
    await page.keyboard.press('Control+C');

    // Click on the second text area
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    // Paste the copied text (Ctrl + V or Command + V)
    await page.keyboard.press('Control+V');

    await page.waitForTimeout(5000);

    const textArea2Value = await page.locator('[name="text2"]').inputValue();
    expect(textArea2Value).toBe('Hello World');
});