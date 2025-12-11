import { test, expect } from '@playwright/test';

test('Alert with ok', async ({ page }) => {       
    // Navigate to the page
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(2000);

    //Enabling Dialog window handler
    page.on('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    });

    page.locator('#alertBtn').click();
    await page.waitForTimeout(5000);
});


test('Confirmation Dialog-alert with Ok and Cancel', async ({ page }) => {       
    // Navigate to the page
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(2000);
    //Enabling Dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button');
        await dialog.accept();
    });

    await page.locator('#confirmBtn').click();
    let confirmMsg = await page.locator("//p[@id='demo']").textContent();
    console.log("Confirmation message is: " + confirmMsg);
    await expect(confirmMsg).toContain('You pressed OK!');
    await page.waitForTimeout(5000);
});



test.only('Promt dialog', async ({ page }) => {       
    // Navigate to the page
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(2000);
    //Enabling Dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept("Hashir");
    });

    await page.locator('#promptBtn').click();
    console.log("Prompt message is: " + await page.locator("//p[@id='demo']").textContent());
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Hashir! How are you today?');
    await page.waitForTimeout(5000);
});