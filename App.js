import React from 'react';
import ViewBox from './ViewBox';
import AppScreen from './AppScreen';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <AppScreen>
        <View style={styles.container}>
          <ViewBox></ViewBox>
        </View>
      </AppScreen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
