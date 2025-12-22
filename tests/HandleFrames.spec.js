import { test, expect } from '@playwright/test';

test('Handle Frames', async ({ page }) => {       
    // Navigate to the page
    await page.goto('https://ui.vision/demo/webtest/frames/');
    await page.waitForTimeout(2000);

    //total frames
    const totalFrames = page.frames();
    console.log('Total Frames: ' + totalFrames.length);

    //aproach 1: by name or url
    //let pageFrame1 = page.frame('frame1');  if name is available for locator
    let pageFramebyUrl = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await pageFramebyUrl.locator("//input[@name='mytext1']").fill('Mohamed Hashir');
    await page.waitForTimeout(5000);


    //aproach 2: by framelocator
    let frameLocator2 = page.frameLocator("frame[src='frame_2.html']");
    await frameLocator2.fill("//input[@name='mytext2']", 'Hashir Mohamed');
    await page.waitForTimeout(5000);

});
