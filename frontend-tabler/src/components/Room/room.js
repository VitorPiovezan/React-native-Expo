import React, { Component } from 'react';

import {
    ContainerRoom,
    ViewHeaderRoom,
    ViewTextProfile,
    TextBoxNameProfile,
} from './styles';

import { StyleSheet, ImageBackground } from 'react-native';
export default class Home extends Component {

    render() {

        return (
            <ContainerRoom>
                <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage} >

                    <ViewHeaderRoom>
                        <ViewTextProfile>
                            <TextBoxNameProfile>Bem Vindo Caralho</TextBoxNameProfile>
                        </ViewTextProfile>
                    </ViewHeaderRoom>



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