import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

import { GlobalStyles, GlobalColors } from '../themes/global-styles';
import Modal from "react-native-modal";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textBox: {
    flex: 6
  }
});


class ExerciseCard extends Component {
  constructor (props) {
    super(props)
  };

  state = {
    isModalVisible: false
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (
      <View style={{ flex: 1 }}>

        <Card containerStyle={GlobalStyles.card}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Icon name='directions-run' flex={1} size={36} color={GlobalColors.greyColor} />
            </View>
            <View style={styles.textBox}>
              <Text style={GlobalStyles.text}>Exercise</Text>
              <Text style={GlobalStyles.subText}>Goal: 3 times/week</Text>
            </View>
            <TouchableOpacity onPress={this._toggleModal}>
              <Icon name='add' justifyContent='flexEnd' flex={1} size={36} color={GlobalColors.primaryColor} />
            </TouchableOpacity>
          </View>
        </Card>

        <Modal isVisible={this.state.isModalVisible} backdropOpacity={1.0} backdropColor={GlobalColors.primaryColor}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Hello!</Text>
            <TouchableOpacity onPress={this._toggleModal}>
              <Text>Hide me!</Text>
            </TouchableOpacity>
          </View>
        </Modal>

      </View>
    );
  }
}

export default ExerciseCard;
