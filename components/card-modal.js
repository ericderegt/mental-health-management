import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Header } from 'react-native-elements';
import Modal from "react-native-modal";

import { GlobalStyles, GlobalColors } from '../themes/global-styles';
import MH_Slider from './mh-slider';
import MultiSelectList from './modal-list';


class CardModal extends Component {
  constructor (props) {
    super(props)
  };

  render() {
    return (
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
    );
  }
}

export default CardModal;
