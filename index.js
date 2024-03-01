/**
 * @format
 */

import dayjs from 'dayjs';
import 'dayjs/locale/es-mx';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { App } from './src/app';

dayjs.locale('es-mx');

AppRegistry.registerComponent(appName, () => App);
