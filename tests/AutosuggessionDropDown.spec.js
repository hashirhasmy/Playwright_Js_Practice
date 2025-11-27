import { test, expect } from '@playwright/test';


test.only('Handle Multi Select Dropdown', async ({ page }) => {        

    // Navigate to the page
    await page.goto('https://www.google.com/');
    await page.waitForTimeout(2000);

    await page.locator("//textarea[@name='q']").click();
    await page.locator("//textarea[@name='q']").fill('Vijay');

     await page.waitForTimeout(5000);

     //select all options from dropdown
    const allOptions = await page.$$("//ul[@role = 'listbox']/li//div[@class='wM6W7d']/span");

    //select specific option from dropdown
    for (const option of allOptions) {
        const optionText = await option.textContent();
        console.log("Option Text: " + optionText);
        if (optionText.trim() === 'vijay antony movies') {
            await option.click();
            console.log("Selected option: " + optionText.trim());
            break;
        }   
    }

    await page.waitForTimeout(5000);

});