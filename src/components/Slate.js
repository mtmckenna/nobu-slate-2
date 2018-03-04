import React, { Component } from 'react';
import {
  PanResponder,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SceneBox from './SceneBox';
import TakeBox from './TakeBox';
import DateTimeBox from './DateTimeBox';
import Box from './Box';
import DoubleBox from './DoubleBox';
import { isSwipeHorizontal } from '../swipe-functions';

export default class Slate extends Component {
  get backgroundStyle() {
    return { backgroundColor: this.props.backgroundColor };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: this.shouldCapture,
      onPanResponderRelease: this.responderEnd,
      onPanResponderTerminate: this.responderEnd
    });
  }

  shouldCapture = (event, gestureState) => {
    return isSwipeHorizontal(gestureState);
  }

  responderEnd = (event, gestureState) => {
    if (!isSwipeHorizontal(gestureState)) return;
    let value = this.value;
    this.props.mark();
  }

  render() {
    return (
      <View style={[styles.container, this.backgroundStyle]} {...this._panResponder.panHandlers}>
        <Text
          style={styles.titleTextInput}
          testID='titleText'
          onPress={() => this.props.edit('title')}>
          {this.props.title}
        </Text>
        <View style={styles.row}>
          <DoubleBox>
            <SceneBox value={this.props.scene} edit={this.props.edit} onSwipe={this.props.onUpdate} />
            <TakeBox value={this.props.take} edit={this.props.edit} onSwipe={this.props.onUpdate} />
          </DoubleBox>
          <DateTimeBox />
        </View>
        <View style={styles.row}>
          <DoubleBox>
            <Box>Audio File</Box>
          </DoubleBox>
          <Box>Channels</Box>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 5,
    paddingBottom: 5
  },

  row: {
    flex: 1,
    flexDirection: 'row'
  },

  titleTextInput: {
    backgroundColor: '#000',
    marginTop: 5,
    marginLeft: 5,
    color: '#fff',
    padding: 5
  }
});
