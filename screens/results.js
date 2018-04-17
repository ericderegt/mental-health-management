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
    name: 'How to cope with anxiety',
    id: 2,
    category_id: 2,
    text: 'Anxiety is one of most prevalent mental health disorders, with 1 out of 14 people around the world being likely affected. Leading up to conditions such as depression, increased risk for suicide, disability and requirement of high health services, very few people who often need treatment actually receive it. In her talk “How to cope with anxiety”, Olivia Remes of the University of Cambridge will share her vision on anxiety and will unravel ways to treat and manage this health disorder',
    bgColor: '#81C784',
    uri: 'https://www.youtube.com/watch?v=WWloIAQpMcQ',
    duration: 15,
  },
  {
    name: 'Remember events',
    id: 13,
    category_id: 1,
    bgColor: '#2E7D32',
    text: 'Remember events from your past that were pleasant, fun, or exciting. Try to remember as many details as possible about these happy memories. What were you doing? Who were you with? What happened?',
    duration: 3,
  },
  {
    name: 'How To Deal With Depression - 10 Tips (Part 1)',
    id: 2,
    category_id: 2,
    text: '',
    bgColor: '#81C784',
    uri: 'https://www.youtube.com/watch?v=G7cDg0Trh1E',
    duration: 9,
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
