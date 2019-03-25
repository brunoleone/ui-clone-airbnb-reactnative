import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { createBottomTabNavigator } from 'react-navigation'

import Explore from "../Explore";
import Inbox from "../Inbox";
import Saved from "../Saved";
import Trips from "../Trips";

export class Main extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

export default createBottomTabNavigator({
    Explore: {
        screen: Explore
    },
    Saved: {
        screen: Saved
    },
    Trips: {
        screen: Trips
    },
    Inbox: {
        screen: Inbox
    },
    Profile: {
        screen: Profile
    }
})
