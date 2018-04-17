import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { Button, Header, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo';
import Modal from "react-native-modal";

import { GlobalStyles, GlobalColors } from '../themes/global-styles';
import MultiSelectList from '../components/modal-list';
import MoodSurvey from '../components/tracking/mood-survey';
import MH_Slider from '../components/mh-slider';

const checkInList = [
  {
    name: 'Happy',
    id: 1,
    checked: false,
  },
  {
    name: 'Excited',
    id: 2,
    checked: false,
  },
  {
    name: 'Anxious',
    id: 4,
    checked: false,
  },
  {
    name: 'Calm',
    id: 3,
    checked: false,
  },
  {
    name: 'Stressed',
    id: 6,
    checked: false,
  },
  {
    name: 'Sad',
    id: 5,
    checked: false,
  },
  {
    name: 'Productive',
    id: 7,
    checked: false,
  },
  {
    name: 'Angry',
    id: 8,
    checked: false,
  },
  {
    name: 'Tired',
    id: 9,
    checked: false,
  },
  {
    name: 'Lonely',
    id: 10,
    checked: false,
  },
  {
    name: 'Optimistic',
    id: 11,
    checked: false,
  },
]


class Survey extends Component {
  constructor (props) {
    super(props)
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>

            <View style={{minHeight: 200}}>
              <LinearGradient
                colors={[GlobalColors.primaryColor, '#fff']}
                style={{
                  flex: 1,
                }}
              >
                <View style={{flex: 1, alignItems:'center', justifyContent:'center', padding: 10}}>
                  <View style={{padding: 10}}/>
                  <Text style={[GlobalStyles.subText, styles.headerText]}>Check in for personalized recommendations</Text>
                  <View style={{padding: 10}}/>
                </View>
              </LinearGradient>
            </View>

            <View style={{ flex: 12, paddingRight: 30, paddingLeft: 30 }}>
              <View style={{padding: 10, marginBottom: 5}}>
                <Text style={[GlobalStyles.subText, styles.headerText]}>How are you?</Text>
              </View>
              <View style={{padding: 10, marginBottom: 5}}>
                <MoodSurvey/>
              </View>
              <View style={{padding: 10, marginBottom: 5}}>
                <Text style={[GlobalStyles.subText, styles.headerText]}>How are you feeling?</Text>
              </View>
              <View style={{padding: 10, marginBottom: 5}}>
                <MultiSelectList data={checkInList} />
              </View>
              <View style={{padding: 10, marginBottom: 5}}>
                <Text style={[GlobalStyles.subText, styles.headerText]}>How much time do you have?</Text>
              </View>
              <View style={{padding: 10, marginBottom: 5}}>
                <MH_Slider name={'Time'}/>
              </View>
            </View>
            <View style={{height:20}}/>
            <View style={{ flex: 2 }}>
              <View style={{height:20}}/>
              <Button
                onPress={() => navigate('Results')}
                backgroundColor={GlobalColors.primaryColor}
                color={GlobalColors.backgroundColor}
                rounded={true}
                fontSize={22}
                fontWeight='bold'
                title='SUBMIT' />
            </View>
            <View style={{padding: 10, marginBottom: 50}}/>
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
    fontSize: 20,
    fontWeight: 'normal',
    color: GlobalColors.blackColor,
  },
});

export default Survey;
