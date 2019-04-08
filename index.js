import React from 'react';
import { AppRegistry, View,Text } from 'react-native';

const App = () => {
    return (
      <View>
        <Text>Welcome to weatheria</Text>
      </View>
    );
};

AppRegistry.registerComponent('weatheria', () => App);
