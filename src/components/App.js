import React from 'react';

import AppScreen from './AppScreen';
import Slate from './Slate';
import EditBox from './EditBox';
import Beeper from '../beeper';
import {
  GREEN,
  RED,
  WHITE
} from '../colors';

const BEEP_TIME = 500;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.beeper = new Beeper();
    this.state = {
      backgroundColor: WHITE,
      countingDown: false,
      editing: null,
      slateProps: {
        title: 'Title',
        scene: '1',
        take: '1',
        audioFile: '001',
        audioChannelL: 'Lav',
        audioChannelR: 'Boom'
      }
    };
  }

  mark = () => {
    if (this.state.countingDown) return;
    this.setState({ countingDown: true });

    this.beeper.beep();
    this.setState(backgroundStyle(RED));

    setTimeout(() => this.setState(backgroundStyle(WHITE)), 1 * BEEP_TIME);

    setTimeout(() => {
      this.setState(backgroundStyle(GREEN));
      this.beeper.beepFinal();
    }, 2 * BEEP_TIME);

    setTimeout(() => {
      this.setState(backgroundStyle(WHITE));
      this.setState({ countingDown: false });
    }, 3 * BEEP_TIME);
  }

  edit = (field) => {
    this.setState({ editing: field });
  }

  updateValue = (field, value) => {
    const newState = Object.assign({}, this.state);
    newState.editing = false;
    newState.slateProps[field] = value.trim();
    this.setState(newState);
  }

  render() {
    let component = null;

    if (this.state.editing) {
      const value = this.state.slateProps[this.state.editing];
      component = (<EditBox
        field={this.state.editing}
        value={value}
        doneEditing={this.updateValue}
      />);
    } else {
      component = (<Slate
        backgroundColor={this.state.backgroundColor}
        edit={this.edit}
        onUpdate={this.updateValue}
        mark={this.mark}
        {...this.state.slateProps}
      />);
    }

    return <AppScreen>{component}</AppScreen>;
  }
}

function backgroundStyle(color) {
  return { backgroundColor: color };
}
