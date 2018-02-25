import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { List, ListItem, Slider } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  texted: {
    fontSize: 18,
  }
});

const moods = {
  1: ''
}

class MH_Slider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mood: 3,
    }
  };
  render() {
    return (
      <View style={{marginTop:10, borderWidth:1, padding:4, borderColor:'rgba(0,0,0,0.12)'}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.texted}>{this.props.name}</Text>
          <View style={{flex: 1}}/>
          <Text style={styles.texted}>{this.state.mood}</Text>
        </View>
        <Slider
          minimumValue={1}
          maximumValue={5}
          step={1}
          value={1}
          thumbTintColor='#20b2aa'
          animateTransitions={true}
          value={this.state.mood}
          onValueChange={(value) => this.setState({mood: value})} />
      </View>
    );
  }
}

export default MH_Slider;
