import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Box from './Box';
const leftPad = require('left-pad');

const INTERVAL_TIME = 1000;

export default class DateTimeBox extends Component {
  constructor(props) {
    super(props);
    this.state = updatedState();
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState(updatedState()));
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Box testID='dateTime' label='Date/Time'>
        <View style={styles.textContainer}>
          <Text style={styles.text} adjustsFontSizeToFit>{formattedDate(this.state.date)}</Text>
          <Text style={styles.text} adjustsFontSizeToFit>{formattedTime(this.state.date)}</Text>
        </View>
      </Box>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1
  },

  text: {
    flex: 1,
    color: '#fff',
    textAlign: 'left',
    textAlignVertical:'center',
    fontSize: 30,
    padding: 5
  }
});


function formattedDate(date) {
  const day = leftPad(date.getDate(), 2, '0');
  const month = leftPad(date.getMonth() + 1, 2, '0');
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
}

function formattedTime(date) {
  const hours = leftPad(date.getHours(), 2, '0');
  const minutes = leftPad(date.getMinutes(), 2, '0');
  const seconds = leftPad(date.getSeconds(), 2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function updatedState() {
  return { date: new Date() };
}

