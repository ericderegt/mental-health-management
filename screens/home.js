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

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
            <Text style={GlobalStyles.text}>March</Text>
            <Text style={GlobalStyles.largeText}>4</Text>
          </View>
          <MoodCard />
          <SleepCard />
        </View>
      </ScrollView>
    );
  }
}

export default Home;
