import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Weather extends Component {
  componentWillMount() {
    console.log('Testing message');
  }

  render() {
    state = { weather: [] }

    return (
      <View>
        <Text>Welcome to weatheria</Text>
      </View>
    )
  }
}

export default Weather;
