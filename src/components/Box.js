import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

export default class Box extends Component {

  get value() { return this.state.value || 1; }

  constructor(props) {
    super(props);
    this.state = { value : 1 };
  }

  onSwipeUp() {
    const nextVal = this.value + 1;
    this.setState({ value: nextVal });
  }

  onSwipeDown() {
    const prevVal = this.value - 1;
    this.setState({ value: prevVal });
  }

  render() {
    return (
      <GestureRecognizer style={styles.container}
      onSwipeUp={(state) => this.onSwipeUp()}
      onSwipeDown={(state) => this.onSwipeDown()}>
        <Text style={styles.label}>
        {this.props.children}
        </Text>
        <Text style={styles.text} adjustsFontSizeToFit={true}>
          {this.state.value}
        </Text>
      </GestureRecognizer>
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
