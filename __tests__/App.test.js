import React from 'react';
import renderer from 'react-test-renderer';

import App from '../src/components/App';

jest.mock('react-native-orientation', () => {
  return { lockToLandscapeLeft: () => {} };
});

jest.mock('react-native-sound', () => {
  let mock = () => {};
  mock.setCategory = () => {};
  return mock;
});


it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

