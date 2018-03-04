const MIN_VERTICAL_SWIPE_LENGTH = 5;
const MIN_HORIZONTAL_SWIPE_LENGTH = 15;

function isSwipe(gestureState) {
  return Math.abs(gestureState.dx) > MIN_VERTICAL_SWIPE_LENGTH  ||
    Math.abs(gestureState.dy) > MIN_HORIZONTAL_SWIPE_LENGTH;
}

function isSwipeUp(gestureState) {
  return (isSwipe(gestureState) && gestureState.dy < MIN_VERTICAL_SWIPE_LENGTH) ? true : false;
}

function isSwipeDown(gestureState) {
  return (isSwipe(gestureState) && gestureState.dy > MIN_VERTICAL_SWIPE_LENGTH) ? true : false;
}

function isSwipeHorizontal(gestureState) {
  return (isSwipe(gestureState) && Math.abs(gestureState.dx) > MIN_HORIZONTAL_SWIPE_LENGTH) ? true : false;
}

export {
  isSwipe,
  isSwipeHorizontal,
  isSwipeUp,
  isSwipeDown
};
