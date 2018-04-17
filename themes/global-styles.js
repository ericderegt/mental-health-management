import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';

const Fonts = {
  standard: Platform.OS === 'android'
    ? 'Roboto'
    : 'Avenir',
}

const GlobalColors = {
  primaryColor: '#4CAF50',
  greyColor: '#BDBDBD',
  blackColor: '#383836',
  backgroundColor: '#fff',
}

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    fontFamily: Fonts.standard,
    marginBottom: 2,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: GlobalColors.blackColor,
  },
  subText: {
    fontFamily: Fonts.standard,
    marginBottom: 2,
    textAlign: 'center',
    fontSize: 18,
    color: '#757575',
  },
  largeText: {
    fontFamily: Fonts.standard,
    marginBottom: 2,
    textAlign: 'center',
    fontSize: 28,
    color: GlobalColors.blackColor,
  },
});

module.exports = {
  GlobalStyles,
  GlobalColors,
};
