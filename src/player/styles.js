import {StyleSheet} from 'react-native';

export const playerStyles = StyleSheet.create({
  playerContainer: {
    flex: 1,
    minHeight: 600,
  },
  nowListeningContainer: {
    flex: 1,
    borderRadius: 25,
    backgroundColor: '#074240',
    minHeight: 10,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  musicListContainer: {
    flex: 1,
    minHeight: 400,
    margin: 10,
  },
  playingText: {
    fontSize: 14,
    color: 'white',
  },
  list: {
    borderRadius: 25,
    backgroundColor: '#074240',
    minHeight: 10,
    margin: 20,
  },
  songCard: {
    display: 'flex',
    flexDirection: 'row',
    margin: 15,
    justifyContent: 'space-between',
  },
  songImage: {height: 50, width: 50},
  songTitle: {
    color: 'white',
    fontWeight: '400',
  },

  button: {
    height: 30,
    width: 30,
    backgroundColor: 'white',
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
  },
});
