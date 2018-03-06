import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, List, ListItem, Platform } from 'react-native';
import { Icon, Header } from 'react-native-elements';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Home from './screens/home';
import Track from './screens/track';
import Thoughts from './screens/thoughts';
import Goals from './screens/goals';

import { GlobalStyles, GlobalColors } from './themes/global-styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.backgroundColor,
  },
  white: {
    color: '#fff'
  }
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
    showLabel: false,
    activeTintColor: '#00cc66',
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
      <View style={styles.container}>
        <Header
          backgroundColor='#00cc66'
          statusBarProps={{ barStyle: 'light-content' }}
          centerComponent={{ text: 'DEMO', style: [GlobalStyles.text,styles.white] }}
          outerContainerStyles={{height: Platform.OS === 'ios' ? 90 :  70 - 24, borderBottomWidth: 0}}
        />
        <Root/>
      </View>
    );
  }
}
