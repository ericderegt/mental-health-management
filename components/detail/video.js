import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, WebView } from 'react-native';

import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo';

import { GlobalStyles, GlobalColors } from '../../themes/global-styles';

const exerciseObj =
  {
    name: 'How to cope with anxiety',
    id: 1,
    text: 'Anxiety is one of most prevalent mental health disorders, with 1 out of 14 people around the world being likely affected. Leading up to conditions such as depression, increased risk for suicide, disability and requirement of high health services, very few people who often need treatment actually receive it. In her talk “How to cope with anxiety”, Olivia Remes of the University of Cambridge will share her vision on anxiety and will unravel ways to treat and manage this health disorder',
    category_id: 2,
    duration: 5,
    uri: 'https://www.youtube.com/watch?v=WWloIAQpMcQ',
  }


class VideoExercise extends Component {
  constructor (props) {
    super(props)
  };

  render() {
    return (
      <ScrollView style={styles.container}>

        <View style={{minHeight: 200}}>
          <LinearGradient
            colors={[this.props.item.bgColor, GlobalColors.backgroundColor]}
            style={{
              flex: 1,
            }}
          >
            <View style={{flex: 1, alignItems:'center', justifyContent:'center', padding: 10}}>
              <View style={{padding: 10}}/>
              <Text style={GlobalStyles.text}>{this.props.item.name}</Text>
              <View style={{padding: 10}}/>
            </View>
          </LinearGradient>
        </View>

        <View>
          <View style={{padding: 30, height: 300}}>
          <WebView
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{uri: this.props.item.uri }}
          />
          </View>
        </View>
        <View style={{padding: 10, marginBottom: 10}}/>

        <View style={{padding: 30}}>
          <Text style={[GlobalStyles.subText,styles.smallText]}>{this.props.item.text}</Text>
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
  smallText: {
    fontSize: 18,
    textAlign: 'justify',
  },
});

export default VideoExercise;
