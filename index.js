import React from 'react';
import { AppRegistry, View,Text } from 'react-native';
import Header from './src/components/Header';
import Weather from './src/components/Weather';
<<<<<<< HEAD
import Search from './src/components/Search';
=======
>>>>>>> 851c0

const App = () => {
    return (
      <View>
        <Header headerText={'Weatharia'}/>
        <Weather />
<<<<<<< HEAD
        {/* <Search placeholder='Search City'/> */}
=======
>>>>>>> 851c0
      </View>
    );
};

AppRegistry.registerComponent('weatheria', () => App);
