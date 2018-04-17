import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { Button, Header, Icon } from 'react-native-elements';

import { GlobalStyles, GlobalColors } from '../themes/global-styles';

import ResultsList from '../components/results/results-list';

const resultsList = [
  {
    name: 'Observe a leaf',
    id: 1,
    category_id: 1,
    bgColor: '#2E7D32',
    text: 'Collect a leaf off the ground from somewhere. This is especially easy in autumn. It doesn’t matter what kind of leaf it is or what it looks like. Any leaf will do. \n\nHold it in your hands and allow your attention to be fully absorbed by it. Observe it. Notice things about its physical characteristics. \n\nFor example, you could say to yourself, I notice that this leaf has three sharp points on one side, and a rounded edge on the other. Or, I see there’s yellowish lines radiating out from the bottom to the top. \n\nNotice textures, colors, and shapes without judging them as good or bad, pleasant or unpleasant, ugly or beautiful. Don’t assess or think about the leaf. Just observe it for what it is. Do this simple mindfulness exercise for five minutes.',
    duration: 5,
  },
  {
    name: 'DBT Exercises',
    id: 2,
    category_id: 1,
    bgColor: '#81C784',
    duration: 3,
  },
  {
    name: 'Articles',
    id: 3,
    category_id: 3,
    bgColor: '#388E3C',
    duration: 2,
  },
  {
    name: 'Videos',
    id: 4,
    category_id: 2,
    bgColor: '#1B5E20',
    duration: 10,
  },
]

class Results extends Component {
  constructor (props) {
    super(props)
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        <View style={{height: 10}}/>
        <View style={{padding: 10, marginBottom: 5}}>
          <Text style={[GlobalStyles.text, styles.headerText]}>For You</Text>
        </View>
        <View>
          <View style={{ flex: 1}}>
            <ResultsList data={resultsList} navigation={this.props.navigation}/>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.backgroundColor,
  },
  text: {
    color: '#fff',
  },
  headerText: {
    color: GlobalColors.blackColor,
  },
});

export default Results;
