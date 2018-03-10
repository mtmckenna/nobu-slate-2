import React, { Component } from 'react';
import {
  PanResponder,
  StyleSheet,
  View
} from 'react-native';
import PropTypes from 'prop-types';

import SceneBox from './SceneBox';
import TakeBox from './TakeBox';
import AudioFileBox from './AudioFileBox';
import AudioChannelsBox from './AudioChannelsBox';
import DateTimeBox from './DateTimeBox';
import Title from './Title';
import DoubleBox from './DoubleBox';
import { isSwipeHorizontal } from '../swipe-functions';

export default class Slate extends Component {
  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: this.shouldCapture,
      onPanResponderRelease: this.responderEnd,
      onPanResponderTerminate: this.responderEnd
    });
  }

  get backgroundStyle() {
    return { backgroundColor: this.props.backgroundColor };
  }

  shouldCapture = (event, gestureState) => isSwipeHorizontal(gestureState)

  responderEnd = (event, gestureState) => {
    if (!isSwipeHorizontal(gestureState)) return;
    this.props.mark();
  }

  render() {
    return (
      <View style={[styles.container, this.backgroundStyle]} {...this._panResponder.panHandlers}>
        <Title onPress={this.props.edit}>{this.props.title}</Title>
        <View style={styles.row}>
          <DoubleBox>
            <SceneBox
              value={this.props.scene}
              edit={this.props.edit}
              onSwipe={this.props.onUpdate}
            />
            <TakeBox
              value={this.props.take}
              edit={this.props.edit}
              onSwipe={this.props.onUpdate}
            />
          </DoubleBox>
          <DateTimeBox />
        </View>
        <View style={styles.shortRow}>
          <DoubleBox>
            <AudioFileBox
              value={this.props.audioFile}
              edit={this.props.edit}
              onSwipe={this.props.onUpdate}
            />
          </DoubleBox>
          <AudioChannelsBox
            onPress={this.props.edit}
            left={this.props.audioChannelL}
            right={this.props.audioChannelR}
          />
        </View>
      </View>
    );
  }
}

Slate.propTypes = {
  mark: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  scene: PropTypes.string.isRequired,
  take: PropTypes.string.isRequired,
  audioFile: PropTypes.string.isRequired,
  audioChannelL: PropTypes.string.isRequired,
  audioChannelR: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 5,
    paddingBottom: 5
  },

  row: {
    flex: 2,
    flexDirection: 'row'
  },

  shortRow: {
    flex: 1,
    flexDirection: 'row'
  }
});
