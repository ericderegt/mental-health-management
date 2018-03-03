import React, { Component } from 'react';
import { ScrollView, View, Text, Picker, StyleSheet } from 'react-native';
import { List, ListItem, Slider } from 'react-native-elements';

import MH_Slider from '../components/mhslider';

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
        <View style={{alignItems: 'center', padding: 10}}><Text style={{fontSize:18}}>Track Some Stuff</Text></View>
        <View style={styles.container}>
          <View style={{flex: 1}}/>
          <View style={{flex: 8}}>
            <MH_Slider name="Sleep"/>
            <MH_Slider name="Exercise"/>
          </View>
          <View style={{flex: 1}}/>
        </View>
      </View>
    );
  }
}

export default Track;
