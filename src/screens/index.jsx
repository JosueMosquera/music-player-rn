import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainMenu from '../mainMenu';
import MusicPlayer from '../player';
const NavigatorScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={MainMenu}
        options={{title: 'Menú'}}
      />
      <Stack.Screen
        name="Player"
        component={MusicPlayer}
        options={{title: 'Player'}}
      />
    </Stack.Navigator>
  );
};

export default NavigatorScreen;
