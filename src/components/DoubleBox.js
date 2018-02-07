import React, { Component } from 'react';
import { Box } from './Box';
import { StyleSheet, Text, View } from 'react-native';

export default class DoubleBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 2,
    flexBasis: 0,
    flexDirection: 'row'
  },

  text: {
    color: '#fff'
  }
});
