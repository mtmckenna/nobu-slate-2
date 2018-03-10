import { swipeUpValue, swipeDownValue } from '../src/swipe-functions';

it('correctly increases and decreases values ending with numbers', function() {
  expect(swipeUpValue('1')).toEqual('2');
  expect(swipeDownValue('2')).toEqual('1');
  expect(swipeDownValue('1')).toEqual('1');
  expect(swipeUpValue('1a')).toEqual('1B');
  expect(swipeDownValue('12b')).toEqual('12A');
  expect(swipeUpValue('1Z')).toEqual('1Z');
  expect(swipeDownValue('1a')).toEqual('1A');
});
