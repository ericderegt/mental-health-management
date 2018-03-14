import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo';

import { GlobalStyles, GlobalColors } from '../../themes/global-styles';

class CheckIn extends Component {
  constructor (props) {
    super(props)
  };

  _clickCheckIn = () =>
      console.log("test");

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[GlobalColors.primaryColor, '#00e673', '#00994d']}
          style={{
            flex: 1,
          }}
        >
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={[GlobalStyles.text,styles.text]}>What's on your mind?</Text>
            </View>
            <View style={{flex: 1}}>
              <Button
                onPress={this._clickCheckIn}
                color='#fff'
                outline={true}
                rounded={true}
                fontSize={14}
                fontWeight='bold'
                title='CHECK IN' />
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#fff',
  }
});

export default CheckIn;
