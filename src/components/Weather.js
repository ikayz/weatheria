import React, { Component } from 'react';
import { Text, View } from 'react-native';
// import Search from './Search';

class Weather extends Component {
  componentWillMount() {
    console.log('Testing message');
  }

  render() {
    state = { weather: [] }

    return (
      <View>
        <Text>Welcome to weatheria</Text>
        {/* <Search placeholder="Search city"/> */}
      </View>
    )
  }
}

export default Weather;
