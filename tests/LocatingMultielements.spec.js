import { test, expect } from '@playwright/test';

test('Verify Multi locators', async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')


    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a")


    const elements = await page.$$("//div[@id='tbodyid']//div//h4/a")
    console.log("Number of elements found: " + elements.length);

    for(const element of elements){
        const elementValue = await element.textContent();
        console.log(elementValue)
    }
})