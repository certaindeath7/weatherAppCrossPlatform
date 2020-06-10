

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Search from './screens/Search';
import WeatherScreen from './screens/Home';

const App= () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#00aaff"/>
      <WeatherScreen/>

    </>
  );
};



export default App;
