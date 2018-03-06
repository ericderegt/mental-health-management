import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Platform } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Slider from "react-native-slider";

import { GlobalStyles, GlobalColors } from '../themes/global-styles';
import SleepConstants from '../constants/sleep-constants';
import ExerciseConstants from '../constants/exercise-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  text: {
    fontFamily: Platform.OS === 'android'
      ? 'Roboto'
      : 'Avenir',
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 24,
    color: '#41413e',
  },
  subText: {
    fontFamily: Platform.OS === 'android'
      ? 'Roboto'
      : 'Avenir',
    marginBottom: 2,
    textAlign: 'center',
    fontSize: 16,
    color: '#9b9b97',
  },
});

var sliderStyle = StyleSheet.create({
  track: {
    height: 4,
    borderRadius: 2,
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'white',
    borderColor: GlobalColors.primaryColor,
    borderWidth: 2,
  }
});

const currentSlider = {
  'Sleep': SleepConstants,
  'Exercise': ExerciseConstants
}



class MH_Slider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 0,
    }
  };
  render() {
    return (
      <View style={{marginTop:2, padding:1}}>
        <Text style={GlobalStyles.text}>{currentSlider[this.props.name].text}</Text>
        <Text style={GlobalStyles.subText}>{currentSlider[this.props.name].slider[this.state.value]}</Text>
        <Slider
          trackStyle={sliderStyle.track}
          thumbStyle={sliderStyle.thumb}
          step={1}
          minimumValue={0}
          maximumValue={5}
          minimumTrackTintColor={GlobalColors.primaryColor}
          maximumTrackTintColor={GlobalColors.greyColor}
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
        />
      </View>
    );
  }
}

export default MH_Slider;
