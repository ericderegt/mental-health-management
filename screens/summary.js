import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';

import { Tile, List, ListItem } from 'react-native-elements';
import AreaChartMH from '../components/charts/area';
import StackedAreaChartMH from '../components/charts/stacked-area';

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
]

const userList = {
  "123":"Go to work",
  "124":"Go to school",
  "125":"Go out to dinner",
  "126":"Go to a networking event",
  "127":"Eat healthy today",
  "128":"Get 8 hours of sleep",
  "129":"Cook dinner",
  "130":"Work out",
  "131":"Eat sushi",

}

class Summary extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{alignItems: 'center', padding: 10}}><Text style={{fontSize:26}}>Your week</Text></View>
        <View style={{alignItems: 'center', padding: 10}}><Text style={{fontSize:18}}>Mood</Text></View>
        <AreaChartMH style={{paddingBottom: 10}}/>
        <View style={{alignItems: 'center', padding: 10}}><Text style={{fontSize:18}}>Sleep</Text></View>
        <StackedAreaChartMH/>
      </View>
    );
  }
}
export default Summary;
