/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import loginPage from './login';
import homePage from './homepage';
import wishlist from './wishlist';
import settings from './settings';
import testCarou from './mainFunction';
import navigationScreen from './navigation';
import stackNav from './stackNavigator';
//AppRegistry.registerComponent(appName, () => homePage);
//AppRegistry.registerComponent(appName, () => loginPage);
//AppRegistry.registerComponent(appName, () => wishlist);
//AppRegistry.registerComponent(appName, () => settings);
//AppRegistry.registerComponent(appName, () => testCarou);
//AppRegistry.registerComponent(appName, () => navigationScreen);
AppRegistry.registerComponent(appName, () => stackNav);




