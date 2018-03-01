const MIN_SWIPE_LENGTH = 6;

function isSwipe(gestureState) {
  return Math.abs(gestureState.dx) > MIN_SWIPE_LENGTH  ||
    Math.abs(gestureState.dy) > MIN_SWIPE_LENGTH;
}

function isSwipeUp(gestureState) {
  return (isSwipe(gestureState) && gestureState.dy < MIN_SWIPE_LENGTH) ? true : false;
}

function isSwipeDown(gestureState) {
  return (isSwipe(gestureState) && gestureState.dy > MIN_SWIPE_LENGTH) ? true : false;
}

function isSwipeHorizontal(gestureState) {
  return (isSwipe(gestureState) && Math.abs(gestureState.dx) > MIN_SWIPE_LENGTH) ? true : false;
}

export {
  isSwipe,
  isSwipeHorizontal,
  isSwipeUp,
  isSwipeDown
};
