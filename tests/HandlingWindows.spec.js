import { test, expect, chromium } from '@playwright/test';

test('Handling Pages/Windows Test', async () => {  

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();   
    const page2 = await context.newPage();

    const allPages = context.pages();
    console.log('Total pages opened: ' + allPages.length);

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle('OrangeHRM');

    await page2.goto('https://www.orangehrm.com/');
    await expect(page2).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM');

});


test('Handling Multiple Pages/Windows Test', async ({ page }) => {  


    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // const [newPage] = await Promise.all([
    //     page.context().waitForEvent('page'),
    //     page.click("//a[normalize-space()='OrangeHRM, Inc']"), // Opens a new tab
    // ]);
    // await newPage.waitForLoadState();

    // console.log('Main Page Title: ' + await page.title());
    // console.log('New Page Title: ' + await newPage.title());
 
    //<<<<<<<<<<<<<<<<OR>>>>>>>>>>>>>>>>

    // await page.click("//a[normalize-space()='OrangeHRM, Inc']");
    // const pagePromise = await page.context().waitForEvent('page');

    // const newPage1 = await pagePromise;
    // await expect(newPage1).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM');

    // console.log('Main Page Title: ' + await page.title());
    // console.log('New Page Title: ' + await newPage1.title());


    //<<<<<<<<<<<<<<<<OR>>>>>>>>>>>>>>>>
    await page.waitForTimeout(10000);
    const [newPage] = await Promise.all([new Promise(resolve => page.context().once('page', resolve)), await page.locator("//a[normalize-space()='OrangeHRM, Inc']").click()]);
    const actualUrl = newPage.url();
    console.log('Main Page Title: ' + await page.title());
    console.log('New Page URL: ' + actualUrl);
    console.log('New Page Title: ' + await newPage.title());
    await page.waitForTimeout(5000);
    await page.close();
    await newPage.close();
    console.log('New Page closed successfully');
});