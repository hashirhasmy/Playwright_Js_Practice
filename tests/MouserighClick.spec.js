import { test, expect } from '@playwright/test';

test('Mouse Right Click', async ({ page }) => {  

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    // Perform a right-click on the button to open the context menu
    const button = page.locator("//span[@class='context-menu-one btn btn-neutral']");
    await button.click({ button: 'right' });
    await page.waitForTimeout(4000);
    // Verify that the context menu is visible
    const contextMenu = page.locator('ul.context-menu-list.context-menu-root');
    await expect(contextMenu).toBeVisible();
});