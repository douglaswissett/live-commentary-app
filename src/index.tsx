import React from 'react';
import { Platform, UIManager } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './scenes/Home';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App: React.FunctionComponent = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
