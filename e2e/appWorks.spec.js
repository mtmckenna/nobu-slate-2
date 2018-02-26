describe('When using the app', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('shows title', async () => {
    await expect(element(by.id('title'))).toBeVisible();
  });

  it('shows scene 1', async () => {
    await expect(element(by.id('sceneTextInput'))).toHaveValue('1');
  });

  it('swiping scene changes its value', async () => {
    await element(by.id('scene')).swipe('up');
    await expect(element(by.id('sceneTextInput'))).toHaveValue('2');
    await element(by.id('scene')).swipe('down');
    await expect(element(by.id('sceneTextInput'))).toHaveValue('1');
  });
})
