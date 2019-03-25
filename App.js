import React, {Component} from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';

import { createBottomTabNavigator }from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Explore from './src/screens/Explore';
import Saved from './src/screens/Saved';
import Inbox from './src/screens/Inbox';
import Profile from './src/screens/Profile';
import Trips from './src/screens/Trips';

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Nativeasdfasd!</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarLabel: 'EXPLORAR',
        tabBarIcon:({tintColor}) => (
          <Icon name="md-search" color={tintColor} size={24} />
        )
      }
  },
  Saved: {
      screen: Saved,
      navigationOptions: {
        tabBarLabel: 'SALVOS',
        tabBarIcon:({tintColor})=> (
          <Icon name="md-heart-empty" color={tintColor} size={24} />
        )
      }
  },
  Trips: {
      screen: Trips,
      navigationOptions: {
        tabBarLabel: 'VIAGENS',
        tabBarIcon:({tintColor})=> (
          <Icon name="md-heart-empty" color={tintColor} size={24} />
        )
      }
  },
  Inbox: {
      screen: Inbox,
      navigationOptions: {
        tabBarLabel: 'MENSAGENS',
        tabBarIcon:({tintColor})=>(
          <Icon name="md-chatboxes" color={tintColor} size={24} />
        )
      }
  },
  Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'PERFIL',
        tabBarIcon:({tintColor})=>(
          <Icon name="md-person" color={tintColor} size={24} />
        )
      }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// export default createAppContainer(TabNavigator);