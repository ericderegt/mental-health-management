import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { Button, Header, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo';
import Modal from "react-native-modal";

import { GlobalStyles, GlobalColors } from '../themes/global-styles';
import MultiSelectList from '../components/modal-list';

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
    name: 'Calm',
    id: 3,
    checked: false,
  },
  {
    name: 'Angry',
    id: 4,
    checked: false,
  },
  {
    name: 'Sad',
    id: 5,
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
            <View style={{ flex: 1 }}/>

            <View style={{ flex: 12 }}>
              <View style={{padding: 10, marginBottom: 10}}>
                <Text style={GlobalStyles.text}>I'm feeling</Text>
              </View>
              <MultiSelectList data={checkInList} />
            </View>
            <View style={{height:20}}/>
            <View style={{ flex: 2 }}>
              <Button
                large
                onPress={() => navigate('Results')}
                backgroundColor={GlobalColors.primaryColor}
                color={GlobalColors.backgroundColor}
                rounded={true}
                fontSize={22}
                fontWeight='bold'
                title='SUBMIT' />
            </View>
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

export default Survey;
