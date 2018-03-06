import React, { Component } from 'react';
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

import CheckBox from 'react-native-check-box';

import { GlobalStyles, GlobalColors } from '../themes/global-styles';


styles = StyleSheet.create({
  itemText: {
    textAlign: 'left',
  }
});

class ModalListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    const textColor = this.props.selected ? "red" : "black";
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 10, borderWidth: 2, borderColor: GlobalColors.primaryColor }}>
          <View style={{ flex: 8 }}>
            <Text style={[GlobalStyles.text, styles.itemText]}>
              {this.props.name}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <CheckBox isChecked={this.props.selected} onClick={()=>this._onPress} checkBoxColor={GlobalColors.primaryColor} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}


class MultiSelectList extends React.PureComponent {
  state = {selected: (new Map(): Map<string, boolean>)};

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };

  _renderItem = ({item}) => (
    <ModalListItem
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      name={item.name}
      checked={item.checked}
    />
  );

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

export default MultiSelectList;
