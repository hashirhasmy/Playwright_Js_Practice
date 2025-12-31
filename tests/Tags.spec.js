import { test, expect } from '@playwright/test';

test('test1@sanity', async ({ page }) => {  
    console.log("This is a test1");
});

test('test2@regression', async ({ page }) => {  
    console.log("This is another test2");
});

test('test3@sanity@regression', async ({ page }) => {  
    console.log("This is yet another test3");
});

test('test4', async ({ page }) => {  
    console.log("This is a different test without tags test4");
});

test('test5@smoke', async ({ page }) => {  
    console.log("This is a smoke test5");
}); 