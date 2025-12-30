//reference : https://playwright.dev/docs/input#upload-files

import { test, expect } from '@playwright/test';
import { describe } from 'node:test';


describe('File Upload Tests', () => {

    test('Single File Upload', async ({ page }) => {  

        await page.goto('https://the-internet.herokuapp.com/upload');

        // Upload file
        await page.locator('input#file-upload').setInputFiles('tests/resources/sampleFile.png');
        //await page.setInputFiles('input#file-upload', 'tests/resources/sampleFile.txt');

        await page.waitForTimeout(5000);

        await page.click('input#file-submit');
        await page.waitForTimeout(5000);
        // Assertion
        const uploadedFile = await page.locator('div#uploaded-files').textContent();
        expect(uploadedFile).toContain('sampleFile.png');

    });

    test('Multiple Files Upload', async ({ page }) => {  

        await page.goto('https://blueimp.github.io/jQuery-File-Upload/');

        // Upload multiple files
        await page.locator('input[type="file"]').setInputFiles([
            'tests/resources/sampleFile.png',
            'tests/resources/sampleFile1.png'
        ]);

        await page.waitForTimeout(2000);

        // Assertion
        const uploadedFiles = await page.locator('//tbody/tr/td[2]').allTextContents();

        await page.waitForTimeout(2000);

        expect(uploadedFiles[0]).toContain('sampleFile.png');
        expect(uploadedFiles[1]).toContain('sampleFile1.png');

        await page.waitForTimeout(2000);


        //For removing uploaded files from the list  - but this not worked in this application
        await page.locator('input[type="file"]').setInputFiles([]);

        await page.waitForTimeout(4000);
    });

});



