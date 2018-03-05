import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Card, Button, Icon, Header } from 'react-native-elements';
import Modal from "react-native-modal";
import CustomMultiPicker from "react-native-multiple-select-list";

import { GlobalStyles, GlobalColors } from '../themes/global-styles';
import ExerciseConstants from '../constants/exercise-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textBox: {
    flex: 6
  },
  black: {
    backgroundColor: '#000',
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
              <Icon name='add' justifyContent='flexEnd' flex={1} size={36} color={GlobalColors.primaryColor} />
            </TouchableOpacity>
          </View>
        </Card>

        <Modal isVisible={this.state.isModalVisible} backdropOpacity={1.0} backdropColor={GlobalColors.primaryColor}>
          <View style={{ flex: 1 }}>
            <Header
              backgroundColor='#00cc66'
              statusBarProps={{ barStyle: 'light-content' }}
              rightComponent={this.renderRight()}
              outerContainerStyles={{height: Platform.OS === 'ios' ? 70 :  70 - 24, borderBottomWidth: 0}}
            />
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1 }}/>
              <CustomMultiPicker
                options={ExerciseConstants}
                search={false} // should show search bar?
                multiple={true} //
                placeholder={"Search"}
                placeholderTextColor={'#757575'}
                returnValue={"label"} // label or value
                callback={(res)=>{ console.log(res) }} // callback, array of selected items
                rowBackgroundColor={"#eee"}
                rowHeight={40}
                rowRadius={0}
                iconColor={GlobalColors.primaryColor}
                iconSize={30}
                selectedIconName={"ios-checkmark-circle-outline"}
                unselectedIconName={"ios-radio-button-off-outline"}
                scrollViewHeight={500}
              />
              <Button
                large
                onPress={this._toggleModal}
                backgroundColor="#fff"
                color={GlobalColors.primaryColor}
                rounded={true}
                fontSize={22}
                style={GlobalStyles.card}
                title='SUBMIT' />
              <View style={{ flex: 1 }}/>
            </View>
          </View>
        </Modal>

      </View>
    );
  }
}

export default ExerciseCard;
