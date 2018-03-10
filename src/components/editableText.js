import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { WHITE, BLACK } from '../colors';

export default function EditableText(props) {
  return (
    <Text
      style={styles.text}
      tesstID={`${props.field}Text`}
      onPress={() => props.onPress(props.field)}
      adjustsFontSizeToFit
    >
      {props.children}
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
    fontSize: 30,
    flexGrow: 1
  },
});
