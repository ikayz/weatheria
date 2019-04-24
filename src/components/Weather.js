import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import WeatherDetails from './WeatherDetails';

class Weather extends Component {
  state = { forecast: [], latitude: 0, longitude: 0, error: '' };

  componentDidMount() {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&units=metric&appid=dc6267c2fdea4f59377f61f4b6a2c91a')
      .then(response => {
        this.setState({ forecast: response.data.list, location: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  findLocation() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState(
            (preState) => ({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }), () => { this.renderWeather(); }
          );
        },

        (error) => this.setState({ forecast: error.message }),
        { enableHighAccuracy: true, timeout: 22000, maximumAge: 1000 }
      );
  }

  renderWeather() {
    return this.state.forecast.map(lists =>
      <WeatherDetails key={lists.dt} list={lists} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderWeather()}
      </ScrollView>
    );
  }
}

export default Weather;
