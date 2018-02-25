import React from 'react';
import renderer from 'react-test-renderer';

import App from '../src/components/App';

jest.mock('react-native-orientation', () => {
  return { lockToLandscapeLeft: () => {} };
});

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

