import React, { Component } from 'react';
import { View, Text } from 'react-native';

import TextExercise from './text-exercise';
import { GlobalStyles, GlobalColors } from '../../themes/global-styles';

class Detail extends Component {
  constructor (props) {
    super(props)
  };

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View style={{ flex: 1 }}>
        {(function() {
            switch(params.item.category_id) {
                case 1:
                    return <TextExercise/>;
                case 2:
                    return <Text>2</Text>;
                case 3:
                    return <Text>3</Text>;
                default:
                    return null;
            }
        })()}
      </View>
    );
  }
}

export default Detail;
