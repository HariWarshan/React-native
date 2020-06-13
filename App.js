import React from 'react';
import Main from './components/MainComponent';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux'
import {ConfigureStore} from './redux/configureStore'

const store = ConfigureStore();



import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

