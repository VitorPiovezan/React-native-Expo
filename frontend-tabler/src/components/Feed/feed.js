import React, { Component } from 'react';

import {
    ContainerHome,
    Input,
    ViewOpenRoom,
    TextPesq,
    ButtonSearch,
    ViewSearch,
    TextSearch,
    ViewSearchRoom,
    ImgSearchConfig,
    ButtonSearch1
} from './styles';

import ListItems from './feed_view';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, ImageBackground } from 'react-native';
import axios from 'axios';
export default class Feed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            titleSearch: ''
        }
    }

    backFeed = () => {
        this.setState({titleSearch: ''});
        var search = undefined;
        this.componentDidMount(undefined);
    }

    handleChange = () => {  
        var search = 'http://170.83.209.192:8000/api/homePage';
        if (this.state.titleSearch !== '') {
            var search = 'http://170.83.209.192:8000/api/searchRooms/' + this.state.titleSearch
        } else {
            var search = 'http://170.83.209.192:8000/api/homePage'
        };
        this.componentDidMount(search);

    }

    componentDidMount(search) {
        /* axios.get('https://jsonplaceholder.typicode.com/users')  */
        if (search === undefined) {
            var teste = 'http://170.83.209.192:8000/api/homePage'
        } else {
            var teste = search;
        };
        axios.get(`${teste}`)
            .then(res => {
                this.setState({ users: res.data });
            }).catch(
                function (error) {
                    console.log('Show error notification!')
                    return Promise.reject(error)
                }
            )
    }

    render() {
        
        let listaDeItens = null

        if (this.state.users !== null){
        listaDeItens = this.state.users.map(item => {
            return <ListItems 
                                title={item.title}
                                qtdeJog={item.qtdeJog}
                                admMesa={item.admMesa}
                                handlePressJoin={() => this.props.navigation.navigate('Room')}
                                />
        })}
        else {
            return <ContainerHome>
                <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage} >
                    <ViewSearch>
                        <Input placeholder="Pesquisar salas.."
                            value={this.state.titleSearch}
                            onChangeText={titleSearch => this.setState({ titleSearch })} />

                        <ButtonSearch onPress={(this.handleChange)} ><TextSearch>Busca</TextSearch></ButtonSearch>
                    </ViewSearch>
                    <ViewSearchRoom>
                        <ImgSearchConfig source={require('../../assets/images/puts.png')}/>
                        <TextPesq>Sorry Bro, you shall not pass son of a Bitch</TextPesq>
                        <ButtonSearch1 onPress={(this.backFeed)} ><TextSearch>Voltar</TextSearch></ButtonSearch1>
                    </ViewSearchRoom>

                </ImageBackground>
            </ContainerHome>
        }

        

        return (
            <ContainerHome>
                <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage} >
                    <ViewSearch>
                        <Input placeholder="Pesquisar salas.."
                            value={this.state.titleSearch}
                            onChangeText={titleSearch => this.setState({ titleSearch })} />

                        <ButtonSearch onPress={(this.handleChange)} ><TextSearch>Busca</TextSearch></ButtonSearch>
                    </ViewSearch>
                    <ViewOpenRoom>
                        <ScrollView>

                            {listaDeItens}


                            {/* 

                                    {this.state.users.map(item => <ViewRoom>
                                        <ViewTitles>
                                            <TitleRoom>{item.title}</TitleRoom>
                                            <PlayersRoom>{item.qtdeJog} Jogadores | M: {item.admMesa}</PlayersRoom>
                                        </ViewTitles>

                                        <ViewButtonRoom><ButtonRoom>
                                            <TextButtonRoom>Join</TextButtonRoom>
                                        </ButtonRoom></ViewButtonRoom>
                                    </ViewRoom>)}  */}

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