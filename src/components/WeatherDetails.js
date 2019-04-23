import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const WeatherDetails = (props) => {
    // const {
    //     weather: [{ main, description, icon }],
    // } = list;

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
                </View>
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
