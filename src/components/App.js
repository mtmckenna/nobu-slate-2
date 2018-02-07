import React from 'react';
import Box from './Box';
import DoubleBox from './DoubleBox';
import AppScreen from './AppScreen';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <AppScreen>
        <View style={styles.container}>
          <Box>Title</Box>
        </View>
        <View style={styles.container}>
          <DoubleBox>
            <Box>Scene</Box>
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
});
