import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';

import { Tile, List, ListItem } from 'react-native-elements';
import CustomMultiPicker from "react-native-multiple-select-list";

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

class Goals extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{alignItems: 'center', padding: 10}}><Text style={{fontSize:18}}>Set Your Goals</Text></View>
        <CustomMultiPicker
          options={userList}
          search={false} // should show search bar?
          multiple={true} //
          placeholder={"Search"}
          placeholderTextColor={'#757575'}
          returnValue={"label"} // label or value
          callback={(res)=>{ console.log(res) }} // callback, array of selected items
          rowBackgroundColor={"#eee"}
          rowHeight={40}
          rowRadius={5}
          iconColor={"#00a2dd"}
          iconSize={30}
          selectedIconName={"ios-checkmark-circle-outline"}
          unselectedIconName={"ios-radio-button-off-outline"}
          scrollViewHeight={500}
          selected={[1,2]} // list of options which are selected by default
        />
      </View>
    );
  }
}
export default Goals;
