import React, { useEffect, useState, Component } from 'react';

import {
    ContainerRoom,
} from './styles';

import api from '../../api/api'
import { StyleSheet, ImageBackground, Text } from 'react-native';

export default function Room({navigation, route}) {

    const idSala  = route.params.roomID  
    const [rooms, setRooms] = useState([])

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
        async function getIdRoom() {
                const res = await api.get(`roomData/${idSala}`)
                setRooms(res.data)
                console.log(res.data)
        }
        
        getIdRoom()

    }, [idSala])

    return (
        <ContainerRoom>
            <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage} >
                <Text>{idSala}</Text>
            </ImageBackground>
        </ContainerRoom>

    )
}
