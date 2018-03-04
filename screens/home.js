import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  Keyboard,
  StyleSheet,
  View,
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

import { GlobalStyles } from '../themes/global-styles';

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
          <View style={{flex: 1, justifyContent: 'center', paddingTop: 10, paddingBottom: 0}}>
            <Text style={[GlobalStyles.text, monthText.text]}>March</Text>
            <Text style={GlobalStyles.largeText}>4</Text>
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
