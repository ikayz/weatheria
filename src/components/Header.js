import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle} = styles;
  return (
    <View styles={viewStyle}>
      <Text styles={textStyle}>{props.headerText}</Text>
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
    color: '#fff'
  },
  textStyle: {
    fontSize: 20
  }
}

export default Header;
