import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import { LinearGradient } from 'expo';
import { Icon, Button } from 'react-native-elements';

import { GlobalStyles, GlobalColors } from '../../themes/global-styles';

class DailyGoal extends Component {
  constructor (props) {
    super(props)
  };

  _submitGoal = () =>
      console.log("test");

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.goalPrompt}>
          <Text style={GlobalStyles.text}>Daily Goal</Text>
        </View>
        <View style={styles.goalInputContainer}>
          <View style={styles.goalInput}>
            <TextInput
              placeholder="What's your goal today?"
              style={GlobalStyles.subText}
              returnKeyType={'done'}
            />
          </View>
          <View style={styles.inputButton}>
            <Button
              onPress={this._submitGoal}
              backgroundColor="#fff"
              color={GlobalColors.primaryColor}
              outline={true}
              rounded={true}
              fontSize={12}
              fontWeight='bold'
              title='GO' />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  goalPrompt: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  goalInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goalInput: {
    borderBottomWidth: 1,
    flex: 1,
  },
  inputButton: {
  },
});

export default DailyGoal;
