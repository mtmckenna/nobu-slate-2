import Orientation from 'react-native-orientation';
import React, { Component } from 'react';
import {
  PanResponder,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { isSwipeHorizontal } from '../swipe-functions';

export default class AppScreen extends Component {

  get backgroundStyle() {
    return { backgroundColor: this.props.backgroundColor };
  }

  UNSAFE_componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: this.shouldCapture,
      onPanResponderRelease: this.responderEnd,
      onPanResponderTerminate: this.responderEnd
    });
  }

  componentDidMount() {
    Orientation.lockToLandscapeLeft();
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
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 5,
    paddingBottom: 5
  }
});
