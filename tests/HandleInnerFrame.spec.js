import { test, expect } from '@playwright/test';

test('Handle Inner Frame', async ({ page }) => {   

    // Navigate to the page
    await page.goto('https://ui.vision/demo/webtest/frames/');
    await page.waitForTimeout(2000);

    const frame3 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'});
    await frame3.fill("//input[@name='mytext3']", 'Frame 3 Hashir');

    //inner frame
    const innerFrame = await frame3.childFrames();
    console.log('Inner Frame count:', innerFrame.length);
    await innerFrame[0].locator("(//*[@class='AB7Lab Id5V1'])[1]").check();
    await page.waitForTimeout(5000);
});