import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Card, Button, Icon, Header} from 'react-native-elements';
import Modal from "react-native-modal";

import { GlobalStyles, GlobalColors } from '../themes/global-styles';
import ExerciseConstants from '../constants/exercise-constants';
import MH_Slider from './mh-slider';
import MultiSelectList from './modal-list';

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
    name: 'Soulcycle',
    id: 3,
    checked: false,
  },
  {
    name: 'SLT',
    id: 4,
    checked: false,
  },
  {
    name: 'Tennis',
    id: 5,
    checked: false,
  },
]


class ExerciseCard extends Component {
  constructor (props) {
    super(props)
  };

  state = {
    isModalVisible: false
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  renderRight() {
    return (
      <TouchableOpacity onPress={this._toggleModal}>
        <Icon name='close' flex={1} size={36} color='#fff' />
      </TouchableOpacity>
    )
  }

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
              <Icon name='add' justifyContent='flex-end' flex={1} size={36} color={GlobalColors.primaryColor} />
            </TouchableOpacity>
          </View>
        </Card>

        <Modal isVisible={this.state.isModalVisible} backdropOpacity={1.0} backdropColor={GlobalColors.primaryColor} style={{ margin: 10 }}>
          <View style={{ flex: 1 }}>
            <Header
              backgroundColor='#00cc66'
              statusBarProps={{ barStyle: 'light-content' }}
              rightComponent={this.renderRight()}
              outerContainerStyles={{height: Platform.OS === 'ios' ? 70 :  70 - 24, borderBottomWidth: 0}}
            />
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1 }}/>

              <View style={{ flex: 12 }}>
                <View style={{backgroundColor: '#fff', padding: 10, marginBottom: 10}}>
                  <MH_Slider name="Exercise"/>
                </View>
                <MultiSelectList data={exerciseList} />
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
          </View>
        </Modal>

      </View>
    );
  }
}

export default ExerciseCard;
