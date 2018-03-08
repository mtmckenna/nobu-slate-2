import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Box from './Box';
import AudioChannelLeft from './AudioChannelLeft';
import AudioChannelRight from './AudioChannelRight';

export default class AudioChannelsBox extends Component {
  render() {
    return (
      <Box testID='audioChannels' label='Audio Channels'>
          <View style={styles.audioRow}>
            <AudioChannelLeft onPress={this.props.onPress}>L: {this.props.left}</AudioChannelLeft>
          </View>
          <View style={styles.audioRow}>
            <AudioChannelRight onPress={this.props.onPress}>R: {this.props.right}</AudioChannelRight>
          </View>
      </Box>
    );
  }
}

const styles = StyleSheet.create({
  audioRow: {
    flexDirection: 'row',
    flex: 1,
    flexBasis: 'auto'
  }
});

