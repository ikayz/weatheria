import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ""
  }

  handleText = text => {
    this.setState({text});
    console.log(this.state);
  }

  submitEdit = () => {
    const {onSubmit} = this.props;
    const {text} = this.state;

    if (!text) return;

    onSubmit(text);
    thi.setState({text:''});
  }

  render() {
    const { placeholder } = this.props;
    const { text } = this.state;

    return(
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          placeholder={placeholder}
          placeholderTextColor="black"
          underlineColorAndroid="transparent"
          style={styles.textInput}
          onChangeText={this.handleText}
          onSubmitEditing={this.submitEdit}
        />
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      height: 40,
      marginTop: 20,
      backgroundColor: '#669',
      marginHorizontal: 40,
      paddingHorizontal: 10,
      borderRadius: 4
    },
    textInput: {
      flex: 1,
      color: 'white'
    }
  });

}

export default Search;
