import React, { useEffect, useState } from 'react';

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
import { StyleSheet, ImageBackground } from 'react-native';

export default function Feed({route, navigation}) {

    const user = (route.params.userId)

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



    useEffect(() => {
        api.get('homePage')
            .then((res) => {
                setTables(res.data)
            })
       /*  console.log('passou no useEffect') */
      }, [tables]);

    const [titleSearch, setTitleSearch] = useState('');
    const [tables, setTables] = useState([]);
    
    const backFeed = () => {
        setTitleSearch('')
        /* console.log(titleSearch)
        console.log('passou no backFeed') */
        api.get('homePage')
            .then((res) => {
                setTables(res.data)
            })
    }

    function checkSearch (strPalavra){
        return strPalavra.includes('/',0)
    }

    function handleChange() {
        
        if (checkSearch(titleSearch) === true){
            setTables(null)
        }

        if ( titleSearch !== '' ) {
            var search = 'searchRooms/' + titleSearch
        } else {
            var search = 'homePage'
        };

        if (search === undefined) {
            var uri = 'homePage'
        } else {
            var uri = search;
        };

        api.get(`${uri}`)
            .then((res) => {
                setTables(res.data)
            })
        console.log('passou no handleChange')
    }

    const handlePressJoinRoom = (RoomID) => {
        //Aqui vou passar os parametros para a Pre-view da sala 
        navigation.navigate('Preview', {
            roomID: RoomID,
            userId: user
        })
        /* console.log(RoomID) */
    }

    //Apartir daqui é a renderização em tela.
    let listaDeItens = null

    if (tables !== null) {
        listaDeItens = tables.map(item => {
            return <ListItems
                key={item.apelido}
                title={item.title}
                qtdeJog={item.qtdeJog}
                admMesa={item.admMesa}
                handlePressJoin={() => handlePressJoinRoom(item)}
            />
        })
    }


    else {
        return <ContainerHome>
            <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage} >
                <ViewSearch>
                    <Input placeholder="Pesquisar salas.."
                        value={titleSearch}
                        onChangeText={setTitleSearch}
                        textContentType='name' />

                    <ButtonSearch onPress={handleChange} ><TextSearch>Busca</TextSearch></ButtonSearch>
                </ViewSearch>
                <ViewSearchRoom>
                    <ImgSearchConfig source={require('../../assets/images/puts.png')} />
                    <TextPesq>Sorry Bro, you shall not pass son of a Bitch</TextPesq>
                    <ButtonSearch1 onPress={backFeed} ><TextSearch>Voltar</TextSearch></ButtonSearch1>
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
                        onChangeText={setTitleSearch} 
                        textContentType='name'/>

                    <ButtonSearch onPress={handleChange} ><TextSearch>Busca</TextSearch></ButtonSearch>
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