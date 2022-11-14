import React, {useState} from 'react';
import {FlatList, Text, View, Image, TouchableOpacity} from 'react-native';
import SoundPlayer from 'react-native-sound-player';

import {playerStyles} from './styles';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'La Diabla - Guardarraya',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/49/64/a2/4964a234-2a33-ab31-28fc-c54e57c75cfe/8429006214198.jpg/600x600bf-60.jpg',
    songName: 'ladiabla',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Let it be - The Beatles',
    image: 'https://cdn.culturagenial.com/es/imagenes/let-it-be-0-cke.jpg',
    songName: 'let',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Planeta Equis - 38 que no juega',
    image: 'https://i.ytimg.com/vi/22qLGvc4_bc/hqdefault.jpg',
    songName: 'nojuega',
  },
];

const Item = ({item}) => {
  const [buttonMode, setButton] = useState('play');
  return buttonMode === 'play' ? (
    <View style={playerStyles.songCard}>
      <Image source={{uri: item.image}} style={playerStyles.songImage} />
      <Text style={playerStyles.songTitle}>{item.title}</Text>
      <TouchableOpacity
        style={playerStyles.button}
        onPress={() => [
          SoundPlayer.playSoundFile(item.songName, 'mp3'),
          setButton('played'),
        ]}>
        <Image
          source={{
            uri: 'https://cdn2.iconfinder.com/data/icons/media-and-navigation-buttons-round/512/Button_3-512.png',
          }}
          style={playerStyles.button}
        />
      </TouchableOpacity>
    </View>
  ) : buttonMode === 'played' ? (
    <View style={playerStyles.songCard}>
      <Image source={{uri: item.image}} style={playerStyles.songImage} />
      <Text style={playerStyles.songTitle}>{item.title}</Text>
      <TouchableOpacity
        style={playerStyles.button}
        onPress={() => [
          SoundPlayer.pause(item.songName, 'mp3'),
          setButton('paused'),
        ]}>
        <Image
          source={{
            uri: 'https://e7.pngegg.com/pngimages/362/566/png-clipart-pause-button-logo-creative-commons-license-public-domain-wikimedia-commons-pause-icon-text-trademark.png',
          }}
          style={playerStyles.button}
        />
      </TouchableOpacity>
    </View>
  ) : buttonMode === 'paused' ? (
    <View style={playerStyles.songCard}>
      <Image source={{uri: item.image}} style={playerStyles.songImage} />
      <Text style={playerStyles.songTitle}>{item.title}</Text>
      <TouchableOpacity
        style={playerStyles.button}
        onPress={() => [
          SoundPlayer.resume(item.songName, 'mp3'),
          setButton('played'),
        ]}>
        <Image
          source={{
            uri: 'https://cdn2.iconfinder.com/data/icons/media-and-navigation-buttons-round/512/Button_3-512.png',
          }}
          style={playerStyles.button}
        />
      </TouchableOpacity>
    </View>
  ) : null;
};

const MusicList = () => {
  const renderItem = ({item}) => <Item item={item} />;

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      style={playerStyles.list}
    />
  );
};

export default MusicList;
