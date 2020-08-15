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
    
    constructor(props) {
        super(props);
        this.state = {
            users: []
    }}

    componentDidMount() {
        /* axios.get('https://jsonplaceholder.typicode.com/users')  */
        axios.get('http://170.83.209.192:8000/api/homePage') 
        .then(res => {
                this.setState({ users: res.data});
                console.log(this.state);
                console.log(res.data);
            })
      }

    render() {

        return (
            <ContainerHome>
                <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage} >

                    <ViewHeaderHome>
                        <ViewConfigsProfile>
                            <ButtonProfile onPress={() => this.props.navigation.navigate('Config')}>
                                <IconsProfile source={require('../../assets/images/configIcon.png')} />
                            </ButtonProfile>
                            <ImgHomeConfig source={require('../../assets/images/logo.png')} />
                            <ButtonProfile onPress={() => this.props.navigation.navigate('Profile')} >
                                <IconsProfile source={require('../../assets/images/perfilIcon.png')} />
                            </ButtonProfile>
                        </ViewConfigsProfile>

                        <ViewTextProfile>
                            <TextBoxNameProfile>Bem Vindo Caralho</TextBoxNameProfile>
                        </ViewTextProfile>
                    </ViewHeaderHome>

                    <TitleHome>Salas Abertas</TitleHome>
                    <Input placeholder="Pesquisar salas.." />

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