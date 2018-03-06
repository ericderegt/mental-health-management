import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Card, Button, Icon, Header } from 'react-native-elements';
import Modal from "react-native-modal";

import { GlobalStyles, GlobalColors } from '../themes/global-styles';
import MultiSelectList from './modal-list';

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

const eatList = [
  {
    name: 'Breakfast',
    id: 1,
    checked: false,
  },
  {
    name: 'Lunch',
    id: 2,
    checked: false,
  },
  {
    name: 'Dinner',
    id: 3,
    checked: false,
  },
  {
    name: 'Snack',
    id: 4,
    checked: false,
  },
  {
    name: 'Protein',
    id: 5,
    checked: false,
  },
]

class FoodCard extends Component {
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
              <Icon name='restaurant-menu' flex={1} size={36} color={GlobalColors.greyColor} />
            </View>
            <View style={styles.textBox}>
              <Text style={GlobalStyles.text}>Food</Text>
              <Text style={GlobalStyles.subText}>Add a meal</Text>
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
              <View style={{ flex: 12 }}>
                <View style={{padding: 10, marginBottom: 10, marginTop: 10}}>
                  <Text style={[GlobalStyles.text,styles.text]}>What did you eat?</Text>
                </View>
                <MultiSelectList data={eatList} />
              </View>

              <View style={{ flex: 2, marginTop: 10 }}>
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

export default FoodCard;
