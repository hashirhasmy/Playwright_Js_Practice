import { test, expect } from '@playwright/test';


let page;

test.beforeEach(async ({ browser }) => {
    console.log("This is before each hook");
    page = await browser.newPage();
    await page.goto('https://www.demoblaze.com/index.html');
    //Login
    await page.click('#login2');
    await page.fill("input[id='loginusername']", 'pavanol')
    await page.fill("input[id='loginpassword']", 'test@123')
    await page.click("//button[normalize-space()='Log in']")
});

test.afterEach(async () => {
    console.log("This is after each hook");
    //Logout
    await page.locator("//a[@id='logout2']").click();
});


test('Home Page Test', async () => {  

    //Home Page
    const productCount = await page.$$("//div[@id='tbodyid']//img");
    console.log("Total Products on Home Page: " + productCount.length);
    expect(productCount.length).toBe(9);

});

test('Add Product to Cart Test', async () => {  

    //Add Product to Cart
    await page.click("//a[normalize-space()='Samsung galaxy s6']");
    await page.click("//a[normalize-space()='Add to cart']");
    
    page.on('dialog', async dialog => {
        console.log("hook test alert message :   " + dialog.message());
        expect(dialog.message()).toContain('Product added');
        await dialog.accept();
    });

});