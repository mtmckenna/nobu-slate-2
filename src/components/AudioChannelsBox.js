import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import PropTypes from 'prop-types';

import Box from './Box';
import AudioChannel from './AudioChannel';
import colorsType from '../types';

export default function AudioChannelsBox(props) {
  return (
    <Box testID="audioChannels" label="Audio Channels" {...props}>
      <View style={styles.audioRow}>
        <AudioChannel field="audioChannelL" onPress={props.onPress} colors={props.colors}>L: {props.left}</AudioChannel>
      </View>
      <View style={styles.audioRow}>
        <AudioChannel field="audioChannelR" onPress={props.onPress} colors={props.colors}>R: {props.right}</AudioChannel>
      </View>
    </Box>
  );
}

AudioChannelsBox.propTypes = {
  onPress: PropTypes.func.isRequired,
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
  colors: colorsType.isRequired
};

const styles = StyleSheet.create({
  audioRow: {
    flexDirection: 'row',
    flex: 1,
  }
});

