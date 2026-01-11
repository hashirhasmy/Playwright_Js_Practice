const { test, expect } = require('@playwright/test');

test('Handle API Testing', async ({ request }) => {

    //GET Request
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody).toHaveProperty('id', 1);
    expect(responseBody).toHaveProperty('userId', 1);
    expect(responseBody).toHaveProperty('title');
    expect(responseBody).toHaveProperty('body');
    console.log(`Title: ${responseBody.title}`);
});

test('Handle POST Request', async ({ request }) => {

    const postData = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    };
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: postData,
    });
    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody).toHaveProperty('id');
    expect(responseBody).toMatchObject(postData);
});

test('Handle PUT Request', async ({ request }) => {
    const putData = {
        id: 1,
        title: 'updated title',
        body: 'updated body',
        userId: 1,
    };
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
        data: putData,
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody).toMatchObject(putData);
});

test('Handle DELETE Request', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status()).toBe(200);
    console.log('Delete Response Status:', response.status());
});