import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function editableText(field) {
  return class extends Component {
    render() {
      return (
        <Text
        style={[styles.text, this.props.style]}
        tesstID={field + 'Text'}
        onPress={() => this.props.onPress(field)}
        adjustsFontSizeToFit
        >
          {this.props.children}
        </Text>
      );
    }
  };
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: '#000',
    color: '#fff',
    fontSize: 30,
    flexGrow: 1
  },
});
