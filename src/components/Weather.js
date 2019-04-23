import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
// import OPENWEATHER_API from '../config';

class Weather extends Component {
  state = { weather: [], city: '', };

  componentDidMount() {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Berlin&APPID=dc6267c2fdea4f59377f61f4b6a2c91a')
      .then(response => {
        this.setState({ city: response.data.name, weather: response.data.weather });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // renderWeather() {
  //   return this.state.weather.map((weather, index) => ( <Text key={index}>{weather.description}</Text>));
  // }

  render() {
    // console.log(this.state);
    const { city, weather } = this.state;
    return (
      <View>
        {/* {this.renderWeather()} */}
        <Text>{city}</Text>
        <Text>{weather.description}</Text>
      </View>
    );
  }
}

export default Weather;
