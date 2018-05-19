import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import EditableText from './EditableText';
import colorsType from '../types';

export default function AudioChannel(props) {
  return (
    <View style={styles.container}>
      <EditableText
        onPress={props.onPress}
        field={props.field}
        adjustsFontSizeToFit
        numberOfLines={1}
        colors={props.colors}
      >
        {props.children}
      </EditableText>
    </View>
  );
}

AudioChannel.propTypes = {
  onPress: PropTypes.func.isRequired,
  field: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  colors: colorsType.isRequired
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1
  }
});

