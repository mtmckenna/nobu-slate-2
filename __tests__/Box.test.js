import React from 'react';
import renderer from 'react-test-renderer';

import Box from '../src/components/Box';

it('renders without crashing', () => {
  const rendered = renderer.create(<Box testID='testBox' label='testLabel'>Cats</Box>).toJSON();
  expect(rendered).toBeTruthy();
});
