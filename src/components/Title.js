import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import EditableText from './EditableText';
import { BLACK } from '../colors';

export default function Title(props) {
  const field = 'title';
  return (
    <View style={styles.container} testID={field}>
      <EditableText onPress={props.onPress} field={field}>{props.children}</EditableText>
    </View>
  );
}

Title.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: BLACK,
    marginTop: 5,
    marginLeft: 5,
    padding: 5,
    minHeight: '10%'
  },
});
