import React, { Component } from 'react';
import {
  PanResponder,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

const MIN_SWIPE_LENGTH = 5;
const MATCH_REGEX = '([0-9]*)([A-Z]?)';
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default class Box extends Component {

  get value() { return this.state.value; }
  get stringValue() { return this.value.toString(); }

  constructor(props) {
    super(props);
    this.state = { value : '1' };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: this.shouldSetCapture,
      onPanResponderRelease: this.responderEnd,
      onPanResponderTerminate: this.responderEnd
    });
  }

  shouldSetCapture = (event, gestureState) => {
    return this.isSwipe(gestureState);
  }

  responderEnd = (event, gestureState) => {
    let value = this.value;

    if (this.isSwipeUp(gestureState)) {
      value = this.swipeUpValue(value);
    } else if(this.isSwipeDown(gestureState)) {
      value = this.swipeDownValue(value);
    }

    this.setState({ value: value });
  }

  isSwipe(gestureState) {
    return Math.abs(gestureState.dx) > MIN_SWIPE_LENGTH  ||
      Math.abs(gestureState.dy) > MIN_SWIPE_LENGTH;
  }

  isSwipeUp(gestureState) {
    if (this.isSwipe(gestureState) && gestureState.dy < 0) return true;
    return false;
  }

  isSwipeDown(gestureState) {
    if (this.isSwipe(gestureState) && gestureState.dy > 0) return true;
    return false;
  }

  swipeUpValue(oldValue) {
    const matches = valueMatches(oldValue);
    let letter = letterAfterSwipe(matches[1], 1);
    let number = matches[0];

    if (letter === '') {
      number = numberAfterSwipe(matches[0], 1);
    }

    return formattedValue(number, letter);
  }

  swipeDownValue(oldValue) {
    const matches = valueMatches(oldValue);
    const letter = letterAfterSwipe(matches[1], -1);
    let number = matches[0];

    if (letter === '') {
      number = numberAfterSwipe(matches[0], -1);
    }

    return formattedValue(number, letter);
  }

  render() {
    return (
      <View
        style={styles.container}
        testID={this.props.testID}
        {...this._panResponder.panHandlers}
      >
        <Text style={styles.label}>
        {this.props.children}
        </Text>
        <TextInput
          testID={this.props.testID + 'TextInput'}
          style={styles.text}
          adjustsFontSizeToFit={true}
          value={this.stringValue}
          onChangeText={(text) => this.setState({value: text})}
        >
        </TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: 5,
    marginLeft: 5
  },

  label: {
    color: '#fff',
    padding: 5
  },

  text: {
    flex: 1,
    color: '#fff',
    textAlign: 'center',
    fontSize: 100
  }
});

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
  const matches = value.toString().toUpperCase().match(MATCH_REGEX).slice(1, 3);
  matches[0] = parseInt(matches[0]);
  return matches;
}

function formattedValue(number, letter) {
  return (number.toString() + letter).toUpperCase();
}

