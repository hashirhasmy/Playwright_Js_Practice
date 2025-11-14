const { test, expect } = require('@playwright/test');

test('Handle Dropdown', async ({ page }) => {

    //multiple ways to select option from dropdown //

    await page.goto('https://testautomationpractice.blogspot.com/');

    //mouse hover to dropdown
    await page.locator('#country').hover();
    
    await page.waitForTimeout(2000);

    await page.locator('#country').selectOption({ label: 'Canada' }); //select by label/visible text
    //await page.locator('#country').selectOption('India'); //select by visible text
    await page.waitForTimeout(2000);

    // await page.locator('#country').selectOption({ value: 'Canada' }); //select by value attribute
    // await page.waitForTimeout(5000);

    await page.locator('#country').selectOption({ index: 5 }); //select by index (0 based)
    await page.waitForTimeout(2000);

    await page.selectOption('#country', 'Germany'); //For multi select dropdown
    await page.waitForTimeout(2000);

    //Asserions //

    //1) check number of options in dropdown        
    const optionsCount = await page.locator('#country option')
    expect(optionsCount).toHaveCount(10);

    //2) check number of options in dropdown alternative way
    const allOptions = await page.$$('#country option')
    expect(allOptions.length).toBe(10);

    //3) check specific option is present in dropdown or not
    const optionTexts = await page.locator('#country').textContent();
    expect(optionTexts.includes('India')).toBeTruthy();

    //4) check presence of value in dropdown - usnig looping
    let valuePresent = false;
    for (let i = 0; i < allOptions.length; i++) {
        const optionValue = await allOptions[i].textContent();
        console.log(optionValue.trim());
        if (optionValue.trim() === 'India') {
            valuePresent = true;
            break;
        }
    }
    expect(valuePresent).toBeTruthy();

    await page.waitForTimeout(5000);

    //5) select option from dropdown using looping
    for (let i = 0; i < allOptions.length; i++) {
        const optionValue = await allOptions[i].textContent();
        if (optionValue.trim() === 'India') {
            // option elements are not directly clickable; use selectOption on the <select>
            await page.locator('#country').selectOption({ label: optionValue.trim() });
            break;
        }
    }

    await page.waitForTimeout(5000);

});

