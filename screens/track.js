import React, { Component } from 'react';
import { ScrollView, View, Text, Picker, StyleSheet } from 'react-native';
import { List, ListItem, Slider } from 'react-native-elements';

import MH_Slider from '../components/mh-slider';
import AudioExample from '../components/audio-example';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

class Track extends Component {
  constructor (props) {
    super(props)
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <AudioExample/>
      </View>
    );
  }
}

export default Track;
