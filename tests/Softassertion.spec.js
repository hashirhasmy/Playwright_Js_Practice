import { test, expect } from '@playwright/test';

test('Soft assertion', async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

    //Hard assertion
    // await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
    // await expect(page).toHaveTitle('STORE123')
    // await expect(page.locator('#nava')).toBeVisible()


    //Soft assertion
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html')
    await expect.soft(page).toHaveTitle('STORE123')
    await expect.soft(page.locator('#nava')).toBeVisible()

})