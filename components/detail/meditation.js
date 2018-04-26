import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, WebView, TouchableHighlight } from 'react-native';

import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo';

import { Asset, Audio, Font, Video } from 'expo';

import { GlobalStyles, GlobalColors } from '../../themes/global-styles';

const exerciseObj =
  {
    name: 'Breathing Meditation',
    id: 1,
    text: '',
    category_id: 3,
    duration: 5,
    uri: 'http://marc.ucla.edu/mpeg/01_Breathing_Meditation.mp3',
  }

class Icon {
  constructor(module, width, height) {
    this.module = module;
    this.width = width;
    this.height = height;
    Asset.fromModule(this.module).downloadAsync();
  }
}

class PlaylistItem {
  constructor(name, uri, isVideo) {
    this.name = name;
    this.uri = uri;
    this.isVideo = isVideo;
  }
}

const ICON_PLAY_BUTTON = new Icon(require('../../assets/images/play-arrow.png'), 64, 71);
const ICON_PAUSE_BUTTON = new Icon(require('../../assets/images/pause-button.png'), 81, 81);
const ICON_STOP_BUTTON = new Icon(require('../../assets/images/stop-button.png'), 44, 44);

const LOADING_STRING = '... loading ...';
const LOOPING_TYPE_ALL = 0;
const LOOPING_TYPE_ONE = 1;

class MeditationExercise extends Component {
  constructor (props) {
    super(props);
    this.index = 0;
    this.isSeeking = false;
    this.shouldPlayAtEndOfSeek = false;
    this.playbackInstance = null;
    this.state = {
      showVideo: false,
      playbackInstanceName: LOADING_STRING,
      loopingType: LOOPING_TYPE_ALL,
      muted: false,
      playbackInstancePosition: null,
      playbackInstanceDuration: null,
      shouldPlay: false,
      isPlaying: false,
      isBuffering: false,
      isLoading: false,
      fontLoaded: false,
      shouldCorrectPitch: true,
      volume: 1.0,
      rate: 1.0,
      poster: false,
      useNativeControls: false,
      fullscreen: false,
    };
  };

  _onPlayPausePressed = () => {
    if (this.playbackInstance != null) {
      if (this.state.isPlaying) {
        this.playbackInstance.pauseAsync();
      } else {
        this.playbackInstance.playAsync();
      }
    } else {
      this._loadNewPlaybackInstance(true);
    }
  };

  _onStopPressed = () => {
    if (this.playbackInstance != null) {
      this.playbackInstance.stopAsync();
    }
  };

  async _updatePlaybackInstanceForIndex(playing) {
    this._loadNewPlaybackInstance(playing);
  }

  async _loadNewPlaybackInstance(playing) {
    if (this.playbackInstance != null) {
      await this.playbackInstance.unloadAsync();
      this.playbackInstance.setOnPlaybackStatusUpdate(null);
      this.playbackInstance = null;
    }

    const source = { uri: this.props.item.uri };
    const initialStatus = {
      shouldPlay: playing,
      rate: this.state.rate,
      shouldCorrectPitch: this.state.shouldCorrectPitch,
      volume: this.state.volume,
      isMuted: this.state.muted,
      isLooping: this.state.loopingType === LOOPING_TYPE_ONE,
    };

    const { sound, status } = await Audio.Sound.create(
      source,
      initialStatus,
      this._onPlaybackStatusUpdate
    );
    this.playbackInstance = sound;
  }

  _onPlaybackStatusUpdate = status => {
    if (status.isLoaded) {
      this.setState({
        playbackInstancePosition: status.positionMillis,
        playbackInstanceDuration: status.durationMillis,
        shouldPlay: status.shouldPlay,
        isPlaying: status.isPlaying,
        isBuffering: status.isBuffering,
        rate: status.rate,
        muted: status.isMuted,
        volume: status.volume,
        shouldCorrectPitch: status.shouldCorrectPitch,
      });
      if (status.didJustFinish && !status.isLooping) {
        this._updatePlaybackInstanceForIndex(true);
      }
    } else {
      if (status.error) {
        console.log(`FATAL PLAYER ERROR: ${status.error}`);
      }
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>

        <View style={{minHeight: 200}}>
          <LinearGradient
            colors={[this.props.item.bgColor, GlobalColors.backgroundColor]}
            style={{
              flex: 1,
            }}
          >
            <View style={{flex: 1, alignItems:'center', justifyContent:'center', padding: 10}}>
              <View style={{padding: 10}}/>
              <Text style={GlobalStyles.text}>{this.props.item.name}</Text>
              <View style={{padding: 10}}/>
            </View>
          </LinearGradient>
        </View>

        <View style={{padding: 10, marginBottom: 10}}/>

        <View style={{padding: 30, justifyContent: 'center', alignItems: 'center'}}>

          <View style={{maxHeight: ICON_PAUSE_BUTTON.height, width: ICON_PAUSE_BUTTON.width}}>
            <TouchableHighlight
              underlayColor={GlobalColors.backgroundColor}
              onPress={this._onPlayPausePressed}
              >

              <Image
                style={{maxHeight: ICON_PAUSE_BUTTON.height, maxWidth: ICON_PAUSE_BUTTON.width}}
                source={this.state.isPlaying ? ICON_PAUSE_BUTTON.module : ICON_PLAY_BUTTON.module}
                />
            </TouchableHighlight>
          </View>

          <View style={{height: 60}}/>

          <View style={{maxHeight: ICON_STOP_BUTTON.height, width: ICON_STOP_BUTTON.width}}>
            <TouchableHighlight
              underlayColor={GlobalColors.backgroundColor}
              onPress={this._onStopPressed}
              >

              <Image
                style={{maxHeight: ICON_STOP_BUTTON.height, maxWidth: ICON_STOP_BUTTON.width}}
                source={ICON_STOP_BUTTON.module} />
            </TouchableHighlight>
          </View>

        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.backgroundColor,
  },
  mainText: {
    textAlign: 'justify',
  },
  smallText: {
    fontSize: 18,
    textAlign: 'justify',
  },
});

export default MeditationExercise;
