import React, { Component } from 'react';
import {
  PanResponder,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

const MIN_SWIPE_LENGTH = 5;

export default class Box extends Component {

  get value() { return this.state.value; }
  get stringValue() { return this.value.toString(); }

  constructor(props) {
    super(props);
    this.state = { value : 1 };
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
    if (this.isSwipeUp(gestureState)) {
      this.swipeUp();
    } else if(this.isSwipeDown(gestureState)) {
      this.swipeDown();
    }
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

  swipeUp() {
    const nextVal = parseInt(this.value) + 1;
    this.setState({ value: nextVal });
  }

  swipeDown() {
    const prevVal = Math.max(parseInt(this.value) - 1, 1);
    this.setState({ value: prevVal });
  }

  render() {
    return (
      <View style={styles.container} {...this._panResponder.panHandlers}>
        <Text style={styles.label}>
        {this.props.children}
        </Text>
        <TextInput
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
