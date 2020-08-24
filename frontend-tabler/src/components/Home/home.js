import React, { Component } from 'react';

import {
    ContainerHome,
    ContainerScroll
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
        }
    });

    return (
        <ContainerHome>
            <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage} >
                <ScrollView style={styles.scrollView}>
                    <ContainerScroll>

                        

                    </ContainerScroll>
                </ScrollView>
            </ImageBackground>
        </ContainerHome>

    )
}