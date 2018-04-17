import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, List, ListItem, Platform } from 'react-native';
import { Icon, Header } from 'react-native-elements';
import { StackNavigator, TabNavigator } from 'react-navigation';

import { HomeStack } from './screens/home';
import Content from './screens/content';
import Tracking from './screens/tracking';
import Summary from './screens/summary';

import { GlobalStyles, GlobalColors } from './themes/global-styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.backgroundColor,
  },
  headerText: {
    color: GlobalColors.primaryColor,
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
    activeTintColor: '#4CAF50',
  },
};

export const Root = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />,
    },
  },
  Content: {
    screen: Content,
    navigationOptions: {
      tabBarLabel: 'Content',
      tabBarIcon: ({ tintColor }) => <Icon name="weekend" size={35} color={tintColor} />
    },
  },
  Summary: {
    screen: Summary,
    navigationOptions: {
      tabBarLabel: 'Summary',
      tabBarIcon: ({ tintColor }) => <Icon name="brightness-5" size={35} color={tintColor} />
    },
  },
}, tabBarConfiguration);


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Root/>
      </View>
    );
  }
}
