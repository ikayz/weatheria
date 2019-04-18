import React from 'react';
import { AppRegistry, View,Text } from 'react-native';
import Header from './src/components/Header';
import Weather from './src/components/Weather';
import Search from './src/components/Search';

const App = () => {
    return (
      <View>
        <Header headerText={'Weatharia'}/>
        <Weather />
        {/* <Search placeholder='Search City'/> */}
      </View>
    );
};

AppRegistry.registerComponent('weatheria', () => App);
