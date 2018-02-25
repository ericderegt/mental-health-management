import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  Keyboard,
  StyleSheet,
  View,
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

import globalStyle from './components/style';
import GridItem from './components/gridItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

class Home extends Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  render() {
    const buttons = ['Bad', 'Good', 'Great']
    const { selectedIndex } = this.state


    return (
      <View style={styles.container}>
        <View>
          <Card
            title='How are you feeling?'
            >
            <ButtonGroup
              onPress={this.updateIndex}
              selectedIndex={selectedIndex}
              buttons={buttons}
              containerStyle={{height: 50}}
            />
          </Card>
          <Card
            title='What is your goal for today?'
            >
            <TextInput
              editable={true}
              backgroundColor='#f5f5f5'
              style={{height: 200, shadowOffset: {width: 0.25,height: 1}, shadowColor: 'black', shadowOpacity: 0.25}}
              borderColor='#20b2aa'
              borderWidth={2}
              borderRadius={10}
              multiline={true}
              placeholder="I want to ..."
              clearTextOnFocus={true}
              onSubmitEditing={Keyboard.dismiss}
              padding={5}
              returnKeyType='done'
            />
          </Card>
        </View>
        <View style={{flexDirection: 'row', padding: 5}}>
            <View style={{flex: 1}}/>
            <Button
              title='Submit'
              textStyle={{fontSize: 18}}
              buttonStyle={{width: 100, height: 50, backgroundColor: '#20b2aa'}}
              iconRight={{ name: 'input'}}
              raised={true}
            />
        </View>
    </View>
    );
  }
}

export default Home;
