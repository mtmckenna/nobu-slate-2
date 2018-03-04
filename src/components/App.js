import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import AppScreen from './AppScreen';
import Slate from './Slate';
import EditBox from './EditBox';
import Beeper from '../beeper';

const WHITE_BG = '#fff';
const RED_BG = '#cc0000';
const GREEN_BG = '#339933';
const BEEP_TIME = 500;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.beeper = new Beeper();
    this.state = {
      backgroundColor: WHITE_BG,
      countingDown: false,
      editing: null,
      slateProps: {
        title: 'Title',
      }
    };
  }

  mark = () => {
    if (this.state.countingDown) return;
    this.setState({ countingDown: true });

    this.beeper.beep();
    this.setState(backgroundStyle(RED_BG));

    setTimeout(() => this.setState(backgroundStyle(WHITE_BG)), 1 * BEEP_TIME);

    setTimeout(() => {
      this.setState(backgroundStyle(GREEN_BG))
      this.beeper.beepFinal();
    }, 2 * BEEP_TIME);

    setTimeout(() => {
      this.setState(backgroundStyle(WHITE_BG));
      this.setState({ countingDown: false });
    }, 3 * BEEP_TIME);
  }

  edit = (field) => {
    this.setState({ editing: field });
  }

  doneEditing = (field, value) => {
    this.setState({ editing: false });
    this.setState({ slateProps: { [field]: value } });
  }

  render() {
    let component = null;

    if (this.state.editing) {
      const value = this.state.slateProps[this.state.editing];
      component = <EditBox
        field={this.state.editing}
        value={value}
        doneEditing={this.doneEditing}
        />;
    } else {
      component = <Slate
        backgroundColor={this.state.backgroundColor}
        edit={this.edit}
        mark={this.mark}
        slateProps={this.state.slateProps}
        />;
    }

    return <AppScreen>{component}</AppScreen>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  }
});

function backgroundStyle(color) {
  return { backgroundColor: color };
}
