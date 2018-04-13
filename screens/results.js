import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { Button, Header, Icon } from 'react-native-elements';

import { GlobalStyles, GlobalColors } from '../themes/global-styles';

import ResultsList from '../components/results/results-list';

const resultsList = [
  {
    name: 'Meditations',
    id: 1,
    category_id: 1,
  },
  {
    name: 'DBT Exercises',
    id: 2,
    category_id: 1,
  },
  {
    name: 'Articles',
    id: 3,
    category_id: 3,
  },
  {
    name: 'Videos',
    id: 4,
    category_id: 2,
  },
  {
    name: 'Thoughts',
    id: 5,
    category_id: 1,
  },
  {
    name: 'Challenges',
    id: 6,
    category_id: 2,
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
  }
});

export default Results;
