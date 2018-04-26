import React, { Component } from 'react';
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import { GlobalStyles, GlobalColors } from '../themes/global-styles';


styles = StyleSheet.create({
  itemText: {
    textAlign: 'left',
    color: GlobalColors.blackColor,
  }
});

class ModalListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
    this.props.selection(this.props.id);
  };

  render() {
    const textColor = this.props.selected ? "red" : "black";
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding: 10, borderWidth: 4, borderColor: GlobalColors.backgroundColor }}>
          <View style={{ flex: 8 }}>
            <Text style={[GlobalStyles.subText, styles.itemText]}>
              {this.props.name}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            {
              this.props.selected?
                <Icon name='check-box' flex={1} size={28} color={GlobalColors.primaryColor} />:
                <Icon name='check-box-outline-blank' flex={1} size={28} color={GlobalColors.primaryColor} />
            }
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
      selection={this.props.selection}
      selected={!!this.state.selected.get(item.id)}
      name={item.name}
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
