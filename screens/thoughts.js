import React, { Component } from 'react';
import {
  Text,
  TextInput,
  Keyboard,
  StyleSheet,
  View,
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 26,
  }
});

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
              <View style={{ flex: 1 }}/>

              <View style={{ flex: 12 }}>
                <Text>Blah</Text>
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
                  title='TEST' />
              </View>
            </View>
          </View>
        </Modal>

      </View>
    );
  }
}

export default Thoughts;
