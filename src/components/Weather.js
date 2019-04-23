import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import WeatherDetails from './WeatherDetails';
// import OPENWEATHER_API from '../config';

class Weather extends Component {
  state = { forecast: [] };

  componentDidMount() {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=dc6267c2fdea4f59377f61f4b6a2c91a')
      .then(response => {
        this.setState({ forecast: response.data.list });
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderWeather() {
    return this.state.forecast.map(lists =>
      <WeatherDetails key={lists.dt} list={lists} />
    );
  }

  render() {
    // console.log(this.state);
    // const { city, weather } = this.state;
    return (
      <ScrollView>
        {this.renderWeather()}
      </ScrollView>
    );
  }
}

export default Weather;
