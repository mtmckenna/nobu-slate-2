import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import editableText from './editableText';

export default function audioChannelWithName(channelName) {
  return class AudioChannel extends Component {
    render() {
      const AudioChannelText = editableText(channelName);
      return (
        <View style={styles.container}>
          <AudioChannelText
            onPress={this.props.onPress}
            style={styles.text}
            adjustsFontSizeToFit>
              {this.props.children}
          </AudioChannelText>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: 5,
    flex: 1
  },

  text: {
    fontSize: 30
  }
});

