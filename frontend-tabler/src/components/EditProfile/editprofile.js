import React, { useState } from 'react';

import {
  ContainerConfig,
  HeaderConfig,
  BottomBack,
  IconBack,
  TituloMesa,
  ViewConfig,
  ButtomSave,
  TextSave,
  ViewEdit,
  TextEdit,
  InputEdit,
  ContainerScroll
} from './styles';
import api from '../../api/api';

import { ImageBackground, StyleSheet, Alert, ScrollView } from 'react-native';

export default function EditProfile({navigation, route}) {

  const user = (route.params.userEdit)

  const [name, setName] = useState(user.nome);
  const [nickname, setNickname] = useState(user.apelido);
  const [email, setEmail] = useState(user.email);

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
    },
    scrollView: {
      width: '100%'
    }
  });

  async function postaEssaCaralha() {

    if(name === user.nome && nickname === user.apelido && email === user.email){
        Alert.alert("Tabler", 'Nada Foi alterado');
        console.log('Nada Foi alterado')

    }else if (nickname !== user.apelido) {
      const res = await api.put('updateProfile', 
        {
            NOME_USUAR: `${name}`,
            APELIDO_USUAR: `${nickname}`,
            EMAIL_USUAR: `${email}`,
            AVATAR_USUAR: `${user.avatarpath}`,
            ID_USUAR: `${user.id}`,
        })
        if (res.status === 200){
          Alert.alert("Tabler", 'Alterado com sucesso, Faça o login novamente para validação');
          console.log('Alterado com sucesso')
          navigation.navigate('Login')
        } else {
          Alert.alert("Tabler", 'Deu Pau Irmão')
          console.log('Deu Pau Irmão')
        }
    }else{
      const res = await api.put('updateProfile', 
        {
            NOME_USUAR: `${name}`,
            APELIDO_USUAR: `${nickname}`,
            EMAIL_USUAR: `${email}`,
            AVATAR_USUAR: `${user.avatarpath}`,
            ID_USUAR: `${user.id}`,
        })
        if (res.status === 200){
          Alert.alert("Tabler", 'Alterado com sucesso');
          console.log('Alterado com sucesso')
          navigation.navigate('Routes', {
            screen: 'Profile',
            params: {
              userId: res.data
            }
          })
        } else {
          Alert.alert("Tabler", 'Deu Pau Irmão')
          console.log('Deu Pau Irmão')
        }
    }        
}

  return (
    <ContainerConfig>
      <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage} >
        
        <HeaderConfig>
          <BottomBack onPress={() => navigation.navigate('Routes')}>
            <IconBack source={require('../../assets/icons/voltar.png')}/>
          </BottomBack>
          <TituloMesa> Editar Perfil </TituloMesa>
    
          <ViewConfig>
            <ButtomSave onPress={postaEssaCaralha}>
              <TextSave>Salvar</TextSave>
            </ButtomSave>
          </ViewConfig>
        </HeaderConfig>
        
        <ScrollView style={styles.scrollView}>
          <ContainerScroll>

        <ViewEdit>
            <TextEdit>Nome Completo</TextEdit>
            <InputEdit
                      autoCapitalize='none'
                      onChangeText={setName}
                      value={name}
                      placeholder="Digite seu Nome Completo" />
        </ViewEdit>

        <ViewEdit>
            <TextEdit>Apelido</TextEdit>
            <InputEdit
                      autoCapitalize='none'
                      onChangeText={setNickname}
                      value={nickname}
                      placeholder="Digite seu Apelido" />
        </ViewEdit>

        <ViewEdit>
            <TextEdit>E-mail</TextEdit>
            <InputEdit
                      autoCapitalize='none'
                      onChangeText={setEmail}
                      value={email}
                      placeholder="Digite seu E-Email"
                      keyboardType="email-address"
                      />
        </ViewEdit>

        </ContainerScroll>
        </ScrollView>
      </ImageBackground>
    </ContainerConfig>

  )
}