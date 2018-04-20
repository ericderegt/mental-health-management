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
});

const relaxList = [
  {
    name: 'Dinner with friends',
    id: 1,
    checked: false,
  },
  {
    name: 'Meditated',
    id: 2,
    checked: false,
  },
  {
    name: 'Read a book',
    id: 3,
    checked: false,
  },
  {
    name: 'Watched TV',
    id: 4,
    checked: false,
  },
  {
    name: 'Exercised',
    id: 5,
    checked: false,
  },
]


class RelaxCard extends Component {
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
              <Icon name='beach-access' flex={1} size={36} color={GlobalColors.greyColor} />
            </View>
            <View style={styles.textBox}>
              <Text style={GlobalStyles.text}>Relax</Text>
              <Text style={GlobalStyles.subText}>Add an activity</Text>
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
              statusBarProps={{ barStyle: 'default' }}
              rightComponent={this.renderRight()}
              outerContainerStyles={{height: Platform.OS === 'ios' ? 70 :  70 - 24, borderBottomWidth: 0}}
            />
            <View style={{ flex: 1 }}>
              <View style={{ flex: 12 }}>
                <View style={{padding: 10, marginBottom: 10, marginTop: 10}}>
                  <Text style={GlobalStyles.text}>What did you do to relax?</Text>
                </View>
                <MultiSelectList data={relaxList} />
              </View>
              <View style={{height:20}}/>
              <View style={{ flex: 2, marginTop: 10 }}>
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

export default RelaxCard;
