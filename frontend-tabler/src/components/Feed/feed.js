import React, { useState } from 'react';

import {
    ContainerHome,
    Input,
    ViewOpenRoom,
    TextPesq,
    ButtonSearch,
    ViewSearch,
    TextSearch,
    ViewSearchRoom,
    ImgSearchConfig,
    ButtonSearch1
} from './styles';

import api from '../../api/api';
import ListItems from './feed_view';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, ImageBackground, } from 'react-native';

export default function Feed({ route, navigation }) {

    const styles = StyleSheet.create({
        backgroundImage: {
            flex: 1,
            height: '100%',
            width: '100%',
            alignItems: 'center',
        },
        container: {
            flex: 1,
            backgroundColor: '#D9BA8E',
            alignItems: 'center',
            justifyContent: 'center',
        },
        body: {
            backgroundColor: '#D9BA8E'
        }
    });

    const [titleSearch, setTitleSearch] = useState('');
    const [tables, setTables] = useState([]);

    const backFeed = () => {
        setTitleSearch({ titleSearch: '' });
        var search = undefined;
        handleLogin(undefined);
    }

    const handleChange = () => {
        var search = 'homePage';
        if (titleSearch !== '') {
            var search = 'searchRooms/' + titleSearch
        } else {
            var search = 'homePage'
        };
        handleLogin(search);
    }

    const handlePressJoinRoom = (RoomID) => {
        //Aqui vou passar os parametros para a Pre-view da sala 
        console.log(RoomID)
    }

    async function handleLogin(search) {    //Ta rodando dessa forma mas está em looping a requisição com o banco
        if (search === undefined) {
            var uri = 'homePage'
        } else {
            var uri = search;
        };

        const res = await api.get(`${uri}`);
        console.log(res.data)
        setTables(res.data)
        
    }

//Apartir daqui é a renderização em tela.
    let listaDeItens = null

    if (tables !== null) {
        listaDeItens = tables.map(item => {
            return <ListItems
                title={item.title}
                qtdeJog={item.qtdeJog}
                admMesa={item.admMesa}
                handlePressJoin={() => handlePressJoinRoom(item.id)}
            />
        })
    }
    else {
        return <ContainerHome>
            <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage} >
                <ViewSearch>
                    <Input placeholder="Pesquisar salas.."
                        value={titleSearch}
                        onChangeText={setTitleSearch} />

                    <ButtonSearch onPress={(handleChange())} ><TextSearch>Busca</TextSearch></ButtonSearch>
                </ViewSearch>
                <ViewSearchRoom>
                    <ImgSearchConfig source={require('../../assets/images/puts.png')} />
                    <TextPesq>Sorry Bro, you shall not pass son of a Bitch</TextPesq>
                    <ButtonSearch1 onPress={backFeed()} ><TextSearch>Voltar</TextSearch></ButtonSearch1>
                </ViewSearchRoom>

            </ImageBackground>
        </ContainerHome>
    }

    return (
        <ContainerHome>
            <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage} >
                <ViewSearch>
                    <Input placeholder="Pesquisar salas.."
                        value={titleSearch}
                        onChangeText={setTitleSearch} />

                    <ButtonSearch onPress={handleChange()} ><TextSearch>Busca</TextSearch></ButtonSearch>
                </ViewSearch>
                <ViewOpenRoom>
                    <ScrollView>

                        {listaDeItens}

                    </ScrollView>
                </ViewOpenRoom>

            </ImageBackground>
        </ContainerHome>

    )


}














/* import React, { Component } from 'react';
import { Video } from 'expo-av';
import { Image, Text, ImageBackground, StyleSheet } from 'react-native';

import {
    ContainerHome
} from '../Home/styles';

export default class Feed extends Component{
    render(){
        return(
        <ContainerHome>
          <Video
          source={ require('../../assets/videos/putin.mp4') }
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: "100%", height: "100%" }}>
          </Video>
          <Image source={require('../../assets/images/sputinikV.jpg')} style={styles.backgroundImage} />
        </ContainerHome>

)}}

const styles = StyleSheet.create({
  backgroundImage: {
      flex: 1,
      height: '100%',
      width: '100%',
      resizeMode: 'cover',
      alignItems: 'center',
  }
}); */