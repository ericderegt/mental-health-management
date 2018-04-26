import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';

import AreaChartMH from '../components/charts/area';
import StackedAreaChartMH from '../components/charts/stacked-area';
import { GlobalStyles, GlobalColors } from '../themes/global-styles';

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
        <View style={{alignItems: 'center', padding: 10}}><Text style={GlobalStyles.subText}></Text></View>


      </ScrollView>
    );
  }
}
export default Summary;
