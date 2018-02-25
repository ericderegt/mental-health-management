import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Thoughts extends Component {
  render() {
    return (
      <ScrollView>
        <List>
          <ListItem
            title="Test"
            rightTitle="test"
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Birthday"
            hideChevron
          />
          <ListItem
            title="City"
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

export default Thoughts;
