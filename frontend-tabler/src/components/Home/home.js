import React, { Component } from 'react';

import {
    ContainerHome,
    ContainerScroll,
    CreateRoomButton,
    CreateRoomIcon,
    CreateRoomText,
    ViewYoursRooms,
    TitleYoursRooms
} from './styles';

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

    return (
        <ContainerHome>
            <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage} >
                <ScrollView style={styles.scrollView}>
                    <ContainerScroll>

                        <CreateRoomButton onPress={() => navigation.navigate('CreateRoom', {userId: user})}>
                            <CreateRoomIcon source={require('../../assets/icons/createroom.png')} />
                            <CreateRoomText>Criar Sala</CreateRoomText>
                        </CreateRoomButton>

                        <ViewYoursRooms>
                            <TitleYoursRooms>Participando</TitleYoursRooms>


                        </ViewYoursRooms>

                    </ContainerScroll>
                </ScrollView>
            </ImageBackground>
        </ContainerHome>

    )
}