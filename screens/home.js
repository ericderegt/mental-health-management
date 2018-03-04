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

import MoodCard from '../components/home-mood';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Home extends Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  render() {
    const buttons = ['Bad', 'Good', 'Great']
    const { selectedIndex } = this.state


    return (
      <ScrollView style={styles.container}>
        <View>
          <MoodCard />
        </View>
      </ScrollView>
    );
  }
}

export default Home;
