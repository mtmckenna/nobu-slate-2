import Orientation from 'react-native-orientation';
import React, { Component } from 'react';
//import { View } from 'react-native';

export default class AppScreen extends Component {
  componentDidMount() {
    Orientation.lockToLandscape();
  }

  /*render() {
    return (
    )
  }*/
}
