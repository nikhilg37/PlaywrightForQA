import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await test.step('Go to URL', async() =>{
    await page.goto('https://github.com/');
  })

  await test.step('Sign in link', async() =>{
    await page.getByRole('link', { name: 'Sign in' }).click();
  })
  
  await test.step('Enter credentials', async() =>{
    await page.getByRole('textbox', { name: 'Username or email address' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('wwww');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('wwww');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  })
  
  await test.step('Validate results', async() =>{
    await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  })
});