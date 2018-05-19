import React from 'react';

import AppScreen from './AppScreen';
import Slate from './Slate';
import EditBox from './EditBox';
import Beeper from '../beeper';
import { saveSlateProps, loadSlateProps } from '../slate-storage';
import {
  BLACK,
  GREEN,
  RED,
  WHITE
} from '../colors';

const MARK_GREEN = {
  backgroundColor: BLACK,
  foregroundColor: GREEN,
  fontColor: BLACK
};

const MARK_RED = {
  backgroundColor: BLACK,
  foregroundColor: RED,
  fontColor: WHITE
};

const MARK_WHITE = {
  backgroundColor: WHITE,
  foregroundColor: BLACK,
  fontColor: WHITE
};

const BEEP_TIME = 500;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.beeper = new Beeper();
    this.state = {
      colors: MARK_WHITE,
      countingDown: false,
      editing: null,
      slateProps: {
        title: '',
        scene: '',
        take: '',
        audioFile: '',
        audioChannelL: '',
        audioChannelR: ''
      }
    };
  }

  async componentDidMount() {
    const slateProps = await loadSlateProps();
    const newState = Object.assign({}, this.state);
    newState.slateProps = slateProps;
    this.setState(newState);
  }

  mark = () => {
    if (this.state.countingDown) return;
    this.setState({ countingDown: true });

    this.beeper.beep();
    this.setState({ colors: MARK_RED });

    setTimeout(() => this.setState({ colors: MARK_WHITE }), 1 * BEEP_TIME);

    setTimeout(() => {
      this.setState({ colors: MARK_GREEN });
      this.beeper.beepFinal();
    }, 2 * BEEP_TIME);

    setTimeout(() => {
      this.setState({ colors: MARK_WHITE });
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
    this.setState(newState, () => saveSlateProps(newState.slateProps));
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
        colors={this.state.colors}
        edit={this.edit}
        onUpdate={this.updateValue}
        mark={this.mark}
        {...this.state.slateProps}
      />);
    }

    return <AppScreen>{component}</AppScreen>;
  }
}

