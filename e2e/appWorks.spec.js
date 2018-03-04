describe('When using the app', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('shows title', async () => {
    await expect(element(by.id('titleText'))).toBeVisible();
  });

  it('can change the title', async() => {
    await expect(element(by.id('scene'))).toBeVisible();
    await expect(element(by.id('titleText'))).toHaveText('Title');
    await element(by.id('titleText')).tap();
    await expect(element(by.id('scene'))).toBeNotVisible(); // Want only the title box to be visible
    await element(by.id('editBox')).clearText();
    await element(by.id('editBox')).typeText('Handcuff Hands\n');
    await expect(element(by.id('titleText'))).toHaveText('Handcuff Hands');
  });

  it('shows scene 1', async () => {
    await expect(element(by.id('scene'))).toHaveText('1');
  });

  describe('when swiping up/down on the scene', () => {
    it('swiping scene changes its value', async () => {
      await element(by.id('scene')).swipe('up');
      await expect(element(by.id('sceneTextInput'))).toHaveText('2');
      await element(by.id('scene')).swipe('down');
      await expect(element(by.id('sceneTextInput'))).toHaveText('1');
    });
  });

  // Once https://github.com/wix/detox/issues/572 is fixed, add in a change scene/take with keyboard
})
