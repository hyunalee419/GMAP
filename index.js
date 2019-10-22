import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// AppRegistry 에 root Component 를 등록하여 ReactNative 에게 알려준다.
AppRegistry.registerComponent(appName, () => App);
