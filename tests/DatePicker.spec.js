import { test, expect } from '@playwright/test';


test('Date Picker', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Way 1: Using direct input
    //await page.fill('#datepicker', '12/02/2025');

    //Way 2: Using calendar pop-up


    const year = '2026';    
    const month = 'February';
    const day = '15';

    await page.click('#datepicker');

    while (true) {
        const displayedMonth = await page.locator('.ui-datepicker-month').textContent();
        const displayedYear = await page.locator('.ui-datepicker-year').textContent();

        if (displayedMonth === month && displayedYear === year) {
            break;
        }
        await page.click('.ui-datepicker-next');  //For future date
        //await page.click('.ui-datepicker-prev');  //For past date
    }


    //await page.click(`//a[text()='${day}']`);  - Using xpath selector

    const allDays = await page.$$("//a[@class='ui-state-default']");   //Using loop to select day
    for (const d of allDays) {
        const dayText = await d.textContent();
        if (dayText === day) {
            await d.click();
            break;
        }
    }

    await page.waitForTimeout(7000);

});