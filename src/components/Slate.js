import React, { Component } from 'react';
import {
  PanResponder,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Box from './Box';
import DoubleBox from './DoubleBox';
import { isSwipeHorizontal } from '../swipe-functions';

export default class Slate extends Component {

  get backgroundStyle() {
    return { backgroundColor: this.props.backgroundColor };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: this.shouldCapture,
      onPanResponderRelease: this.responderEnd,
      onPanResponderTerminate: this.responderEnd
    });
  }

  shouldCapture = (event, gestureState) => {
    return isSwipeHorizontal(gestureState);
  }

  responderEnd = (event, gestureState) => {
    if (!isSwipeHorizontal(gestureState)) return;
    let value = this.value;
    this.props.mark();
  }

  render() {
    return (
      <View style={[styles.container, this.backgroundStyle]} {...this._panResponder.panHandlers}>
        <Text
          style={styles.titleTextInput}
          testID='titleText'
          onPress= {() => this.props.edit('title')}>
          {this.props.slateProps.title}
        </Text>
        <View style={styles.row}>
          <DoubleBox>
            <Box testID='scene'>Scene</Box>
            <Box>Take</Box>
          </DoubleBox>
          <Box>Date/Time</Box>
        </View>
        <View style={styles.row}>
          <DoubleBox>
            <Box>Audio File</Box>
          </DoubleBox>
          <Box>Channels</Box>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 5,
    paddingBottom: 5
  },

  row: {
    flex: 1,
    flexDirection: 'row'
  },

  titleTextInput: {
    backgroundColor: '#000',
    marginTop: 5,
    marginLeft: 5,
    color: '#fff',
    padding: 5
  }
});
