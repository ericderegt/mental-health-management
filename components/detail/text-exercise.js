import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo';

import { GlobalStyles, GlobalColors } from '../../themes/global-styles';

const exerciseObj =
  {
    name: 'Observe a leaf',
    id: 1,
    text: 'Collect a leaf off the ground from somewhere. This is especially easy in autumn. It doesn’t matter what kind of leaf it is or what it looks like. Any leaf will do. \n\nHold it in your hands and allow your attention to be fully absorbed by it. Observe it. Notice things about its physical characteristics. \n\nFor example, you could say to yourself, I notice that this leaf has three sharp points on one side, and a rounded edge on the other. Or, I see there’s yellowish lines radiating out from the bottom to the top. \n\nNotice textures, colors, and shapes without judging them as good or bad, pleasant or unpleasant, ugly or beautiful. Don’t assess or think about the leaf. Just observe it for what it is. Do this simple mindfulness exercise for five minutes.',
    duration: 5,
  }


class TextExercise extends Component {
  constructor (props) {
    super(props)
  };

  render() {
    return (
      <ScrollView style={styles.container}>

        <View style={{minHeight: 200}}>
          <LinearGradient
            colors={[GlobalColors.primaryColor, '#00e673', GlobalColors.backgroundColor]}
            style={{
              flex: 1,
            }}
          >
            <View style={{flex: 1, alignItems:'center', justifyContent:'center', padding: 10}}>
              <View style={{padding: 10}}/>
              <Text style={GlobalStyles.text}>{exerciseObj.name}</Text>
              <View style={{padding: 10}}/>
            </View>
          </LinearGradient>
        </View>

        <View>
          <View style={{padding: 30}}>
            <Text style={[GlobalStyles.subText, styles.mainText]}>{exerciseObj.text}</Text>
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
  mainText: {
    textAlign: 'justify',
  },
});

export default TextExercise;
