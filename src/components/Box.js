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
      <View style={styles.container} testID={this.props.testID}>
        <Text style={styles.label}>{this.props.label}</Text>
        <Text style={styles.text} adjustsFontSizeToFit>{this.props.value}</Text>
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

