import {StyleSheet} from 'react-native';

export const menuStyles = StyleSheet.create({
  menuContainer: {
    textAlign: 'center',
    flex: 1,
    alignItems: 'center',
    minHeight: 600,
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    color: '#0a5c5a',
  },
  button: {
    maxHeight: 60,
    width: 160,
    marginTop: 10,
    backgroundColor: 'gray',

    borderRadius: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
