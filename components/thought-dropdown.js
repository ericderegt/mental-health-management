import React, { Component } from 'react';
import { ScrollView, View, Text, Picker, StyleSheet, Dimensions, Image } from 'react-native';

import { GlobalColors, GlobalStyles } from '../themes/global-styles';
import { Select, Option } from 'react-native-chooser';

import { dropdownType } from '../constants/thoughts-constants';

class ThoughtDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {value : "Select Me Please"}
  }
  onSelect(value, label) {
    this.setState({value : value});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[GlobalStyles.text, styles.text]}>{dropdownType[this.props.dropdownType]}</Text>
        <View style={{marginBottom: 5}}/>
        <Select
            onSelect = {this.onSelect.bind(this)}
            defaultText  = {this.state.value}
            style = {{borderWidth : 2, borderColor : "#fff", justifyContent: 'center', alignItems: 'center', padding: 5}}
            textStyle = {[GlobalStyles.text, styles.optionText]}
            backdropStyle  = {{backgroundColor : GlobalStyles.greyColor, flex: 1, marginTop: 70}}
            optionListStyle = {{flex: 1, padding: 2, borderWidth: 0}}
          >
          <Option value={this.props.values[0]} style={styles.option}>{this.props.values[0]}</Option>
          <Option value={this.props.values[1]} style={styles.option}>{this.props.values[1]}</Option>
          <Option value={this.props.values[2]} style={styles.option}>{this.props.values[2]}</Option>
          <Option value={this.props.values[3]} style={styles.option}>{this.props.values[3]}</Option>
          <Option value={this.props.values[4]} style={styles.option}>{this.props.values[4]}</Option>
          <Option value={this.props.values[5]} style={styles.option}>{this.props.values[5]}</Option>
          <Option value={this.props.values[6]} style={styles.option}>{this.props.values[6]}</Option>
          <Option value={this.props.values[7]} style={styles.option}>{this.props.values[7]}</Option>

        </Select>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  text: {
    color: GlobalStyles.blackColor,
    fontSize: 18,
  },
  optionText: {
    color: '#fff',
    fontSize: 18,
  },
  option: {
    borderWidth: 2,
    marginBottom: 2,
  },
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default ThoughtDropdown;
