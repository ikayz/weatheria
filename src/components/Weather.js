import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
// import OPENWEATHER_API from '../config';

class Weather extends Component {
  state = { weather: [] };

  componentWillMount() {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Berlin&APPID=dc6267c2fdea4f59377f61f4b6a2c91a')
      .then(response => this.setState({ weather: response.data }));
  }

  render() {
    console.log(this.state);
    return (
      <View>
        <Text>Welcome to weatheria</Text>
      </View>
    );
  }
}

export default Weather;
