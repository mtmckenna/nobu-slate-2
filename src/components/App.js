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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title : 'Title' };
  }

  render() {
    return (
      <AppScreen>
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
