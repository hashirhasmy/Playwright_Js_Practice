import { test, expect } from '@playwright/test';


test.only('Handle Multi Select Dropdown', async ({ page }) => {        

    // Navigate to the page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForTimeout(2000);

    await page.locator("//input[@name='username']").fill('Admin');
    await page.locator("//input[@name='password']").fill('admin123');
    await page.locator("//button[@type='submit']").click();

    //click on PIM module
    await page.locator("//a[@href='/web/index.php/pim/viewPimModule']").click();
    await page.waitForTimeout(2000);

    //click sub unit dropdown
    await page.locator("//label[text()='Sub Unit']/../following-sibling::div//i").click();
    await page.waitForTimeout(2000);

    //select specific option from dropdown
    const allOptions = await page.$$("//div[@role='listbox']//span"); 
    for (const option of allOptions) {
        const optionText = await option.textContent();
        console.log("Option Text: " + optionText);
        if (optionText.trim() === 'Finance') {
            await option.click();
            console.log("Selected option: " + optionText.trim());
            break;
        }
    }

    await page.waitForTimeout(5000);
});