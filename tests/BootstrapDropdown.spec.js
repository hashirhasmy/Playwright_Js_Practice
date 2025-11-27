import { test, expect } from '@playwright/test';


test('Bootstrap Dropdown - example 1 - mcp', async ({ page }) => {
    // Navigate to the page
    await page.goto('https://www.leafground.com/select.xhtml');
    await page.waitForTimeout(2000);
    
    // Test 1: Select 2nd option (Selenium) from first dropdown
    const selectElement = await page.locator('select').first();
    await selectElement.selectOption('Selenium');
    console.log("Selected Selenium from first dropdown");
    await page.waitForTimeout(1000);
    
    // Verify Selenium is selected
    await expect(selectElement).toHaveValue('Selenium');
    await page.waitForTimeout(1000);
    
    // Test 2: Select Brazil from Country Dropdown
    // Wait for the country dropdown to be visible
    const countryDropdown = page.locator('h5:has-text("Choose your preferred country") + div');
    await countryDropdown.waitFor({ state: 'visible', timeout: 10000 });
    
    // Get the combobox element
    const countryCombobox = countryDropdown.locator('[role="combobox"]');
    
    // Click on country dropdown to open it
    await countryCombobox.click();
    await page.waitForTimeout(1000);
    
    // Get all options in the dropdown listbox
    const countryOptions = page.locator('role=listbox').first().locator('role=option');
    const optionsCount = await countryOptions.count();
    console.log("Total country options: " + optionsCount);
    
    // Verify options count (should include Select Country + 4 countries = 5)
    await expect(countryOptions).toHaveCount(5);
    
    // Select Brazil by label using getByRole
    await page.getByRole('option', { name: 'Brazil' }).click();
    await page.waitForTimeout(2000);
    
    // Verify Brazil is selected by checking the dropdown contains Brazil text
    const selectedValue = await countryCombobox.textContent();
    console.log("Selected country value: " + selectedValue);
    
    // Assert that Brazil was selected
    await expect(countryCombobox).toContainText('Brazil');
    
    await page.waitForTimeout(2000);
});



test('Bootstrap dropdown - example 2 - learn', async ({ page }) => {

    // Navigate to the page
    await page.goto('https://www.leafground.com/select.xhtml');
    await page.waitForTimeout(2000);

    //1) Count option in the dropdown
    await page.locator("//div[@id='j_idt87:country']").click();
    await page.waitForTimeout(2000);
    const options = page.locator("//ul[@id='j_idt87:country_items']/li");
    const optionCount = await options.count();
    console.log("Total options in country dropdown: " + optionCount);   
    await expect(options).toHaveCount(5);

    //2) select options from dropdown
    const allOptions = await page.$$("//ul[@id='j_idt87:country_items']/li")
    for (let i = 0; i < allOptions.length; i++) {
        const optionText = await allOptions[i].textContent();
        console.log("Selected option: " + optionText.trim());
        if (optionText.trim() === 'USA') {
            await options.nth(i).click();
            console.log("Selected option is selected: " + optionText.trim());
            break;
        }
    }

   


});

