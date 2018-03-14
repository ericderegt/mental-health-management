import React, { Component } from 'react';
import { ScrollView, View, Text, Picker, StyleSheet, Dimensions, Image } from 'react-native';
import { List, ListItem, Slider } from 'react-native-elements';

import Carousel from 'react-native-snap-carousel';
import { LinearGradient } from 'expo';

import CheckIn from '../components/home/check-in';
import DailyGoal from '../components/home/daily-goal';
import MH_Slider from '../components/mh-slider';
import { GlobalStyles, GlobalColors } from '../themes/global-styles';

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



class Home extends Component {
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

      <View style={styles.checkIn}>
        <CheckIn/>
      </View>

      <View style={styles.dailyGoal}>
        <DailyGoal/>
      </View>

      <View style={{flex: 1, padding: 0}}>
        <View style={styles.sectionHeader}>
          <Text style={GlobalStyles.text}>For You</Text>
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
          <Text style={GlobalStyles.text}>Recent</Text>
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
          <Text style={GlobalStyles.text}>Featured</Text>
        </View>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={ENTRIES1}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
      </View>

      <View style={styles.streaks}>
        <View style={styles.sectionHeader}>
          <Text style={GlobalStyles.text}>Streaks</Text>
        </View>
        <Text style={GlobalStyles.subText}>Meditation</Text>
        <Text style={GlobalStyles.subText}>Exercise</Text>
      </View>

      <View style={styles.quote}>
        <Text style={GlobalStyles.text}>“I’ve decided to be happy because it is good for my health.” – Voltaire</Text>
      </View>

    </ScrollView>
    );
  }
}

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
  },
  checkIn: {
    flex: 1,
    height: viewportHeight * 0.2,
  },
  dailyGoal: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 0,
    paddingLeft: 10,
  },
  streaks: {
    flex: 1,
    height: viewportHeight * 0.2,
    backgroundColor: '#e4e8e4',
  },
  quote: {
    flex: 1,
    height: viewportHeight * 0.15,
    backgroundColor: '#b9c5b9',
  },
});

export default Home;
