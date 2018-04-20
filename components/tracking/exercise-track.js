import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Card, Button, Icon, Header} from 'react-native-elements';
import Modal from "react-native-modal";

import { GlobalStyles, GlobalColors } from '../../themes/global-styles';
import ExerciseConstants from '../../constants/exercise-constants';
import MH_Slider from '../mh-slider';
import MultiSelectList from '../modal-list';

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
    isModalVisible: false
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

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
          <View style={{height:15}}/>
        </Card>

        <Modal isVisible={this.state.isModalVisible} backdropOpacity={1.0} backdropColor='#fff' style={{ margin: 10 }}>
          <ScrollView style={{ flex: 1 }}>
            <Header
              backgroundColor='#fff'
              statusBarProps={{ barStyle: 'normal' }}
              rightComponent={this.renderRight()}
              outerContainerStyles={{height: Platform.OS === 'ios' ? 70 :  70 - 24, borderBottomWidth: 0}}
            />
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1 }}/>

              <View style={{ flex: 12 }}>
                <View style={{backgroundColor: '#fff', padding: 10, marginBottom: 10}}>
                  <Text style={GlobalStyles.text}>Exercise</Text>
                  <View style={{height:20}}/>
                  <MH_Slider name="Exercise"/>
                </View>
                <View style={{padding:20}}>
                  <MultiSelectList data={exerciseList} />
                </View>
              </View>
              <View style={{height:15}}/>
              <View style={{ flex: 2 }}>
                <Button
                  large
                  onPress={this._toggleModal}
                  backgroundColor={GlobalColors.primaryColor}
                  color='#fff'
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
