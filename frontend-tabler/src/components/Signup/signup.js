import React, { Component } from 'react';
import { StatusBar, AsyncStorage , StyleSheet, ImageBackground} from 'react-native';

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

    state = {
        username: 'johnny123',
        email: 'teste@teste.com.br',
        password: '123456',
        passwordConfirm: '123456',
        error: '',
    }
    
    handleNameChange = (username) => {
        this.setState({ username });
    }
    
    handleEmailChange = (email) => {
        this.setState({ email });
    }
    
    handlePasswordChange = (password) => {
        this.setState({password});
    }

    handlePasswordConfirmation = (passwordConfirm) => {
        this.setState({passwordConfirm});
    }

    
    handleSignupPress = () => {
      this.props.navigation.navigate('Routes');
  }

    render(){  
        return( 
            <Container>
                <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage}>
                <Logo source={require('../../assets/images/logo.png')}/>
                <Title>Cadastrar-se</Title>
                <Inputs 
                    autoCapitalize='none'
                    onChangeText={this.handleNameChange}
                    value={this.state.username}
                    placeholder="Digite seu nome de usuario" 
                    autoFocus={true} 
                    returnKeyType = {"next"}
                />
                <Inputs 
                    autoCapitalize='none'
                    onChangeText={this.handleEmailChange}
                    value={this.state.email}
                    placeholder="Digite seu e-mail" 
                    keyboardType="email-address"
                />
                <Inputs 
                    autoCapitalize='none'
                    value={this.state.password}
                    onChangeText={this.handlePasswordChange}
                    placeholder="Digite sua senha"
                    secureTextEntry={true}/>


                <Inputs
                    autoCapitalize='none'
                    onChange={this.handlePasswordConfirmation}
                    value={this.state.passwordConfirm}
                    placeholder="Digite a confirmacao"
                    secureTextEntry={true}
                />

                <ButtonViewRegister>
                    <ButtonRegisterOk
                        onPress={this.handleSignupPress}
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