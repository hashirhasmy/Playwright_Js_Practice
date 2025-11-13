import { test, expect } from '@playwright/test';

test('Assertion test', async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register')

    //1) expect(page).toHaveURL()  - Page has a URL
    let url = 'https://demo.nopcommerce.com/register'
    await expect(page).toHaveURL(url)

    //2) expect(page).toHaveTitle() - page has title
    let title = 'nopCommerce demo store. Register'
    expect(page).toHaveTitle(title)

    //3) expect(locator).toBeVisible() - element is visible
    await expect(page.locator('.header-logo')).toBeVisible()

    //4) expect(locator).toBeEnabled() - Control is enabled
    await expect(page.locator('#small-searchterms')).toBeEnabled()

    //5) expect(locator).toBeChecked() - Radio/Checkbox is checked

    //radio button
    await page.click('#gender-male')
    await expect(page.locator('#gender-male')).toBeChecked()

    //check box
    await expect(page.locator('.form-check-input')).toBeChecked()

    //6) expect(locator).toHaveAttibute() - Element has attribute
    await expect(page.locator("//button[normalize-space()='Search']")).toHaveAttribute('type','submit')

    //7) expect(locator).toHaveText()  - Element maches text - full text
    await expect(page.locator("//h1[normalize-space()='Register']")).toHaveText('Register')

    //8) expect(locator).toContainText()  - element contains text - partial text
    await expect(page.locator("//h1[normalize-space()='Register']")).toContainText('Regi')

    //9) expect(locator).toHaveValue(value) - Input has a value
    await page.fill('#Email', 'Hashir123')
    await expect(page.locator('#Email')).toHaveValue('Hashir123')

    //10) expect(locator).toHavecount() - list of elemnets has given length
    const apparelSubs = await page.locator("//div[@aria-label='Apparel']/div")
    expect(apparelSubs).toHaveCount(3)


})