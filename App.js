import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Home} from './components/screens';
import { Provider } from 'react-redux'; 
import store from './components/State/store';

export default function App() {

  return(
    <Provider store={store}>
      <Home/>
    </Provider>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
