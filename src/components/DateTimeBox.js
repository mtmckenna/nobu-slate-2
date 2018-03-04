import React, { Component } from 'react';
import Box from './Box';

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
    return (<Box
      testID='datetime'
      label='Date/Time'
      value={this.state.dateTime} />);
  }
}

function formattedDate(date) {
  return date.toString();
}

function updatedState() {
  return { dateTime: formattedDate(new Date()) };
}
