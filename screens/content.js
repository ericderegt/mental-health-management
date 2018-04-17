import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  Keyboard,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  List,
  ListItem,
  Card,
  Button,
  Icon,
  ButtonGroup,
} from 'react-native-elements';

import { StackNavigator } from 'react-navigation';

import { GlobalStyles, GlobalColors } from '../themes/global-styles';

import ContentList from '../components/content/content-list';
import ContentTable from '../components/content/content-table';
import Detail from '../components/detail/base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.backgroundColor,
  },
});

const contentList = [
  {
    name: 'Meditations',
    icon: 'filter-vintage',
    bgColor: '#81C784',
    id: 1,
  },
  {
    name: 'Exercises',
    icon: 'landscape',
    bgColor: '#4CAF50',
    id: 2,
  },
  {
    name: 'Articles',
    icon: 'local-library',
    bgColor: '#388E3C',
    id: 3,
  },
  {
    name: 'Videos',
    icon: 'local-movies',
    bgColor: '#1B5E20',
    id: 4,
  },
]

class Content extends Component {
  constructor () {
    super()
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{height: 10}}/>
        <View>
          <View style={{ flex: 1}}>
            <ContentList data={contentList} navigation={this.props.navigation} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export const ContentStack = StackNavigator({
  Content: {
    screen: Content,
    navigationOptions: {
      title: 'Content Library',
      headerTintColor: GlobalColors.primaryColor,
      headerTitleStyle: {
        color: GlobalColors.blackColor,
      },
    },
  },
  ContentTable: {
    screen: ContentTable,
    navigationOptions: {
      title: '',
      headerTintColor: GlobalColors.primaryColor,
      headerTitleStyle: {
        color: GlobalColors.blackColor,
      },
    },
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: '',
      headerTintColor: GlobalColors.primaryColor,
      headerTitleStyle: {
        color: GlobalColors.blackColor,
      },
    },
  },
})

export default ContentStack;
