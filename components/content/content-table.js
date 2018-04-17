import React, { Component } from 'react';
import { FlatList, Text, StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo';

import { GlobalStyles, GlobalColors } from '../../themes/global-styles';

class ContentTable extends React.PureComponent {
  onPressCard = (item) => {
      const { navigate } = this.props.navigation;
      navigate('Detail', { item: item });
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => (
    <View>
      <TouchableOpacity
        onPress={() => this.onPressCard(item)}
      >
        <View style={{height:5}}/>
        <LinearGradient
          colors={['#81C784', '#66BB6A', GlobalColors.primaryColor]}
        >
          <View style={styles.card}>
            <Text style={[GlobalStyles.text, styles.text]}>{item.name}</Text>
          </View>
        </LinearGradient>
        <View style={{height:5}}/>
      </TouchableOpacity>
    </View>
  );

  render() {
    const { params } = this.props.navigation.state;

    return (
      <ScrollView style={styles.container}>
        <FlatList
          data={params.data}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.backgroundColor,
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
  card: {
    flex: 1,
    minHeight: 100,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ContentTable;
