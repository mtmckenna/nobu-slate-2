import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class Box extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]} testID={this.props.testID}>
        <Text style={styles.label}>{this.props.label}</Text>
        <View style={styles.textContainer}>
          {this.props.children}
        </View>
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

  textContainer: {
    flex: 1
  }
});

