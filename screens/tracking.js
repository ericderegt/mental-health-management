import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  Keyboard,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  List,
  ListItem,
  Card,
  Button,
  Icon,
  ButtonGroup,
} from 'react-native-elements';

import { GlobalStyles, GlobalColors } from '../themes/global-styles';

import MoodCard from '../components/tracking/mood-track';
import SleepCard from '../components/tracking/sleep-track';
import ExerciseCard from '../components/tracking/exercise-track';
import RelaxCard from '../components/tracking/relax-track';
import FoodCard from '../components/tracking/food-track';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const monthText = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: GlobalColors.primaryColor,
  },
});

class Tracking extends Component {
  constructor () {
    super()
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 0, paddingRight: 10, paddingLeft: 10}}>
            <View style={{flex:2}}><Text style={[GlobalStyles.text]}>MAR</Text></View>
            <View style={{flex:4}}><Icon name='wb-sunny' flex={1} size={100} color={GlobalColors.primaryColor} /></View>
            <View style={{flex:2}}><Text style={GlobalStyles.largeText}>4</Text></View>
          </View>
          <MoodCard />
          <SleepCard />
          <ExerciseCard />
          <RelaxCard />
          <FoodCard />
        </View>
      </ScrollView>
    );
  }
}

export default Tracking;
