import React, { useState } from 'react';
import { 
    ContainerProfile,
    ImgProfileConfig, 
    TextNameUser, 
    ViewConfig, 
    TextConfig,
    ViewConfigList,
    TextConfigList,
    ButtonConfigList,
    ButtonOut,
    IconLogout,
    ViewSair,
    TextBoxRodape,
    ViewContRodape
} from "./styles";
import { ImageBackground, StyleSheet, Text, Linking, ScrollView} from 'react-native';

export default function Profile({navigation, route}){  
 
    const user = (route.params.userId)
    const styles = StyleSheet.create({
        backgroundImage: {
            height: '100%',
            width: '100%',
            alignItems: 'center',
      },
        scrollView: {
            width: '100%',
        }
      });

        return( 
       <ContainerProfile>
           <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage}>
                <ScrollView style={styles.scrollView}>
                <ContainerProfile>
                    
                <ImgProfileConfig source={require('../../assets/images/sputinikV.jpg')}/>
                    <TextNameUser>{user.apelido}</TextNameUser>
    
                <ViewConfig>
                    <TextConfig>Configurações</TextConfig>
                </ViewConfig>

                <ViewConfigList>
                    <ButtonConfigList><TextConfigList onPress={() => navigation.navigate('Config')}>Sua Ficha </TextConfigList></ButtonConfigList>
                    <ButtonConfigList><TextConfigList onPress={() => navigation.navigate('Config')}>Editar Perfil </TextConfigList></ButtonConfigList>
                    <ButtonConfigList><TextConfigList onPress={() => Linking.openURL('https://drive.google.com/drive/folders/1n4vZLAZGmUyUmJ3SP-zFtiYaf7H9MaUG')} >Manual do Jogador</TextConfigList></ButtonConfigList>
                </ViewConfigList>

                <ViewContRodape>
                        <TextBoxRodape>Feito com ♡ por Cubisme Design Team</TextBoxRodape>
                        <TextBoxRodape>Version: 0.30</TextBoxRodape>
                </ViewContRodape>

                <ViewSair>
                    <ButtonOut  onPress={() => navigation.navigate('Login') } >
                        <IconLogout source={require('../../assets/icons/logout.png')}/>
                    </ButtonOut>
                </ViewSair>

                </ContainerProfile> 
                </ScrollView>   
           </ImageBackground>                                 
       </ContainerProfile> 
  
  )  
}  