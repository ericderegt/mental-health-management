import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { Button, Header, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo';
import Modal from "react-native-modal";

import { GlobalStyles, GlobalColors } from '../../themes/global-styles';
import MultiSelectList from '../modal-list';

const checkInList = [
  {
    name: 'Happy',
    id: 1,
    checked: false,
  },
  {
    name: 'Excited',
    id: 2,
    checked: false,
  },
  {
    name: 'Calm',
    id: 3,
    checked: false,
  },
  {
    name: 'Angry',
    id: 4,
    checked: false,
  },
  {
    name: 'Sad',
    id: 5,
    checked: false,
  },
]


class CheckIn extends Component {
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
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[GlobalColors.primaryColor, '#00e673', '#00994d']}
          style={{
            flex: 1,
          }}
        >
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View>
              <Text style={[GlobalStyles.text,styles.text]}>How are you feeling?</Text>
              <View style={{height: 10}}/>
              <Button
                onPress={() => navigate('CheckInSurvey')}
                color='#fff'
                outline={true}
                rounded={true}
                fontSize={14}
                fontWeight='bold'
                title='CHECK IN' />
            </View>
          </View>
        </LinearGradient>

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
                  <Text style={GlobalStyles.text}>I'm feeling</Text>
                </View>
                <MultiSelectList data={checkInList} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#fff',
  }
});

export default CheckIn;
