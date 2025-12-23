import { test, expect } from '@playwright/test';


test('Handle Table', async ({ page }) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/');

    //total number of rows and columns
    const rows = await page.locator("//table[@id='productTable']/tbody/tr").count();
    const cols = await page.locator("//table[@id='productTable']/thead/tr/th").count();
    console.log("Total number of rows: " + rows);
    console.log("Total number of columns: " + cols);
    expect(rows).toBe(5);
    expect(cols).toBe(4);

    //select checkbox for a specific product = Way1
    for(let r=1; r<=rows; r++) {
        const productName = await page.locator(`//table[@id='productTable']/tbody/tr[${r}]/td[2]`).textContent();
        if(productName?.trim() === 'Tablet') {
            await page.locator(`//table[@id='productTable']/tbody/tr[${r}]/td[4]/input`).check();
            break;
        }
    }
    await page.waitForTimeout(5000);
    

    //select checkbox for a specific product = Way2
    const matchRow = await page.locator("//table[@id='productTable']/tbody/tr").filter({
        has: page.locator("td"), 
        hasText: 'Smartwatch'
    })
    await matchRow.locator("input").check();
    await page.waitForTimeout(5000);


    //select multiple products by reusable function
    await selectProduct(page, 'Smartphone');
    await page.waitForTimeout(3000);
    await selectProduct(page, 'Wireless Earbuds');
    await page.waitForTimeout(3000);

    async function selectProduct(page, productName) {
        const matchRow = await page.locator("//table[@id='productTable']/tbody/tr").filter({
        has: page.locator("td"), 
        hasText: productName
        })
        await matchRow.locator("input").check();
    }

    //print allproduct details using loop in all the pages

    const pagination = await page.$$("//ul[@id='pagination']/li/a");
    for(const pageNo of pagination) {
        const pNo = await pageNo.textContent();
        console.log("********** Page No: " + pNo + " **********");
        await pageNo.click();
        await page.waitForTimeout(3000);
        
        const rowsLocator = page.locator("//table[@id='productTable']/tbody/tr")
        for(let i=0; i<rows; i++) {
        const rowLocator = rowsLocator.nth(i);
        const tds = rowLocator.locator("td");
            for(let j=0; j<await tds.count()-1; j++) {
                const cellValue = await tds.nth(j).textContent();
                console.log(cellValue);
            }
        }
    }

    

    

});