import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

import MH_Slider from '../mh-slider';
import { GlobalStyles, GlobalColors } from '../../themes/global-styles';

class SleepCard extends Component {
  constructor (props) {
    super(props)
  };

  render() {
    return (
      <Card containerStyle={GlobalStyles.card}>
        <MH_Slider name="Sleep"/>
      </Card>
    );
  }
}

export default SleepCard;
