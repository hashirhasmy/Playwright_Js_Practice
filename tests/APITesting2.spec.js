const { test, expect } = require('@playwright/test');

let userID;

test('Handle API Testing', async ({ request }) => {

    //GET Request
    const response = await request.get('https://reqres.in/api/users/?page=2');
    const responseBody = await response.json();
    console.log(responseBody);
    //expect(response.status()).toBe(200);
});

test('Handle POST Request', async ({ request }) => {
    const postData = {
        name: 'morpheus',
        job: 'leader',
    };
    const response = await request.post('https://reqres.in/api/users', {
        data: postData,
        headers: { 'Content-Type': 'application/json' , 'Accept': 'application/json' }

    });
    const responseBody = await response.json();
    console.log(responseBody);
    //expect(response.status()).toBe(201);
    userID = responseBody.id
});

test('Handle PUT Request', async ({ request }) => {
    const putData = {
        name: 'morpheus',
        job: 'zion resident',
    };
    const response = await request.put('https://reqres.in/api/users/' + userID, {
        data: putData,
        headers: { 'Content-Type': 'application/json' , 'Accept': 'application/json' }
    });
    const responseBody = await response.json();
    console.log(responseBody);
     //expect(response.status()).toBe(200);
});

test('Handle DELETE Request', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/' + userID);
    //expect(response.status()).toBe(204);
    console.log('Delete Response Status:', response.status());
});