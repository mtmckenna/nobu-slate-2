// The weird {'\u00a0'} thing is because of https://github.com/facebook/react-native/issues/16124
import React, { Component } from 'react';

import {
  PanResponder,
  StyleSheet,
  Text,
  View
} from 'react-native';
import PropTypes from 'prop-types';

import Box from './Box';
import {
  isSwipeUp,
  isSwipeDown,
  isSwipeHorizontal,
  swipeUpValue,
  swipeDownValue
} from '../swipe-functions';

import { WHITE } from '../colors';

export default function BoxWithSwipeWrapper(field) {
  const BoxWithSwipe = class extends Component {
    componentWillMount() {
      this._panResponder = PanResponder.create({
        onStartShouldSetPanResponderCapture: () => true,
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderRelease: this.responderEnd
      });
    }

    responderEnd = (event, gestureState) => {
      let { value } = this.props;

      if (isSwipeUp(gestureState)) {
        value = swipeUpValue(value);
      } else if (isSwipeDown(gestureState)) {
        value = swipeDownValue(value);
      } else if (!isSwipeHorizontal(gestureState)) {
        this.props.edit(field);
      }

      if (value !== this.props.value) this.props.onSwipe(field, value);
    }

    render() {
      return (
        <View style={styles.container} {...this._panResponder.panHandlers}>
          <Box testID={field} label={stringWithFirstLetterCapitalized(field)} {...this.props}>
            <Text testID={`${field}Text`} style={styles.text} adjustsFontSizeToFit numberOfLines={1}>{'\u00a0'} {this.props.value} {'\u00a0'}</Text>
          </Box>
        </View>
      );
    }
  };

  BoxWithSwipe.propTypes = {
    edit: PropTypes.func.isRequired,
    onSwipe: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  };

  return BoxWithSwipe;
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  text: {
    flex: 1,
    fontFamily: 'Helvetica Neue',
    color: WHITE,
    fontSize: 1000,
    textAlignVertical: 'center'
  }
});

function stringWithFirstLetterCapitalized(string) {
  const splitString = string.split(/(?=[A-Z])/).join(' ');
  return splitString.charAt(0).toUpperCase() + splitString.slice(1);
}
