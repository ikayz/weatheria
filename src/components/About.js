import React from 'react';
import { View, AppRegistry, Text } from 'react-native';
import Header from './Header';

const About = () => {
  return (
    <View>
      <Header headerText={About} />
      <Text>Just some text</Text>
    </View>
  );
};

AppRegistry.registerComponent('weatheria', () => About);
