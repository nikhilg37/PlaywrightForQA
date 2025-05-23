//Import playwright script module
import {test, expect} from '@playwright/test'

//Write a test
test('First playwright type script', async({page})=>{
    //Go to URL
    await page.goto('https://www.facebook.com/');
    //await page.getByRole('button', { name: 'Decline optional cookies' }).click();

    //Enter invalid login credentials
    await page.getByTestId('royal-email').fill('test@test.com');
    await page.getByTestId('royal-pass').click();
    await page.getByTestId('royal-pass').fill('12345');
    await page.getByTestId('royal-login-button').click();
    
    //Validate the results
    await expect(page.locator('#loginform')).toContainText('The password you’ve entered is incorrect. Forgot Password?');
})

