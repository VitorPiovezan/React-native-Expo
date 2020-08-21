import React, { Component } from 'react';

import {
    ContainerRoom,
} from './styles';

import { StyleSheet, ImageBackground, Text } from 'react-native';

export default function Room({navigation, route}) {

    const idSala  = route.params.roomID  

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

    return (
        <ContainerRoom>
            <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage} >
    <Text>{idSala}</Text>
            </ImageBackground>
        </ContainerRoom>

    )
}
