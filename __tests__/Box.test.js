import React from 'react';
import renderer from 'react-test-renderer';

import Box from '../src/components/Box';

it('renders without crashing', () => {
  const rendered = renderer.create(<Box />).toJSON();
  expect(rendered).toBeTruthy();
});

describe('when swiping', function() {
  it('correctly increases and decreases values ending with numbers', function() {
    let box = new Box();
    expect(box.swipeUpValue(1)).toEqual(2);
    expect(box.swipeDownValue(2)).toEqual(1);
    expect(box.swipeDownValue(1)).toEqual(1);
  });
});
