import React from 'react';
import { AppRegistry, View,Text } from 'react-native';
import Header from './src/components/Header';
import Weather from './src/components/Weather';

const App = () => {
    return (
      <View>
        <Header headerText={'Weatharia'}/>
        <Weather />
      </View>
    );
};

AppRegistry.registerComponent('weatheria', () => App);
