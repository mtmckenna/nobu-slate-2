import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import editableText from './editableText';

export default class Title extends Component {
  render() {
    const TitleText = editableText('title');
    return (
      <View style={styles.container}>
        <TitleText onPress={this.props.onPress} style={styles.text}>{this.props.children}</TitleText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    marginTop: 5,
    marginLeft: 5,
    padding: 5,
    minHeight: '10%'
  },
});
