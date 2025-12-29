import { test, expect } from '@playwright/test';

test('Mouse Hover', async ({ page }) => {  

    // Navigate to the page
    await page.goto('https://www.leafground.com/');

    // Mouse Hover on the element
    await page.locator("//li[@id='menuform:j_idt38']").hover();
    await page.waitForTimeout(2000);
    await page.locator("//li[@id='menuform:j_idt39']").hover();
    await page.waitForTimeout(2000);
    const hoverElement = await page.locator("//li[@id='menuform:j_idt40']");
    await hoverElement.hover();
    await hoverElement.click();
    await page.waitForTimeout(2000);

    // Hover on the revealed submenu item
    const subMenuItem = page.locator("//li[@id='menuform:m_dropdown']");
    await subMenuItem.hover();
    await page.waitForTimeout(5000);

});