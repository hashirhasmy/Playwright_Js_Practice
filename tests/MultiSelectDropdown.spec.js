const { test, expect } = require('@playwright/test');

test('Handle Multi Select Dropdown', async ({ page }) => {        
    await page.goto('https://testautomationpractice.blogspot.com/');

   
    //select multiple options from multi select dropdown
    await page.locator('#colors').selectOption(['Red', 'Blue', 'Yellow']); //select by value, label and index
    await page.waitForTimeout(6000);

    //Assertions //

    //1.1) check number of options in multi select dropdown        
    const optionsCount = await page.locator('#colors option')
    await expect(optionsCount).toHaveCount(7);            
    await page.waitForTimeout(5000);

    //1.2) check number of options in dropdown using JS array length    
    const allOptionsArray = await page.$$('#colors option')
    console.log("Total options in multi select dropdown: " + allOptionsArray.length);
    expect(allOptionsArray.length).toBe(7);
    await page.waitForTimeout(5000);


    //2.1) check specific option is present in multi select dropdown or not
    const optionTexts = await page.locator('#colors').textContent();
    expect(optionTexts.includes('Green')).toBeTruthy();
    await page.waitForTimeout(5000);    

    //2.2) select option from multi select dropdown using looping
    const allOptions = await page.$$('#colors option')
    for (let i = 0; i < allOptions.length; i++) {
        const optionValue = await allOptions[i].textContent();
        if (optionValue.trim() === 'Green') {
            // option elements are not directly clickable; use selectOption on the <select>
            await page.locator('#colors').selectOption({ label: optionValue.trim() });
            break;
        }
    }
    await page.waitForTimeout(2000);
});