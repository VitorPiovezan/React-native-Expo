import React, { useState, useEffect } from 'react';

import {
    ContainerHome,
    ContainerScroll,
    CreateRoomButton,
    CreateRoomIcon,
    CreateRoomText,
    ViewYoursRooms,
    TitleYoursRooms
} from './styles';

import api from '../../api/api';
import ListItems from '../Feed/feed_view';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, ImageBackground } from 'react-native';

export default function Home({ navigation, route }) {

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
        },
        scrollView: {
            width: '100%',
        }
    });

    useEffect(() => {
        api.post('roomsJoined', {
            ID_USUAR: user.id
        })
            .then((res) => {
                setTables(res.data)
                console.log(res.data)
            })
      }, [user.id]);

    const [tables, setTables] = useState([]);

    const handlePressJoinRoom = (RoomID) => {
        //Aqui vou passar os parametros para a Pre-view da sala 
        navigation.navigate('Preview', {
            roomID: RoomID,
            userId: user
        })
        /* console.log(RoomID) */
    }

    let listaDeItens = null
    console.log(tables.customResp)
    if (tables !== null && tables.customResp !== 'NoRooms') {
        listaDeItens = tables.map(item => {
            return <ListItems
                key={item.id}
                title={item.title}
                qtdeJog={item.qtdeJog}
                admMesa={item.admMesa}
                handlePressJoin={() => handlePressJoinRoom(item)}
            />
        })
    }


    return (
        <ContainerHome>
            <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage} >
                <ContainerScroll> 
                    

                        <CreateRoomButton onPress={() => navigation.navigate('CreateRoom', {userId: user})}>
                            <CreateRoomIcon source={require('../../assets/icons/createroom.png')} />
                            <CreateRoomText>Criar Sala</CreateRoomText>
                        </CreateRoomButton>

                        <ViewYoursRooms>
                            <TitleYoursRooms>Participando</TitleYoursRooms>
                        </ViewYoursRooms>
                <ScrollView style={styles.scrollView}>   
                
                            {listaDeItens}

                       

                    
                </ScrollView>
                </ContainerScroll>
            </ImageBackground>
        </ContainerHome>

    )
}