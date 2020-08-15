import React, { Component } from 'react';
import { Video } from 'expo-av';
import { Image, Text, ImageBackground, StyleSheet } from 'react-native';

import {
    ContainerHome
} from '../Home/styles';

export default class Feed extends Component{  
    render(){  
        return(   
        <ContainerHome>
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
});