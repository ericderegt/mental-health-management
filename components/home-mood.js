import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Platform } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    fontFamily: Platform.OS === 'android'
      ? 'Roboto'
      : 'Avenir',
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 24,
    color: '#383836',
  },
});

const moods = {
  1: ''
}

class MoodCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mood: 3,
    }
  };
  render() {
    return (
      <Card containerStyle={styles.card}>
        <Text style={styles.text}>
          How are you feeling?
        </Text>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Icon name='sentiment-very-dissatisfied' color='#b4b4b1' size='50' />
          <Icon name='sentiment-dissatisfied' color='#b4b4b1' size='50' />
          <Icon name='sentiment-neutral' color='#b4b4b1' size='50' />
          <Icon name='sentiment-satisfied' color='#b4b4b1' size='50' />
          <Icon name='sentiment-very-satisfied' color='#b4b4b1' size='50' />
        </View>
      </Card>
    );
  }
}

export default MoodCard;
