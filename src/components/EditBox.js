import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput
} from 'react-native';

import { BLACK, WHITE } from '../colors';

export default class EditBox extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }

  render() {
    const testID = 'editBox';
    const behavior = 'padding';
    return (
      <KeyboardAvoidingView behavior={behavior}>
        <TextInput
          testID={testID}
          autoFocus
          style={styles.container}
          value={this.state.value}
          onChangeText={text => this.setState({ value: text })}
          onEndEditing={e => this.props.doneEditing(this.props.field, e.nativeEvent.text)}
        />
      </KeyboardAvoidingView>
    );
  }
}

EditBox.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  doneEditing: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: BLACK,
    color: WHITE,
    height: '100%',
    fontSize: 50
  }
});

