import { test, expect } from '@playwright/test';


test.beforeAll(async () => {
    console.log('Before All Tests');
});

test.afterAll(async () => {
    console.log('After All Tests');
});

test.beforeEach(async () => {
    console.log('Before Each Test');
});

test.afterEach(async () => {
    console.log('After Each Test');
});


test.describe.skip('Grouping Tests ', () => {

    test('Test1', async ({ page }) => {  
        console.log('Test1 is starting');
    });

    test('Test2', async ({ page }) => {  
        console.log('Test2 is starting');
    });

});

test.describe('Grouping Tests 2', () => {

    test('Test3', async ({ page }) => {  
        console.log('Test3 is starting');
    });

    test('Test4', async ({ page }) => {  
        console.log('Test4 is starting');
    });

});