import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

import { GlobalStyles, GlobalColors } from '../themes/global-styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    fontFamily: Platform.OS === 'android'
      ? 'Roboto'
      : 'Avenir',
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 24,
    color: '#383836',
  },
});

class MoodCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mood: 3,
      selectedIcon: 3,
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
      <Card containerStyle={GlobalStyles.card}>
        <Text style={GlobalStyles.text}>
          How are you?
        </Text>
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
      </Card>
    );
  }
}

export default MoodCard;
