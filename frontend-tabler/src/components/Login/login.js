import React, { Component } from 'react';
import { StatusBar, StyleSheet, ImageBackground, Alert} from 'react-native';

import {
    Logo, 
    Container, 
    Title, 
    Inputs,
    ButtonView,
    Button,
    TextButton,
    ErrorMessage
} from './styles';

export default class Login extends Component{  

    state = {
        email: 'tabler@tabler.com',
        password: 'tabler',
        error: '',
    }

    handleNameChange = (email) => {
        this.setState({ email });
        console.log(this.state.email);
    }

    handlePasswordChange = (password) => {
        this.setState({ password });
        console.log(this.state);
    }

    handleSignupPress = () => {
        this.props.navigation.navigate('Signup');
    } 

    handleSignInPress = async () => {
        this.props.navigation.navigate('Routes');       
} 


render(){  
    console.disableYellowBox = true; //para ignorar warnigns
    return( 
        
        <Container>
          <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage}>  
        <StatusBar
            barStyle="light-content"
            backgroundColor="#5E3200"
        />
            <Logo source={require('../../assets/images/logo.png')}/>
            <Title>Login</Title>
            
            <Inputs 
                autoCapitalize='none'
                onChangeText={this.handleNameChange}
                value={this.state.email}
                placeholder="Digite seu e-mail" 
                keyboardType="email-address" 
                returnKeyType = {"next"}/>

            <Inputs
                autoCapitalize='none'
                onChangeText={this.handlePasswordChange} 
                value={this.state.password}
                placeholder="Digite sua senha" 
                secureTextEntry={true}/>
            
            {this.state.error.length !== 0 && <ErrorMessage>{this.state.error}</ErrorMessage>}

            <ButtonView>
                <Button onPress={this.handleSignInPress}>
                    <TextButton>Login</TextButton>
                </Button>
                <Button
                    onPress={this.handleSignupPress}
                >
                    <TextButton>Cadastre-se</TextButton>
                </Button>
            </ButtonView>
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


























/* export default class Home extends Component{  
    render() {  
        return(  

    <Container>
        <Card>
            <Image source={require('../../assets/perfil_image.png')} />
            <Info>
                <Nome>Nome do Jogador</Nome>
                <InfoProfile>Aqui é onde vai a definição do jogador, onde informa o que ele joga.</InfoProfile>
            </Info>
        </Card>
        <ButtonStyles>
            <Button color={"#fbae5c"}><IconDeslike source={require('../../assets/tresh_ico_withe.png')} /></Button>
            <Button color={"#c48eff"}><IconLike source={require('../../assets/controll_ico_white.png')} /></Button>
        </ButtonStyles>
    </Container>
)  
    }  
}   */
 

/*   <Container>
            <Card>
                <Image source={require('../../assets/logo.png')}/>
                <Info>
                    <Nome>JohnnBZ</Nome>
                    <Info>Jogo LOL e Dota, sou gay duas vezes;</Info>
                    <ButtonStyles>
                    <Button><Icon source={require('../../assets/logo.png')}/></Button>
                    <Button><Icon source={require('../../assets/logo.png')}/></Button>
                    </ButtonStyles>
                </Info>
            </Card>
       </Container>      */