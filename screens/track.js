import React, { Component } from 'react';
import { ScrollView, View, Text, Picker, StyleSheet, Dimensions, Image } from 'react-native';
import { List, ListItem, Slider } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';

import MH_Slider from '../components/mh-slider';
import { GlobalStyles, GlobalColors } from '../themes/global-styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  slide: {
    width: 200,
  },
  sectionHeader: {
    padding: 10,
    backgroundColor: '#ccc',
  }
});

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

export const ENTRIES1 = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg'
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg'
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
    },
    {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/lceHsT6l.jpg'
    }
];



class Track extends Component {
  constructor (props) {
    super(props)
  };

  _renderItem ({item, index}) {
      return (
        <View style={styles.slide}>
          <Image source={{uri: item.illustration}} style={{height: 150, width: 175}}/>
          <Text style={styles.title}>{ item.title }</Text>
        </View>
      );
  }

  render() {
    return (
    <ScrollView style={{flex: 1}}>

      <View style={{flex: 1, padding: 0}}>
        <View style={styles.sectionHeader}>
          <Text style={GlobalStyles.text}>Sleep</Text>
        </View>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={ENTRIES1}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
      </View>

      <View style={{flex: 1, padding: 0}}>
        <View style={styles.sectionHeader}>
          <Text style={GlobalStyles.text}>Depression</Text>
        </View>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={ENTRIES1}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
      </View>

      <View style={{flex: 1, padding: 0}}>
        <View style={styles.sectionHeader}>
          <Text style={GlobalStyles.text}>Meditation</Text>
        </View>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={ENTRIES1}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
      </View>

      <View style={{flex: 1, padding: 0}}>
        <View style={styles.sectionHeader}>
          <Text style={GlobalStyles.text}>Exercise</Text>
        </View>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={ENTRIES1}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
      </View>

      <View style={{flex: 1, padding: 0}}>
        <View style={styles.sectionHeader}>
          <Text style={GlobalStyles.text}>Food</Text>
        </View>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={ENTRIES1}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
      </View>

      <View style={{flex: 1, padding: 0}}>
        <View style={styles.sectionHeader}>
          <Text style={GlobalStyles.text}>Relaxation</Text>
        </View>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={ENTRIES1}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
      </View>

    </ScrollView>
    );
  }
}

export default Track;
