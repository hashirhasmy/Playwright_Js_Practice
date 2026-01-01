import { test, expect } from '@playwright/test';

//only()
// test.only('test1', async ({ page }) => { 
//     console.log("Running test1");
// });

//skip()
// test.skip('test2', async ({ page }) => { 
//     console.log("Running test2");
// });


// test('test3', async ({ page, browserName }) => { 
//     console.log("Running test3");
//     if (browserName === 'firefox') {
//         console.log("This test is running on Firefox");
//         test.skip();
//     }
// });

//Fixme()
// test('test4', async ({ page }) => { 
//     test.fixme();
//     console.log("Running test4");
// });


//Fail()
// test('test5', async ({ page }) => { 
//     test.fail();  //expected to fail
//     console.log("Running test5");
//     expect(1).toBe(2); //if both expe & actual is failed then test pass
// });

// test('test6', async ({ page, browserName }) => { 
//     console.log("Running test6");
//     if (browserName === 'chromium') {
//         console.log("This test is expected to fail on Chromium");
//         test.fail();
//     }
// });

//slow()
test('test7', async ({ page, browserName }) => { 
    test.slow();  //this will give extra time to complete the test  | Playwright.config timeout = (timeout * 3)
    await page.goto('https://www.demoblaze.com/index.html');
    console.log("Running test7");
});