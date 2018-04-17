import React, { Component } from 'react';
import { ScrollView, View, Text, Picker, StyleSheet, Dimensions, Image } from 'react-native';
import { List, ListItem, Slider } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

import { LinearGradient } from 'expo';

import CheckIn from '../components/home/check-in';
import Survey from './survey';
import Results from './results';
import Detail from '../components/detail/base';
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
});

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      headerTintColor: GlobalColors.primaryColor,
      headerTitleStyle: {
        color: GlobalColors.blackColor,
      },
    },
  },
  CheckInSurvey: {
    screen: Survey,
    navigationOptions: {
      title: 'Check In',
      headerTintColor: GlobalColors.primaryColor,
      headerTitleStyle: {
        color: GlobalColors.blackColor,
      },
    },
  },
  Results: {
    screen: Results,
    navigationOptions: {
      title: 'Recommendations',
      headerTintColor: GlobalColors.primaryColor,
      headerTitleStyle: {
        color: GlobalColors.blackColor,
      },
    },
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: '',
      headerTintColor: GlobalColors.primaryColor,
      headerTitleStyle: {
        color: GlobalColors.blackColor,
      },
    },
  },
});
