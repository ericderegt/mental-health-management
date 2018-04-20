import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Card, Button, Icon, Header} from 'react-native-elements';
import Modal from "react-native-modal";

import { GlobalStyles, GlobalColors } from '../../themes/global-styles';
import ExerciseConstants from '../../constants/exercise-constants';
import MH_Slider from '../mh-slider';
import MultiSelectList from '../modal-list';
import AudioExample from '../record-thought';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textBox: {
    flex: 6,
  },
  black: {
    backgroundColor: '#000',
  },
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

const exerciseList = [
  {
    name: 'Run',
    id: 1,
    checked: false,
  },
  {
    name: 'Lift',
    id: 2,
    checked: false,
  },
  {
    name: 'Bike',
    id: 3,
    checked: false,
  },
  {
    name: 'Yoga',
    id: 4,
    checked: false,
  },
  {
    name: 'Swim',
    id: 5,
    checked: false,
  },
]


class ExerciseCard extends Component {
  constructor (props) {
    super(props)
  };

  state = {
    isModalVisible: false,
    isTextModalVisible: false,
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  _toggleTextModal = () =>
    this.setState({ isTextModalVisible: !this.state.isTextModalVisible });

  renderRight() {
    return (
      <TouchableOpacity onPress={this._toggleModal}>
        <Icon name='close' flex={1} size={36} color={GlobalColors.primaryColor} />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>

        <Card containerStyle={GlobalStyles.card}>
          <View style={{height:15}}/>
          <View style={{flex:1, padding:5}}>
            <Text style={GlobalStyles.text}>Add a thought</Text>
            <View style={{backgroundColor: '#000', flex: 2, flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity onPress={this._toggleModal}>
                <Icon name='keyboard-voice' flex={1} size={102} color={GlobalColors.primaryColor} />
              </TouchableOpacity>
              <TouchableOpacity onPress={this._toggleTextModal}>
                <Icon name='mode-edit' flex={1} size={102} color={GlobalColors.primaryColor} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{height:15}}/>
        </Card>

        <Modal isVisible={this.state.isModalVisible} backdropOpacity={1.0} backdropColor={GlobalColors.primaryColor} style={{ margin: 10 }}>
          <ScrollView style={{ flex: 1 }}>
            <Header
              backgroundColor='#00cc66'
              statusBarProps={{ barStyle: 'light-content' }}
              rightComponent={this.renderRight()}
              outerContainerStyles={{height: Platform.OS === 'ios' ? 70 :  70 - 24, borderBottomWidth: 0}}
            />
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1 }}/>

              <View style={{ flex: 12 }}>
                <AudioExample />
              </View>

              <View style={{ flex: 2 }}>
                <Button
                  large
                  onPress={this._toggleModal}
                  backgroundColor="#fff"
                  color={GlobalColors.primaryColor}
                  rounded={true}
                  fontSize={22}
                  fontWeight='bold'
                  title='SUBMIT' />
              </View>
            </View>
          </ScrollView>
        </Modal>

        <Modal isVisible={this.state.isTextModalVisible} backdropOpacity={1.0} backdropColor={GlobalColors.primaryColor} style={{ margin: 10 }}>
          <ScrollView style={{ flex: 1 }}>
            <Header
              backgroundColor='#00cc66'
              statusBarProps={{ barStyle: 'light-content' }}
              rightComponent={this.renderRight()}
              outerContainerStyles={{height: Platform.OS === 'ios' ? 70 :  70 - 24, borderBottomWidth: 0}}
            />
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1 }}/>

              <View style={{ flex: 12 }}>
                <AudioExample />
              </View>

              <View style={{ flex: 2 }}>
                <Button
                  large
                  onPress={this._toggleModal}
                  backgroundColor="#fff"
                  color={GlobalColors.primaryColor}
                  rounded={true}
                  fontSize={22}
                  fontWeight='bold'
                  title='SUBMIT' />
              </View>
            </View>
          </ScrollView>
        </Modal>

      </View>
    );
  }
}

export default ExerciseCard;
