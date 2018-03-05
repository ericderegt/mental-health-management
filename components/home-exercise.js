import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Card, Button, Icon, Header } from 'react-native-elements';

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

  renderRight() {
    return (
      <TouchableOpacity onPress={this._toggleModal}>
        <Icon name='close' flex={1} size={28} color='#fff' />
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
              centerComponent={{ text: 'DEMO', style: { color: '#fff' } }}
              rightComponent={this.renderRight()}
              outerContainerStyles={{height: Platform.OS === 'ios' ? 70 :  70 - 24}}
            />
            <View style={{ flex: 1 }}>
              <View style={styles.textBox}>
                <Text style={GlobalStyles.text}>Relax</Text>
                <Text style={GlobalStyles.subText}>Add an activity</Text>
              </View>
            </View>
            <TouchableOpacity onPress={this._toggleModal}>
              <Button
                title='Submit'
                textStyle={{fontSize: 18}}
                buttonStyle={{width: 100, height: 50, backgroundColor: '#20b2aa'}}
                iconRight={{ name: 'input'}}
                raised={true}
              />
            </TouchableOpacity>
          </View>
        </Modal>

      </View>
    );
  }
}

export default ExerciseCard;
