import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
// import OPENWEATHER_API from '../config';

class Weather extends Component {
  state = { weather: [], name: '' };

  componentDidMount() {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Berlin&APPID=dc6267c2fdea4f59377f61f4b6a2c91a')
      .then(response => {
        const weather = response.data.weather.map(obj => ({ name: obj.name, description: obj.description }));
        this.setState({ weather });
      });
  }

  renderWeather() {
    return this.state.weather.map((weather, index) => ( <Text key={index}>{weather.description}</Text>));
  }

  render() {
    console.log(this.state);
    return (
      <View>
        {this.renderWeather()}
        <Text>Test</Text>
      </View>
    );
  }
}

export default Weather;
