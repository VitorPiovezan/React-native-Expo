import React, { Component } from 'react';

import {
    ContainerRoom,
} from './styles';

import {route} from '@react-navigation/native';
import { StyleSheet, ImageBackground } from 'react-native';

export default class Room extends Component {
    
    render() {
        return (
            <ContainerRoom>
                <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage} >
                </ImageBackground>
            </ContainerRoom>

        )
    }
}

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