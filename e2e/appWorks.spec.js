describe('When using the app', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('shows title', async () => {
    await expect(element(by.id('titleTextInput'))).toBeVisible();
  });

  it('can change the title', async() => {
    await expect(element(by.id('titleTextInput'))).toHaveText('Title');
    await element(by.id('titleTextInput')).tap();
    await element(by.id('titleTextInput')).clearText();
    await element(by.id('titleTextInput')).typeText('Handcuff Hands\n');
    await expect(element(by.id('titleTextInput'))).toHaveText('Handcuff Hands');
  });

  it('shows scene 1', async () => {
    await expect(element(by.id('sceneTextInput'))).toHaveText('1');
  });

  describe('when swiping up/down on the scene', () => {
    it('swiping scene changes its value', async () => {
      await element(by.id('scene')).swipe('up');
      await expect(element(by.id('sceneTextInput'))).toHaveText('2');
      await element(by.id('scene')).swipe('down');
      await expect(element(by.id('sceneTextInput'))).toHaveText('1');
    });
  });
})
