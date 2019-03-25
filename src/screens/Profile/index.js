import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={style.container}>
        <Text> Profile </Text>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
});