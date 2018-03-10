import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

export default function DoubleBox(props) {
  return <View style={styles.container}>{props.children}</View>;
}

DoubleBox.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 2,
    flexBasis: 0,
    flexDirection: 'row'
  }
});
