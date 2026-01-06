import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { cartPage } from '../pages/CartPage';

test('POM test', async ({ page }) => { 
    
    // await page.goto('https://www.demoblaze.com/index.html');

    // //Login
    // await page.click('#login2');
    // await page.fill("input[id='loginusername']", 'pavanol')
    // await page.fill("input[id='loginpassword']", 'test@123')
    // await page.click("//button[normalize-space()='Log in']")
    // const logoutElement = await page.locator("//a[@id='logout2']")
    // await expect(logoutElement).toBeVisible();

    // //Home Page
    // const productCount = await page.$$("//div[@id='tbodyid']//img");
    // console.log("Total Products on Home Page: " + productCount.length);
    // expect(productCount.length).toBe(9);

    //Add Product to Cart
    // await page.click("//a[normalize-space()='Samsung galaxy s6']");
    // await page.click("//a[normalize-space()='Add to cart']");
    
    // page.on('dialog', async dialog => {
    //     console.log("hook test alert message :   " + dialog.message());
    //     expect(dialog.message()).toContain('Product added');
    //     await dialog.accept();
    // });

    // //Logout
    // await page.locator("//a[@id='logout2']").click();

    //Login using POM

    const login = new LoginPage(page);
    await login.gottoLoginPage();
    await login.login('pavanol', 'test@123');
    const logoutElement = await page.locator("//a[@id='logout2']")
    await expect(logoutElement).toBeVisible();
    await page.waitForTimeout(4000);

    //Home Page
    const home = new HomePage(page);
    const productCount =  await home.getProductCount();
    console.log("Total Products on Home Page: " + productCount);
    expect(productCount).toBe(9);

    //Add Product to Cart
    await home.addProductToCart('Samsung galaxy s6');
    await home.goToCart();
    await page.waitForTimeout(4000);

    //Cart Page
    const cart = new cartPage(page);
    const cartItemsCount = await cart.getCartItemsCount();
    console.log("Total Items in Cart: " + cartItemsCount);
    const isProductInCart = await cart.isProductInCart('Samsung galaxy s6');
    expect(isProductInCart).toBe(true);




});