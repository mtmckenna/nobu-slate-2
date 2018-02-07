import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Box extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: 5,
    marginLeft: 5,
  },

  text: {
    color: '#fff',
    padding: 5
  }
});
