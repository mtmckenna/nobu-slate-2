const leftPad = require('left-pad');

const MIN_VERTICAL_SWIPE_LENGTH = 5;
const MIN_HORIZONTAL_SWIPE_LENGTH = 25;
const MATCH_REGEX = '([0-9]*)([A-Z]?)';
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function isSwipe(gestureState) {
  return Math.abs(gestureState.dx) > MIN_VERTICAL_SWIPE_LENGTH ||
    Math.abs(gestureState.dy) > MIN_HORIZONTAL_SWIPE_LENGTH;
}

function isSwipeUp(gestureState) {
  return !!((isSwipe(gestureState) && gestureState.dy < MIN_VERTICAL_SWIPE_LENGTH));
}

function isSwipeDown(gestureState) {
  return !!((isSwipe(gestureState) && gestureState.dy > MIN_VERTICAL_SWIPE_LENGTH));
}

function isSwipeHorizontal(gestureState) {
  return !!((isSwipe(gestureState) && Math.abs(gestureState.dx) > MIN_HORIZONTAL_SWIPE_LENGTH));
}

function swipeUpValue(oldValue) {
  return swipeValue(oldValue, 1);
}

function swipeDownValue(oldValue) {
  return swipeValue(oldValue, -1);
}

function swipeValue(oldValue, direction) {
  const matches = valueMatches(oldValue);
  const letter = letterAfterSwipe(matches[1], direction);
  const number = letter === '' ? numberAfterSwipe(matches[0], direction) : matches[0];
  const numberLength = matches[2];

  return formattedValue(number, letter, numberLength);
}

function numberAfterSwipe(oldNumber, direction) {
  let number = oldNumber;

  if (direction === 1) {
    number = oldNumber + 1;
  } else if (direction === -1) {
    number = Math.max(oldNumber - 1, 1);
  }

  return number;
}

function letterAfterSwipe(oldLetter, direction) {
  if (!oldLetter) return '';

  let letter = oldLetter;

  if (direction === 1) {
    letter = nextLetter(oldLetter);
  } else if (direction === -1) {
    letter = previousLetter(oldLetter);
  }

  return letter;
}

function nextLetter(oldLetter) {
  const letterIndex = ALPHABET.indexOf(oldLetter);
  return (letterIndex === ALPHABET.length - 1) ? oldLetter : ALPHABET[letterIndex + 1];
}

function previousLetter(oldLetter) {
  const letterIndex = ALPHABET.indexOf(oldLetter);
  return (letterIndex === 0) ? oldLetter : ALPHABET[letterIndex - 1];
}

function valueMatches(value) {
  if (!value) return [1, ''];

  const matches = value.toString().toUpperCase().match(MATCH_REGEX).slice(1, 3);
  matches[2] = matches[0].length;
  matches[0] = parseInt(matches[0], 10);
  return matches;
}

function formattedValue(number, letter, numberLength) {
  const paddedNumber = leftPad(number.toString(), numberLength, '0');
  return (paddedNumber + letter).toUpperCase();
}

export {
  isSwipe,
  isSwipeHorizontal,
  isSwipeUp,
  isSwipeDown,
  swipeUpValue,
  swipeDownValue
};
