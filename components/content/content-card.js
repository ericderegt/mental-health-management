import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Card, Button, Icon, Header } from 'react-native-elements';
import Modal from "react-native-modal";

import { GlobalStyles, GlobalColors } from '../../themes/global-styles';
import MultiSelectList from '../modal-list';

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

class ContentCard extends Component {
  constructor (props) {
    super(props)
  };

  render() {
    return (
      <View style={{ flex: 1 }}>

        <Card containerStyle={GlobalStyles.card}>
          <View style={{ flex: 1, padding: 10, backgroundColor: this.props.bgColor, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flex: 1 }}>
              <Icon name={this.props.icon} flex={1} size={36} color={'#fff'} />
            </View>
            <View style={styles.textBox}>
              <Text style={[GlobalStyles.text, styles.text]}>{this.props.name}</Text>
            </View>
        </View>
        </Card>
      </View>
    );
  }
}

export default ContentCard;
