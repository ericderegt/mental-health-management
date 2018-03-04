import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

import MH_Slider from './mh-slider';
import { GlobalStyles, GlobalColors } from '../themes/global-styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textBox: {
    flex: 6
  }
});


class ExerciseCard extends Component {
  constructor (props) {
    super(props)
  };

  render() {
    return (
      <Card containerStyle={GlobalStyles.card}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Icon name='directions-run' flex={1} size={36} color={GlobalColors.greyColor} />  
          </View>
          <View style={styles.textBox}>
            <Text style={GlobalStyles.text}>Exercise</Text>
            <Text style={GlobalStyles.subText}>Goal: 3 times/week</Text>
          </View>
          <Icon name='add' justifyContent='flexEnd' flex={1} size={36} color={GlobalColors.primaryColor} />
        </View>
      </Card>
    );
  }
}

export default ExerciseCard;
