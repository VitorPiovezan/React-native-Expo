import React, { Component, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, StyleSheet, ImageBackground, Modal, TouchableHighlight, View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

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

import api from '../../api/api';


export default function Signup() {

    const styles = StyleSheet.create({
        backgroundImage: {
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
      }
      });

    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    async function postaEssaCaralha() {
                const res = await api.post('createUser', 
                    {
                        NOME_USUAR: `${username}`,
                        APELIDO_USUAR: `${nickname}`,
                        SENHA_USUAR: `${password}`,
                        EMAIL_USUAR: `${email}`,
                    })

                if(username === '' || nickname === ''  || email === ''  || password === '' ){
                    Alert.alert("Tabler", 'Faltou algum campo ae irmão!');
                    console.log('Faltou algum campo ae irmão!')

                }
                
                if(res.data.jaExiste === "email"){
                    Alert.alert("Tabler", 'E-mail já cadastrado, caso tenha digitado correto entre em contato com o desenvolvedor!');
                    setEmail('')
                    console.log('E-mail já cadastrado, caso tenha digitado correto entre em contato com o desenvolvedor!')

                }else if(res.data.jaExiste === "apelido"){
                    Alert.alert("Tabler", 'Apelido já existente lindão, tenta outro ai!');
                    setNickname('')
                    console.log('Apelido já existente lindão, tenta outro ai!')

                }else if(res.data.jaExiste === "usuarioCriado"){
                    Alert.alert("Tabler", 'Usuário criado com sucesso! Se divirta pequeno gafanhoto...');
                    console.log('Usuário criado com sucesso! Se divirta pequeno gafanhoto...')
                    navigation.navigate('Login');                    

                }else{
                    Alert.alert("Tabler", 'Estamos com problemas com nosso campo de cadastro, tente novamente mais tarde...');
                }        
    }

        
        return( 
            <Container>
                <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage}>
                <Logo source={require('../../assets/images/logo.png')}/>
                <Title>Cadastrar-se</Title>
                <Inputs 
                    autoCapitalize='none'
                    onChangeText={setUsername} 
                    value={username}
                    placeholder="Digite seu nome de usuario" 
                    autoFocus={true} 
                    returnKeyType = {"next"}
                />
                <Inputs 
                    autoCapitalize='none'
                    onChangeText={setNickname} 
                    value={nickname}
                    placeholder="Digite seu Apelido"
                    returnKeyType = {"next"}
                />
                <Inputs 
                    autoCapitalize='none'
                    onChangeText={setEmail} 
                    value={email}
                    placeholder="Digite seu e-mail" 
                    keyboardType="email-address"
                    returnKeyType = {"next"}
                />
                <Inputs 
                    autoCapitalize='none'
                    onChangeText={setPassword} 
                    value={password}
                    placeholder="Digite sua senha"
                    secureTextEntry={true}
                    returnKeyType = {"next"}
                />

                <ButtonViewRegister>
                    <ButtonRegisterOk
                        onPress={postaEssaCaralha}
                        >
                        <TextButton>Cadastrar-se</TextButton>
                    </ButtonRegisterOk>
                </ButtonViewRegister>
                </ImageBackground>
            </Container>
        )}
