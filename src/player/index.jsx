import React from 'react';
import {Text, View} from 'react-native';
import MusicList from './MusicList';
import {playerStyles} from './styles';

const MusicPlayer = () => {
  return (
    <View style={playerStyles.playerContainer}>
      <View style={playerStyles.nowListeningContainer}>
        <Text style={playerStyles.playingText}>Reproduciendo</Text>
      </View>
      <View style={playerStyles.musicListContainer}>
        <MusicList />
      </View>
    </View>
  );
};

export default MusicPlayer;
