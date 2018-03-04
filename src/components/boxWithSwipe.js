import React, { Component } from 'react';
import { PanResponder, StyleSheet, View } from 'react-native';
import Box from './Box';

import {
  isSwipe,
  isSwipeUp,
  isSwipeDown,
  isSwipeHorizontal
} from '../swipe-functions';

const MATCH_REGEX = '([0-9]*)([A-Z]?)';
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function boxWithSwipe(field) {
  return class extends Component {
    componentWillMount() {
      this._panResponder = PanResponder.create({
        onStartShouldSetPanResponderCapture: () => true,
        onPanResponderRelease: this.responderEnd,
      });
    }

    responderEnd = (event, gestureState) => {
      let value = this.props.value;

      if (isSwipeUp(gestureState)) {
        value = this.swipeUpValue(value);
      } else if(isSwipeDown(gestureState)) {
        value = this.swipeDownValue(value);
      } else if(!isSwipeHorizontal(gestureState)){
        this.props.edit(field);
      }

      if (value != this.props.value) this.props.onSwipe(field, value);
    }

    swipeUpValue(oldValue) {
      return swipeValue(oldValue, 1);
    }

    swipeDownValue(oldValue) {
      return swipeValue(oldValue, -1);
    }

    render() {
      return (
        <View style={styles.container} {...this._panResponder.panHandlers}>
          <Box
            testID={field}
            label={stringWithFirstLetterCapitalized(field)}
            value={this.props.value}
            {...this.props}
            />
        </View>
      );
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

function swipeValue(oldValue, direction) {
  const matches = valueMatches(oldValue);
  const letter = letterAfterSwipe(matches[1], direction);
  const number = letter === '' ? numberAfterSwipe(matches[0], direction) : matches[0];

  return formattedValue(number, letter);
}

function numberAfterSwipe(oldNumber, direction) {
  let number = oldNumber;

  if (direction === 1) {
    number = oldNumber + 1;
  } else if (direction === -1) {
    number = Math.max(oldNumber - 1, 1)
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
  matches[0] = parseInt(matches[0]);
  return matches;
}

function formattedValue(number, letter) {
  return (number.toString() + letter).toUpperCase();
}

function stringWithFirstLetterCapitalized(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
