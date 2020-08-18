import React, { Component } from 'react';

import {
    ContainerHome,
    Input,
    ViewRoom,
    ViewOpenRoom,
    ViewTitles,
    TitleRoom,
    PlayersRoom,
    ButtonRoom,
    TextButtonRoom,
    ViewButtonRoom
} from './styles';

import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, ImageBackground } from 'react-native';
import axios from 'axios';
export default class Feed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            titleSearch: '',
            url:'http://170.83.209.192:8000/api/homePage'
        }
    }


    handleChange = (titleSearch) => {
      const title = titleSearch;
      var search = 'http://170.83.209.192:8000/api/homePage';
      this.setState({ titleSearch: title });
      if (title !== ''){
            var search = 'http://170.83.209.192:8000/api/searchRooms/'+titleSearch
      }else {
            var search = 'http://170.83.209.192:8000/api/homePage'
      };
      this.componentDidMount (search);
      
  }

    componentDidMount(search) {
         /* axios.get('https://jsonplaceholder.typicode.com/users')  */ 
        if(search === undefined){
            var teste = 'http://170.83.209.192:8000/api/homePage'
        }else{
            var teste = search;
        };
        axios.get(`${teste}`) 
        .then(res => {
                this.setState({ users: res.data});
            }).catch(
                function (error) {
                    console.log('Show error notification!')
                    return Promise.reject(error)
                }
              )
      } 

    render() {

        return (
            <ContainerHome>
                <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage} >
                    <Input  placeholder="Pesquisar salas.." 
                            onChangeText={(this.handleChange)}
                            value={this.state.titleSearch}/>

                    <ViewOpenRoom>
                        <ScrollView>


                                    {this.state.users.map(item => <ViewRoom>
                                        <ViewTitles>
                                            <TitleRoom>{item.title}</TitleRoom>
                                            <PlayersRoom>{item.qtdeJog} Jogadores | M: {item.admMesa}</PlayersRoom>
                                        </ViewTitles>

                                        <ViewButtonRoom><ButtonRoom>
                                            <TextButtonRoom>Join</TextButtonRoom>
                                        </ButtonRoom></ViewButtonRoom>
                                    </ViewRoom>)}                                

                        </ScrollView>
                    </ViewOpenRoom>

                </ImageBackground>
            </ContainerHome>

        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
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