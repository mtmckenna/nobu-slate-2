import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import PropTypes from 'prop-types';

import { BLACK, WHITE } from '../colors';

export default function Box(props) {
  return (
    <View style={styles.container} testID={props.testID}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.textContainer}>
        {props.children}
      </View>
    </View>
  );
}

Box.propTypes = {
  testID: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
    marginTop: 5,
    marginLeft: 5
  },

  label: {
    color: WHITE,
    padding: 5
  },

  textContainer: {
    flex: 1
  }
});

