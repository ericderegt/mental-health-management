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

import { GlobalStyles, GlobalColors } from '../themes/global-styles';

import ContentList from '../components/content/content-list';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
        <View style={{height: 44}}/>
        <View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10, paddingRight: 10, paddingLeft: 10}}>
            <View style={{flex:1}}><Text style={[GlobalStyles.text]}>Content Library</Text></View>
          </View>
          <View style={{ flex: 1}}>
            <ContentList data={contentList} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Content;
