import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Card, Button, Icon, Header } from 'react-native-elements';
import Modal from "react-native-modal";

import { GlobalStyles, GlobalColors } from '../../themes/global-styles';
import MultiSelectList from '../modal-list';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textBox: {
    flex: 6
  },
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    color: '#fff',
  }
});

const resultsList = [
  {
    name: 'Observe a leaf',
    id: 1,
    category_id: 1,
    bgColor: '#2E7D32',
    text: 'Collect a leaf off the ground from somewhere. This is especially easy in autumn. It doesn’t matter what kind of leaf it is or what it looks like. Any leaf will do. \n\nHold it in your hands and allow your attention to be fully absorbed by it. Observe it. Notice things about its physical characteristics. \n\nFor example, you could say to yourself, I notice that this leaf has three sharp points on one side, and a rounded edge on the other. Or, I see there’s yellowish lines radiating out from the bottom to the top. \n\nNotice textures, colors, and shapes without judging them as good or bad, pleasant or unpleasant, ugly or beautiful. Don’t assess or think about the leaf. Just observe it for what it is. Do this simple mindfulness exercise for five minutes.',
    duration: 5,
  },
  {
    name: 'How to cope with anxiety',
    id: 2,
    category_id: 2,
    text: 'Anxiety is one of most prevalent mental health disorders, with 1 out of 14 people around the world being likely affected. Leading up to conditions such as depression, increased risk for suicide, disability and requirement of high health services, very few people who often need treatment actually receive it. In her talk “How to cope with anxiety”, Olivia Remes of the University of Cambridge will share her vision on anxiety and will unravel ways to treat and manage this health disorder',
    bgColor: '#81C784',
    uri: 'https://www.youtube.com/watch?v=WWloIAQpMcQ',
    duration: 15,
  },
  {
    name: 'Articles',
    id: 3,
    category_id: 3,
    bgColor: '#388E3C',
    duration: 2,
  },
  {
    name: 'Videos',
    id: 4,
    category_id: 2,
    bgColor: '#1B5E20',
    duration: 10,
  },
]

class ContentCard extends Component {
  constructor (props) {
    super(props)
  };

  onPressCard = () => {
      const { navigate } = this.props.navigation;
      navigate('ContentTable', { data: resultsList });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>

        <TouchableOpacity
          onPress={this.onPressCard}
        >

          <Card containerStyle={GlobalStyles.card}>
            <View style={{ flex: 1, padding: 10, backgroundColor: this.props.bgColor, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <Icon name={this.props.icon} flex={1} size={36} color={'#fff'} />
              </View>
              <View style={styles.textBox}>
                <Text style={[GlobalStyles.text, styles.text]}>{this.props.name}</Text>
              </View>
          </View>
          </Card>

        </TouchableOpacity>

      </View>
    );
  }
}

export default ContentCard;
