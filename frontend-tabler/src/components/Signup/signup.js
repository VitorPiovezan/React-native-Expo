import React, { Component } from 'react';
import { StatusBar, AsyncStorage , StyleSheet, ImageBackground} from 'react-native';
import axios from 'axios';

import {
    Logo, 
    Container, 
    SubTitle, 
    Title, 
    Inputs,
    ButtonViewRegister,
    ButtonRegisterOk,
    TextButton
} from './styles';


export default class Signup extends Component{  

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            nickname: '',
            password: '',
            email: ''
        }
    }

    postaEssaCaralha = () => {
        axios.post('http://170.83.209.192:8000/api/createUser', {
            NOME_USUAR: `${this.state.username}`,
            APELIDO_USUAR: `${this.state.nickname}`,
            SENHA_USUAR: `${this.state.password}`,
            EMAIL_USUAR: `${this.state.email}`,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        
             this.props.navigation.navigate('Routes');
    } 

/*    handleNameChange = (username) => {
        this.setState({ username });
    } */

    render(){  
        return( 
            <Container>
                <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage}>
                <Logo source={require('../../assets/images/logo.png')}/>
                <Title>Cadastrar-se</Title>
                <Inputs 
                    autoCapitalize='none'
                    onChangeText={username => this.setState({ username })} 
                    value={this.state.username}
                    placeholder="Digite seu nome de usuario" 
                    autoFocus={true} 
                    returnKeyType = {"next"}
                />
                <Inputs 
                    autoCapitalize='none'
                    onChangeText={nickname => this.setState({ nickname })} 
                    value={this.state.nickname}
                    placeholder="Digite seu Apelido"
                    returnKeyType = {"next"}
                />
                <Inputs 
                    autoCapitalize='none'
                    onChangeText={email => this.setState({ email })} 
                    value={this.state.email}
                    placeholder="Digite seu e-mail" 
                    keyboardType="email-address"
                    returnKeyType = {"next"}
                />
                <Inputs 
                    autoCapitalize='none'
                    onChangeText={password => this.setState({ password })} 
                    value={this.state.password}
                    placeholder="Digite sua senha"
                    secureTextEntry={true}
                    returnKeyType = {"next"}
                />

                <ButtonViewRegister>
                    <ButtonRegisterOk
                        onPress={this.postaEssaCaralha}
                        >
                        <TextButton>Cadastrar-se</TextButton>
                    </ButtonRegisterOk>
                </ButtonViewRegister>
                </ImageBackground>
            </Container>
        )}}
        
        const styles = StyleSheet.create({
            backgroundImage: {
                height: '100%',
                width: '100%',
                alignItems: 'center',
                resizeMode: 'cover',
                justifyContent: 'center',
          }
          });

        Signup.navigationOptions = {
            header: null
          }