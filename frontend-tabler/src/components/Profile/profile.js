import React, { Component } from 'react';
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
    ViewButtonOut,
    TextBoxButtonOut,
    ViewRodape,
    TextBoxRodape
} from "./styles";
import { ImageBackground, StyleSheet, Text, Linking} from 'react-native';

export default class Profile extends Component{  

    render(){  
        return( 
       <ContainerProfile>
           <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage}>

                <ImgProfileConfig source={require('../../assets/images/perfil_image.png')}/>
                <TextNameUser>Offar</TextNameUser>
    
                <ViewConfig>
                    <TextConfig>Configurações</TextConfig>
                </ViewConfig>

                <ViewConfigList>
                    <ButtonConfigList><TextConfigList onPress={() => this.props.navigation.navigate('Config')}>Sua Ficha </TextConfigList></ButtonConfigList>
                    <ButtonConfigList><TextConfigList onPress={() => this.props.navigation.navigate('Config')}>Editar Perfil </TextConfigList></ButtonConfigList>
                    <ButtonConfigList><TextConfigList onPress={() => this.props.navigation.navigate('Config')}>Configurações de E-mail </TextConfigList></ButtonConfigList>
                    <ButtonConfigList><TextConfigList onPress={() => Linking.openURL('https://drive.google.com/drive/folders/1n4vZLAZGmUyUmJ3SP-zFtiYaf7H9MaUG')} >Manual do Jogador</TextConfigList></ButtonConfigList>
                </ViewConfigList>

                <ButtonOut  onPress={() => this.props.navigation.navigate('Login') } >
                    <ViewButtonOut>
                        <TextBoxButtonOut>Sair</TextBoxButtonOut>
                    </ViewButtonOut>
                </ButtonOut>
                <ViewRodape>
                    <TextBoxRodape>Feito com ♡ por Cubisme Design Team</TextBoxRodape>
                    <TextBoxRodape>Version: 0.3</TextBoxRodape>
                </ViewRodape>

           </ImageBackground>                                 
       </ContainerProfile>    
  
  )  
}  
} 

const styles = StyleSheet.create({
    backgroundImage: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
  }
  });

Profile.navigationOptions = {
    header: null
  }