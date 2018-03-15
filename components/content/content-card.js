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
          <View style={{ flex: 1, flexDirection: 'row', backgroundColor: this.props.bgColor }}>
            <View style={{ flex: 1 }}>
              <Icon name={this.props.icon} flex={1} size={36} color={GlobalColors.greyColor} />
            </View>
            <View style={styles.textBox}>
              <Text style={GlobalStyles.text}>{this.props.name}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Icon name='keyboard-arrow-right' justifyContent='center' flex={1} size={36} color={GlobalColors.primaryColor} />
            </View>
        </View>
        </Card>
      </View>
    );
  }
}

export default ContentCard;
