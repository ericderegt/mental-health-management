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
    bgColor: '#798f79',
    id: 1,
  },
  {
    name: 'DBT Exercises',
    icon: 'landscape',
    bgColor: '#7ebeff',
    id: 2,
  },
  {
    name: 'Articles',
    icon: 'local-library',
    bgColor: '#ffa5d2',
    id: 3,
  },
  {
    name: 'Videos',
    icon: 'local-movies',
    bgColor: '#52a500',
    id: 4,
  },
  {
    name: 'Thoughts',
    icon: 'filter-drama',
    bgColor: '#ffbe7e',
    id: 5,
  },
  {
    name: 'Challenges',
    icon: 'flight',
    bgColor: '#e6e600',
    id: 6,
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
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 0, paddingRight: 10, paddingLeft: 10}}>
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
