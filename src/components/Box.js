import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import PropTypes from 'prop-types';

import colorsType from '../types';

export default function Box(props) {
  return (
    <View
      style={
        [
          styles.container,
          { backgroundColor: props.colors.foregroundColor }
        ]
      }
      testID={props.testID}
    >
      <Text style={[styles.label, { color: props.colors.fontColor }]} adjustsFontSizeToFit numberOfLines={1}>{'\u00a0'} {props.label} {'\u00a0'}</Text>
      <View style={styles.textContainer}>
        {props.children}
      </View>
    </View>
  );
}

Box.propTypes = {
  testID: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  colors: colorsType.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    marginLeft: 5
  },

  label: {
    fontFamily: 'Helvetica Neue',
    padding: 5,
    fontSize: 1000,
    flexGrow: 0.15,
    flex: 1
  },

  textContainer: {
    flex: 1
  }
});

