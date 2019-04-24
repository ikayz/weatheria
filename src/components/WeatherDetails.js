import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const WeatherDetails = (props) => {
    let time;
    var date = new Date(props.list.dt * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();

    time = hours + ':' + minutes.substr(-2);

    const {
        iconContainer,
        headerContent,
        iconStyle,
        headerText,
        imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={iconContainer}>
                    <Image style={iconStyle} source={{uri:"https://openweathermap.org/img/w/" + props.list.weather[0].icon + ".png"}}/>
                </View>
                <View style={headerContent}>
                    <Text style={headerText}>{props.list.weather[0].main}</Text>
                    <Text>{props.list.weather[0].description}</Text>
                    <Text>Humidity: {props.list.main.humidity}</Text>
                    <Text>Temp: {props.list.main.temp}&#8451;</Text>
                    <Text>{time} hrs</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{ uri:"https://res.cloudinary.com/ikayz/image/upload/v1556055037/weather.jpg" }}/>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContent: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    iconStyle: {
        width: 45,
        height: 45
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 11,
        marginRight: 11
    },
    headerText: {
        fontSize: 20
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default WeatherDetails;
