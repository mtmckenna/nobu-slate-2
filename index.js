import { Client } from 'bugsnag-react-native';
import { AppRegistry } from 'react-native';
import App from './src/components/App';

const bugsnag = new Client();

AppRegistry.registerComponent('nobuslate', () => App);
