import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, List, ListItem} from 'react-native';
import { Icon, Header } from 'react-native-elements';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Home from './Home';
import Track from './Track';
import Thoughts from './Thoughts';
import Goals from './Goals';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const tabBarConfiguration = {
  tabBarOptions: {
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
    },
    activeTintColor: '#20b2aa',
  },
};

export const Root = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />,
    },
  },
  Track: {
    screen: Track,
    navigationOptions: {
      tabBarLabel: 'Track',
      tabBarIcon: ({ tintColor }) => <Icon name="dashboard" size={35} color={tintColor} />
    },
  },
  Thoughts: {
    screen: Thoughts,
    navigationOptions: {
      tabBarLabel: 'Thoughts',
      tabBarIcon: ({ tintColor }) => <Icon name="weekend" size={35} color={tintColor} />
    },
  },
  Goals: {
    screen: Goals,
    navigationOptions: {
      tabBarLabel: 'Goals',
      tabBarIcon: ({ tintColor }) => <Icon name="brightness-5" size={35} color={tintColor} />
    },
  },
}, tabBarConfiguration);


export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Header
          backgroundColor='#20b2aa'
          statusBarProps={{ barStyle: 'light-content' }}
          centerComponent={{ text: 'DEMO', style: { color: '#fff' } }}
        />
        <Root/>
      </View>
    );
  }
}
