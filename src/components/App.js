import React from 'react';
import Box from './Box';
import DoubleBox from './DoubleBox';
import AppScreen from './AppScreen';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

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
      title: 'Title',
      backgroundColor: WHITE_BG,
      countingDown: false
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

  render() {
    return (
      <AppScreen
        backgroundColor={this.state.backgroundColor}
        mark={this.mark}
      >
        <TextInput
          style={styles.titleTextInput}
          testID='titleTextInput'
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
        />
        <View style={styles.container}>
          <DoubleBox>
            <Box testID='scene'>Scene</Box>
            <Box>Take</Box>
          </DoubleBox>
          <Box>Date/Time</Box>
        </View>
        <View style={styles.container}>
          <DoubleBox>
            <Box>Audio File</Box>
          </DoubleBox>
          <Box>Channels</Box>
        </View>
      </AppScreen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },

  titleTextInput: {
    backgroundColor: '#000',
    marginTop: 5,
    marginLeft: 5,
    color: '#fff',
    padding: 5,
  }
});

function backgroundStyle(color) {
  return { backgroundColor: color };
}
