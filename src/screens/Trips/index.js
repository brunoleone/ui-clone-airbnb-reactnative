import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Trips extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text> Trips </Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
});
