import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class ViewBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello World!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },

  text: {
    color: '#fff'
  }
});
