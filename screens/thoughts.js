import React, { Component } from 'react';
import {
  Text,
  TextInput,
  Keyboard,
  StyleSheet,
  View,
} from 'react-native';
import {
  Card,
  Button,
  Icon,
} from 'react-native-elements';

import { GlobalStyles, GlobalColors } from '../themes/global-styles';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Thoughts extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: GlobalColors.primaryColor, flex: 1, justifyContent: 'center'}}>
          <Text style={GlobalStyles.text}>Enter a new thought</Text>
        </View>
        <View style={{backgroundColor: '#000', flex: 2, justifyContent: 'flex-end'}}>
          <Icon name='keyboard-voice' flex={1} size={102} color={GlobalColors.primaryColor} />
        </View>
        <View style={{backgroundColor: GlobalColors.backgroundColor, flex: 2}}>
          <Icon name='wb-incandescent' flex={1} size={102} color={GlobalColors.primaryColor} />
        </View>
      </View>
    );
  }
}

export default Thoughts;
