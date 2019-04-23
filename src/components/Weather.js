import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
// import OPENWEATHER_API from '../config';

class Weather extends Component {
  state = { list: [] };

  componentDidMount() {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=dc6267c2fdea4f59377f61f4b6a2c91a')
      .then(response => {
        this.setState({ list: response.data.list });
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderWeather() {
    return this.state.list.map(list => ( <Text >{list.weather[0].main}</Text>));
  }

  render() {
    // console.log(this.state);
    // const { city, weather } = this.state;
    return (
      <View>
        {this.renderWeather()}
        {/* <Text>{city}</Text> */}
        {/* <Text>{weather.description}</Text> */}
      </View>
    );
  }
}

export default Weather;
