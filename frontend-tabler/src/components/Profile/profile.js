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
    ViewContRodape,
    ViewButton,
    ViewModal,
    TitleModal,
    ButtonView,
    ButtonQuest,
    TextButtonSair
} from "./styles";
import { ImageBackground, StyleSheet, Linking, ScrollView, Modal } from 'react-native';

export default function Profile({ navigation, route }) {

    const [modalVisible, setModalVisible] = useState(false);

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

    return (
        <ContainerProfile>
            <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage}>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}>
                    <ViewButton onPress={() => { setModalVisible(!modalVisible); }}>
                        <ViewModal>
                            <TitleModal>Deseja Realmente Sair?</TitleModal>

                            <ButtonView>
                                <ButtonQuest onPress={() => {
                                    navigation.navigate('Login');
                                    setModalVisible(!modalVisible);
                                }}>
                                    <TextButtonSair>Sair</TextButtonSair>
                                </ButtonQuest>
                                <ButtonQuest onPress={() => { setModalVisible(!modalVisible); }}>
                                    <TextButtonSair>Voltar</TextButtonSair>
                                </ButtonQuest>
                            </ButtonView>
                            
                        </ViewModal>
                    </ViewButton>
                </Modal>

                <ScrollView style={styles.scrollView}>
                    <ContainerProfile>

                        <ImgProfileConfig source={require('../../assets/images/sputinikV.jpg')} />
                        <TextNameUser>{user.apelido}</TextNameUser>

                        <ViewConfig>
                            <TextConfig>Configurações</TextConfig>
                        </ViewConfig>

                        <ViewConfigList>
                            <ButtonConfigList><TextConfigList onPress={() => navigation.navigate('Config', { userEdit: user })}>Editar Perfil </TextConfigList></ButtonConfigList>
                            <ButtonConfigList><TextConfigList onPress={() => Linking.openURL('https://drive.google.com/drive/folders/1n4vZLAZGmUyUmJ3SP-zFtiYaf7H9MaUG')} >Manual do Jogador</TextConfigList></ButtonConfigList>
                        </ViewConfigList>

                        <ViewContRodape>
                            {/* <TextBoxRodape>Feito com ♡ por Cubisme Design Team</TextBoxRodape> */}
                            <TextBoxRodape>Version: 0.40</TextBoxRodape>
                        </ViewContRodape>

                        <ViewSair>
                            <ButtonOut onPress={() => { setModalVisible(true); }} >
                                <IconLogout source={require('../../assets/icons/logout.png')} />
                            </ButtonOut>
                        </ViewSair>

                    </ContainerProfile>
                </ScrollView>
            </ImageBackground>
        </ContainerProfile>

    )
}  