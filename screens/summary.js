import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';

import { List, ListItem } from 'react-native-elements';
import AreaChartMH from '../components/charts/area';
import StackedAreaChartMH from '../components/charts/stacked-area';
import { GlobalStyles, GlobalColors } from '../themes/global-styles';

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
      <ScrollView style={{flex: 1}}>
        <View style={{height:66}}/>
        <View style={{alignItems: 'center', padding: 10}}><Text style={GlobalStyles.text}>Your week</Text></View>

        <View style={{alignItems: 'center', padding: 10}}><Text style={GlobalStyles.subText}>Mood</Text></View>
        <View style={{padding:20}}><AreaChartMH style={{paddingBottom: 10}}/></View>
        <View style={{alignItems: 'center', padding: 10}}><Text style={GlobalStyles.subText}>Sleep</Text></View>
        <View style={{padding:20}}><StackedAreaChartMH/></View>

        <View style={{height:20}}/>
        <View style={{alignItems: 'center', padding: 10}}><Text style={GlobalStyles.subText}>Recent Activity</Text></View>
        

      </ScrollView>
    );
  }
}
export default Summary;
