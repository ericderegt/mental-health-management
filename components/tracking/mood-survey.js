import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import { GlobalStyles, GlobalColors } from '../../themes/global-styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

class MoodSurvey extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mood: 0,
      selectedIcon: 0,
    }
  };

  selectionOnPress (iconType) {
    if (iconType == this.state.selectedIcon) {
      this.setState({
        selectedIcon: 0,
        mood: 0,
      })
    }
    else {
      this.setState({
        selectedIcon: iconType,
        mood: iconType,
      })
    }
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={() => this.selectionOnPress(1)}>
          <Icon name='sentiment-very-dissatisfied'
            color={this.state.selectedIcon === 1? GlobalColors.primaryColor: GlobalColors.greyColor} size={50} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.selectionOnPress(2)}>
          <Icon name='sentiment-dissatisfied'
            color={this.state.selectedIcon === 2? GlobalColors.primaryColor: GlobalColors.greyColor} size={50} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.selectionOnPress(3)}>
          <Icon name='sentiment-neutral'
            color={this.state.selectedIcon === 3? GlobalColors.primaryColor: GlobalColors.greyColor} size={50} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.selectionOnPress(4)}>
          <Icon name='sentiment-satisfied'
            color={this.state.selectedIcon === 4? GlobalColors.primaryColor: GlobalColors.greyColor} size={50} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.selectionOnPress(5)}>
          <Icon name='sentiment-very-satisfied'
            color={this.state.selectedIcon === 5? GlobalColors.primaryColor: GlobalColors.greyColor} size={50} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default MoodSurvey;
