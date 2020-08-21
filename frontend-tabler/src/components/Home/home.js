import React, { Component } from 'react';

import {
    ContainerHome,
    ViewHeaderHome,
    ViewConfigsProfile,
    ButtonProfile,
    IconsProfile,
    ViewTextProfile,
    ImgHomeConfig,
    TextBoxNameProfile,
    TitleHome,
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
export default class Home extends Component {
    
/*     constructor(props) {
        super(props);
        this.state = {
            users: [],
            titleSearch: '',
            url:'http://170.83.208.84:8000/api/homePage'
        }
    }

    handleChange = (titleSearch) => {
        const title = titleSearch;
        var search = 'http://170.83.208.84:8000/api/homePage';
        this.setState({ titleSearch: title });
        if (title !== ''){
              var search = 'http://170.83.208.84:8000/api/searchRooms/'+titleSearch
        }else {
              var search = 'http://170.83.208.84:8000/api/homePage'
        };
        this.componentDidMount (search);
        
    }
  
      componentDidMount(search) {
          if(search === undefined){
              var teste = 'http://170.83.208.84:8000/api/homePage'
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
   */

    render() {

        return (
            <ContainerHome>
                <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage} >

                    <ViewHeaderHome>
                        <ViewTextProfile>
                            <TextBoxNameProfile>Bem Vindo Caralho</TextBoxNameProfile>
                        </ViewTextProfile>
                    </ViewHeaderHome>

                    <Input  placeholder="Pesquisar salas.." /* 
                            onChangeText={(this.handleChange)}
                            value={this.state.titleSearch} *//>

                   <ViewOpenRoom>

                       <ScrollView>


                                   {/*  {this.state.users.map(item => <ViewRoom>
                                        <ViewTitles>
                                            <TitleRoom>{item.title}</TitleRoom>
                                            <PlayersRoom>{item.qtdeJog} Jogadores | M: {item.admMesa}</PlayersRoom>
                                        </ViewTitles>

                                        <ViewButtonRoom><ButtonRoom>
                                            <TextButtonRoom>Join</TextButtonRoom>
                                        </ButtonRoom></ViewButtonRoom>
                                    </ViewRoom>)}   */}                              

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