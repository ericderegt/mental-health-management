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

import MoodCard from '../components/home-mood';
import SleepCard from '../components/home-sleep';
import ExerciseCard from '../components/home-exercise';
import RelaxCard from '../components/home-relax';
import FoodCard from '../components/home-food';

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

class Home extends Component {
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

export default Home;
