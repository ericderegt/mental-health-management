import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

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

  onPressCard = () => {
      const { navigate } = this.props.navigation;
      navigate('Detail', { item: this.props.item });
  }

  render() {
    return (

      <View style={{ flex: 1 }}>

        <TouchableOpacity
          onPress={this.onPressCard}
        >

          <Card containerStyle={{padding:0}}>
              <LinearGradient
                colors={[GlobalColors.primaryColor, this.props.item.fromColor, this.props.item.toColor]}
                style={{
                  flex: 1,
                }}
              >
                <View style={{flex: 1, minHeight: 200, alignItems: 'center', justifyContent: 'center'}}>
                  <View style={{height:10}}/>
                  <Text style={[GlobalStyles.text]}>
                    {this.props.item.name}
                  </Text>
                  <View style={{height:10}}/>
                </View>
              </LinearGradient>
          </Card>
          <View style={{height:10}}/>

        </TouchableOpacity>

      </View>
    );
  }
}

export default ResultsCard;
