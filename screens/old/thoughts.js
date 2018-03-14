import React, { Component } from 'react';
import {
  Text,
  Keyboard,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  Card,
  Button,
  Header,
  Icon,
} from 'react-native-elements';
import {
  Audio,
} from 'expo';
import Modal from "react-native-modal";

import { GlobalStyles, GlobalColors } from '../themes/global-styles';
import AudioExample from '../components/record-thought';
import ThoughtDropdown from '../components/thought-dropdown';
import TextInputMH from '../components/text-input';

import { category, emotions } from '../constants/thoughts-constants.js';

class Thoughts extends Component {
  constructor (props) {
    super(props)
  };

  state = {
    isModalVisible: false,
    isKeyboardModalVisible: false,
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  _toggleKeyboardModal = () =>
    this.setState({ isKeyboardModalVisible: !this.state.isKeyboardModalVisible });

  renderRight() {
    return (
      <TouchableOpacity onPress={this._toggleModal}>
        <Icon name='close' flex={1} size={36} color='#fff' />
      </TouchableOpacity>
    )
  }

  renderKeyboardRight() {
    return (
      <TouchableOpacity onPress={this._toggleKeyboardModal}>
        <Icon name='close' flex={1} size={36} color='#fff' />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={styles.container}>
          <View style={{backgroundColor: GlobalColors.primaryColor, flex: 1, justifyContent: 'center'}}>
            <Text style={[GlobalStyles.text, styles.text]}>What are you thinking?</Text>
          </View>
          <View style={{backgroundColor: '#000', flex: 2, flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity onPress={this._toggleModal}>
              <Icon name='keyboard-voice' flex={1} size={102} color={GlobalColors.primaryColor} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this._toggleKeyboardModal}>
              <Icon name='mode-edit' flex={1} size={102} color={GlobalColors.primaryColor} />
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor: GlobalColors.backgroundColor, flex: 2}}>
            <Text style={GlobalStyles.text}>Recent Thoughts</Text>
          </View>
        </View>

        <Modal isVisible={this.state.isModalVisible} backdropOpacity={1.0} backdropColor={GlobalColors.primaryColor} style={{ margin: 10 }}>
          <View style={{ flex: 1 }}>
            <Header
              backgroundColor='#00cc66'
              statusBarProps={{ barStyle: 'light-content' }}
              rightComponent={this.renderRight()}
              outerContainerStyles={{height: Platform.OS === 'ios' ? 70 :  70 - 24, borderBottomWidth: 0}}
            />
            <View style={{ flex: 1 }}>
              <View style={{flex: 12}}>
                <ScrollView contentContainerStyle={styles.scroll}>
                  <View style={{ flex: 2 }}>
                    <ThoughtDropdown values={emotions} dropdownType={"emotions"} />
                    <ThoughtDropdown values={category} dropdownType={"category"} />
                  </View>
                  <View style={{ flex: 1}}/>
                  <View style={{ flex: 10 }}>
                    <AudioExample />
                  </View>
                </ScrollView>
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

        <Modal isVisible={this.state.isKeyboardModalVisible} backdropOpacity={1.0} backdropColor={GlobalColors.primaryColor} style={{ margin: 10 }}>
          <View style={{ flex: 1 }}>
            <Header
              backgroundColor='#00cc66'
              statusBarProps={{ barStyle: 'light-content' }}
              rightComponent={this.renderKeyboardRight()}
              outerContainerStyles={{height: Platform.OS === 'ios' ? 70 :  70 - 24, borderBottomWidth: 0}}
            />
            <View style={{ flex: 1 }}>
              <View style={{ flex: 3, marginTop: 25, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={GlobalStyles.text}>Add a thought</Text>
                <ThoughtDropdown values={emotions} dropdownType={"emotions"} />
                <ThoughtDropdown values={category} dropdownType={"category"} />
              </View>

              <View style={{ flex: 4, paddingTop: 20 }}>
                <Text style={[GlobalStyles.text,styles.smallText]}>What are you thinking?</Text>
                <View style={{padding: 10}}>
                  <TextInputMH/>
                </View>
              </View>

              <View style={{ flex: 2 }}>
                <Button
                  large
                  onPress={this._toggleKeyboardModal}
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
    fontSize: 26,
  },
  smallText: {
    fontSize: 18,
    color: GlobalStyles.blackColor,
  },
  scroll: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default Thoughts;
