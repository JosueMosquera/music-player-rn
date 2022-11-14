import {View, Text, TouchableOpacity} from 'react-native';
import {menuStyles} from './styles';
const MainMenu = ({navigation}) => {
  return (
    <>
      <View style={menuStyles.menuContainer}>
        <Text style={menuStyles.title}>Menú Principal</Text>
        <TouchableOpacity
          style={menuStyles.button}
          onPress={() => navigation.navigate('Player')}>
          <Text style={menuStyles.buttonText}>Listen Music!</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MainMenu;
