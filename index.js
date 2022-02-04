/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import UXCam from './src/UXCam';
import ForageScreen from './src/Forage';

AppRegistry.registerComponent(appName, () => ForageScreen);
