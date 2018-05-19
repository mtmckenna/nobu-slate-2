import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import PropTypes from 'prop-types';

import Box from './Box';
import AudioChannel from './AudioChannel';

export default function AudioChannelsBox(props) {
  return (
    <Box testID="audioChannels" label="Audio Channels">
      <View style={styles.audioRow}>
        <AudioChannel field="audioChannelL" onPress={props.onPress}>L: {props.left}</AudioChannel>
      </View>
      <View style={styles.audioRow}>
        <AudioChannel field="audioChannelR" onPress={props.onPress}>R: {props.right}</AudioChannel>
      </View>
    </Box>
  );
}

AudioChannelsBox.propTypes = {
  onPress: PropTypes.func.isRequired,
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  audioRow: {
    flexDirection: 'row',
    flex: 1,
  }
});

