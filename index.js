import React from 'react';
import { AppRegistry, View,Text } from 'react-native';
import Header from './src/components/Header';

const App = () => {
    return (
      <View>
        <Header headerText={'Weatharia'}/>
      </View>
    );
};

AppRegistry.registerComponent('weatheria', () => App);
