import Orientation from 'react-native-orientation';
import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

export default class AppScreen extends Component {

  componentDidMount() {
    Orientation.lockToLandscapeLeft();
  }

  render() {
    return (<View style={styles.container}>{this.props.children}</View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
