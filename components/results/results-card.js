import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { Card, Button } from 'react-native-elements';
import { LinearGradient } from 'expo';

import { GlobalStyles, GlobalColors } from '../../themes/global-styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textBox: {
    flex: 6
  },
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    color: '#fff',
  }
});

class ResultsCard extends Component {
  constructor (props) {
    super(props)
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Card containerStyle={{padding:0}}>
          <LinearGradient
            colors={[GlobalColors.primaryColor, '#00e673', '#00994d']}
            style={{
              flex: 1,
            }}
          >
            <Image
              style={{height:200, width:200}}
              resizeMode="cover"
              source={{uri: 'https://i.imgur.com/MABUbpDl.jpg' }}
            />
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Button
              backgroundColor='#03A9F4'
              fontFamily={GlobalStyles.subText.fontFamily}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW' />
            <View style={{height:10}}/>
          </LinearGradient>
        </Card>
        <View style={{height:10}}/>
      </View>
    );
  }
}

export default ResultsCard;
