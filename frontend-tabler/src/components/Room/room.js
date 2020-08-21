import React, { useEffect, useState, Component } from 'react';

import {
    ContainerRoom,
    DetailsRoom,
    Avatar,
    Dados,
    TextDetails,
    HeaderRoom,
    BottomBack,
    IconBack,
    TituloMesa
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
                
                <HeaderRoom>
                    <BottomBack onPress={() => navigation.navigate('Routes')}>
                        <IconBack source={require('../../assets/icons/back.png')}/>
                    </BottomBack>
                    <TituloMesa> {rooms.title} </TituloMesa>
                </HeaderRoom>

                <DetailsRoom>
                    <Avatar source={require('../../assets/images/puts.png')} />
                    <Dados>
                        <TextDetails>Mestre: {rooms.admMesa} </TextDetails>
                        <TextDetails>Nickname: {rooms.title} </TextDetails>
                    </Dados>
                </DetailsRoom>

            </ImageBackground>
        </ContainerRoom>

    )
}
