//const {test, expect} = require('@playwright/test')
import { test, expect } from '@playwright/test';

test('Loctors test', async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

    //1) property - click login button
    //page.locator('id=login2').click();
    await page.click('id=login2');

    //2)cssSelector - fill username
    //page.locator("input[id='loginusername']").fill('pavanol')
    //page.locator("input[id='loginusername']").type('pavanol')
    await page.fill("input[id='loginusername']", 'pavanol')

    //3)cssSelector - fill password
    await page.fill("input[id='loginpassword']", 'test@123')

    //4)xpath - click loginbutton
    await page.click("//button[normalize-space()='Log in']")

    //5)xpath - verify logout element
    const logoutElement = await page.locator("//a[@id='logout2']")
    await expect(logoutElement).toBeVisible();

    await page.close();










});