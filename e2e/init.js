const detox = require('detox');
const config = require('../package.json').detox;

// https://github.com/wix/detox/blob/master/docs/Guide.Jest.md
// Set the default test timeout of 120s
jest.setTimeout(120000);

beforeAll(async () => {
  await detox.init(config);
});

afterAll(async () => {
  await detox.cleanup();
});
