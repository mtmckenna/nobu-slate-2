import React from 'react';
import renderer from 'react-test-renderer';

import Box from '../src/components/Box';

import { WHITE } from '../src/colors';

const colors = { backgroundColor: WHITE, foregroundColor: WHITE, fontColor: WHITE };

it('renders without crashing', () => {
  const rendered = renderer.create(<Box testID='testBox' label='testLabel' colors={colors}>Cats</Box>).toJSON();
  expect(rendered).toBeTruthy();
});
