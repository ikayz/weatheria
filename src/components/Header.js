import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#069',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 12,
    elevation: 6,
  },
  textStyle: {
    fontSize: 20,
    color: '#fff'
  }
}

export default Header;
