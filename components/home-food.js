import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

import { GlobalStyles, GlobalColors } from '../themes/global-styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textBox: {
    flex: 6
  }
});


class FoodCard extends Component {
  constructor (props) {
    super(props)
  };

  render() {
    return (
      <Card containerStyle={GlobalStyles.card}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Icon name='restaurant-menu' flex={1} size={36} color={GlobalColors.greyColor} />  
          </View>
          <View style={styles.textBox}>
            <Text style={GlobalStyles.text}>Food</Text>
            <Text style={GlobalStyles.subText}>Add a meal</Text>
          </View>
          <Icon name='add' justifyContent='flexEnd' flex={1} size={36} color={GlobalColors.primaryColor} />
        </View>
      </Card>
    );
  }
}

export default FoodCard;
