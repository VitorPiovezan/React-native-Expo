import React, { useState } from 'react';
import { StatusBar, StyleSheet, ImageBackground, Alert } from 'react-native';

import {
    Logo,
    Container,
    Title,
    Inputs,
    ButtonView,
    Button,
    TextButton
} from './styles';


import api from '../../api/api';

export default function Login({navigation}) {

    console.disableYellowBox = true; //para ignorar warnigns

    const styles = StyleSheet.create({
        backgroundImage: {
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        }
    });

    const [nickname, setNickname] = useState('Offar');
    const [password, setPassword] = useState('123456');
    const [error, setError] = useState([]);

    async function handleLogin() {
        const res = await api.post('/login', 
                    {
                        APELIDO_USUAR: nickname,
                        SENHA_USUAR: password,
                    });

        if (nickname === '' || password === '') {
                Alert.alert("Tabler", 'Faltou algum campo ae irmão!');

        } else if (res.data.jaExiste === "UsuarioInexistente") {
                Alert.alert("Tabler", 'Usuário ou senha incorretos, tente novamente amigão!');

        } else {
                const loggedUser = res.data;
                /*console.log(loggedUser);
                console.log('Esse de cima é o usuário')
                const { token } = res.data;
                await AsyncStorage.setItem('user', token); 
                console.log(res.data.id)*/

                    navigation.navigate('Routes', 
                        {
                        screen: 'Room',
                        params: {
                            userId: res.data
                        }
                        })
                    }
                    navigation.navigate('Routes', 
                        {
                        screen: 'Profile',
                        params: {
                            userId: res.data
                        }
                        })

    }

        return (

            <Container>
                <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage}>
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor="#5E3200"
                    />
                    <Logo source={require('../../assets/images/logo.png')} />
                    <Title>Login</Title>

                    <Inputs
                        autoCapitalize='none'
                        onChangeText={setNickname}
                        value={nickname}
                        placeholder="Digite seu e-mail"
                        keyboardType="email-address"
                        returnKeyType={"next"} />

                    <Inputs
                        autoCapitalize='none'
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Digite sua senha"
                        secureTextEntry={true} />

                    <ButtonView>
                        <Button onPress={handleLogin}>
                            <TextButton>Login</TextButton>
                        </Button>
                        <Button
                            onPress={() => navigation.navigate('Signup')}
                        >
                            <TextButton>Cadastre-se</TextButton>
                        </Button>
                    </ButtonView>
                </ImageBackground>
            </Container>
        )
    }



























/* import React, { Component } from 'react';
import { StatusBar, StyleSheet, ImageBackground, Alert } from 'react-native';
import axios from 'axios';
import {
    Logo,
    Container,
    Title,
    Inputs,
    ButtonView,
    Button,
    TextButton
} from './styles';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nickname: 'Offar',
            password: '123456',
            jaExiste: '',
            user: []
        }
    }

    postaEssaCaralha = () => {
        axios.post('http://170.83.208.84:8000/api/login', {
            APELIDO_USUAR: `${this.state.nickname}`,
            SENHA_USUAR: `${this.state.password}`,
        })
            .then(res => {
                this.setState({ user: res.data });
                console.log(this.state.user);
                if (this.state.nickname === '' || this.state.password === '') {
                    Alert.alert("Tabler", 'Faltou algum campo ae irmão!');

                } else if (this.state.user.jaExiste === "UsuarioInexistente") {
                    Alert.alert("Tabler", 'Usuário ou senha incorretos, tente novamente amigão!');
                    this.setState({ password: '' })

                } else {
                    console.log(this.state.user.apelido);
                    console.log(this.state.user.nome);
                    this.props.navigation.navigate('Routes');
                };
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    handleSignupPress = () => {
        this.props.navigation.navigate('Signup');
    }

    render() {
        console.disableYellowBox = true; //para ignorar warnigns
        return (

            <Container>
                <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage}>
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor="#5E3200"
                    />
                    <Logo source={require('../../assets/images/logo.png')} />
                    <Title>Login</Title>

                    <Inputs
                        autoCapitalize='none'
                        onChangeText={nickname => this.setState({ nickname })}
                        value={this.state.nickname}
                        placeholder="Digite seu e-mail"
                        keyboardType="email-address"
                        returnKeyType={"next"} />

                    <Inputs
                        autoCapitalize='none'
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                        placeholder="Digite sua senha"
                        secureTextEntry={true} />

                    <ButtonView>
                        <Button onPress={this.postaEssaCaralha}>
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
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
}); */