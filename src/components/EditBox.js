import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput
} from 'react-native';

export default class EditBox extends Component {
  render() {
    return <KeyboardAvoidingView behavior='padding'>
        <TextInput
          testID='editBox'
          autoFocus
          style={styles.container}
          value={this.props.value}
          onEndEditing={(e) => this.props.doneEditing(this.props.field, e.nativeEvent.text)}
        />
      </KeyboardAvoidingView>;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    color: '#fff',
    height: '100%',
    fontSize: 50
  }
});

