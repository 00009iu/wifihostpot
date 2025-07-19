describe('Login Flow', () => {
  it('should login successfully', async () => {
    await device.launchApp();
    await element(by.id('emailInput')).typeText('test@example.com');
    await element(by.id('passwordInput')).typeText('password123');
    await element(by.id('loginButton')).tap();
    await expect(element(by.id('homeScreen'))).toBeVisible();
  });
});