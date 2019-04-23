import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const WeatherDetails = (props) => {
    return (
        <View>
            <Text>{props.}</Text>
        </View>
    );
};

export default WeatherDetails;
