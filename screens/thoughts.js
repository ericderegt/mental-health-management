import React, { Component } from 'react';
import {
  Text,
  TextInput,
  Keyboard,
  StyleSheet,
  View,
} from 'react-native';
import {
  Card,
  Button,
  Icon,
} from 'react-native-elements';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Thoughts extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Card
            title='What are you thinking?'
            >
            <TextInput
              editable={true}
              backgroundColor='#f5f5f5'
              style={{height: 200, shadowOffset: {width: 0.25,height: 1}, shadowColor: 'black', shadowOpacity: 0.25}}
              borderColor='#20b2aa'
              borderWidth={2}
              borderRadius={10}
              multiline={true}
              placeholder="I ..."
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

export default Thoughts;
