import React, { Component } from 'react';
import { ScrollView, View, Text, Picker, StyleSheet, Dimensions, Image } from 'react-native';
import { List, ListItem, Slider } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

import { LinearGradient } from 'expo';

import CheckIn from '../components/home/check-in';
import Survey from './survey';
import MH_Slider from '../components/mh-slider';
import { GlobalStyles, GlobalColors } from '../themes/global-styles';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

class Home extends Component {
  constructor (props) {
    super(props)
  };

  render() {
    return (
      <View style={styles.checkIn}>
        <CheckIn navigation={this.props.navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  slide: {
    width: 200,
  },
  sectionHeader: {
    padding: 10,
  },
  checkIn: {
    flex: 1,
    height: viewportHeight,
  },
  dailyGoal: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 0,
    paddingLeft: 10,
  },
  streaks: {
    flex: 1,
    padding: 10,
    height: viewportHeight * 0.2,
    backgroundColor: '#f9f8f4',
  },
  quote: {
    flex: 1,
    padding: 10,
    height: viewportHeight * 0.15,
    backgroundColor: '#ebe8db',
  },
});

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
    headerMode: 'none',
  },
  CheckIn: {
    screen: Survey,
    navigationOptions: {
      title: 'Check In',
    },
  },
});
