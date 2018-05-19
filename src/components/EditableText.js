import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { WHITE, BLACK } from '../colors';

export default function EditableText(props) {
  return (
    <Text
      style={styles.text}
      testID={`${props.field}Text`}
      onPress={() => props.onPress(props.field)}
      adjustsFontSizeToFit
      numberOfLines={1}
    >
      {'\u00a0'} {props.children} {'\u00a0'}
    </Text>
  );
}

EditableText.propTypes = {
  field: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: BLACK,
    color: WHITE,
    fontSize: 1000,
    fontFamily: 'Helvetica Neue',
    flex: 1
  },
});
