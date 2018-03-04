import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput
} from 'react-native';

export default class EditBox extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }

  render() {
    return <KeyboardAvoidingView behavior='padding'>
        <TextInput
          testID='editBox'
          autoFocus
          style={styles.container}
          value={this.state.value}
          onChangeText={(text) => this.setState({ value: text })}
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

