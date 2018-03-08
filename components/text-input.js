import React, { Component } from 'react';
import {
  Text,
  TextInput,
  Keyboard,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';

import { GlobalColors, GlobalStyles } from '../themes/global-styles';


export default class TextInputMH extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Multiline Placeholder',
    };
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{flex: 1}}>
         <View style={{
           borderColor: '#fff',
           borderWidth: 2,
           height: 200,
         }}>
           <TextInput
             multiline = {true}
             numberOfLines = {4}
             editable= {true}
             onChangeText={(text) => this.setState({text})}
             value={this.state.text}
             returnKeyType={"done"}
             blurOnSubmit={true}
             onSubmitEditing={Keyboard.dimiss}
             maxHeight={200}
             style={{flex: 1, padding: 6}}
           />
         </View>
       </View>
      </TouchableWithoutFeedback>
    );
  }
}
