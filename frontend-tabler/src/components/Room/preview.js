import React, { useEffect, useState } from 'react';

import {
    B,
    ContainerRoom,
    DetailsMestre,
    Avatar,
    Dados,
    TextDetails,
    HeaderRoom,
    BottomBack,
    IconBack,
    TituloMesa,
    DetailsRPG,
    DetailsRoom,
    TitleRPG,
    TitlePlayers,
    DetailsText,
    DetailsTitle,
    DetailsRoomText,
    Players,
    TitleView,
    ViewJoin,
    ButtomJoin,
    TextJoin,
    ContainerScroll,
    SDetailsMestre,
    SDados,
    STextDetails,
    ViewButton,
    ViewModal,
    TitleModal,
    ViewRadio,
    ViewPlayerRequest,
    ViewImputsPlayerRequest,
    TextPlayerRequest,
    InputPlayerRequest,
    ButtonJoinRoom,
    TextModalPlayer
} from './styles';

import { RadioButton } from 'react-native-paper'
import ListItems from './playersroom';
import api from '../../api/api'
import { StyleSheet, ImageBackground, ScrollView, Modal, Text} from 'react-native';

export default function Preview({navigation, route}) {

    const [checked, setChecked] = React.useState('player');
    console.log(checked)
    const [modalVisible, setModalVisible] = useState(false);

    const idSala  = route.params.roomID
    const userId = route.params.userId 
    const [rooms, setRooms] = useState('')
    const [players, setPlayers] = useState([])

    

    useEffect(() => {
        api.post('roomData', {
            ID_MESA: `${idSala.id}`
        })
            .then((res) => {
                console.log(res.data)
                setRooms(res.data)
                setPlayers(res.data.players)
            })

    }, [idSala.id, idSala.nome, idSala.apelido])

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
            width: '100%',
        }
    });

    function MestreStatus() {
        if(rooms.dungeonMaster !== 'NO_DM'){
            return <DetailsMestre>
                        <Avatar source={require('../../assets/images/puts.png')} />
                        <Dados>
                            <TextDetails><B>Mestre:</B> {rooms.dungeonMaster} </TextDetails>
                            <TextDetails><B>Quant. de mesas:</B> {rooms.tablesJoined} </TextDetails>
                        </Dados>
                    </DetailsMestre>
        } else {
            return <SDetailsMestre>
                        <SDados>
                            <STextDetails><B>Procurando Mestre...</B></STextDetails>
                            <STextDetails><B>Pode Ajudar?</B></STextDetails>
                        </SDados>
                    </SDetailsMestre>
        }
    }

    function ModalJoinRoom(){
        if(checked === 'player'){
            return  <ViewPlayerRequest>

                        <ViewImputsPlayerRequest>
                            <TextPlayerRequest>Nome Char</TextPlayerRequest>
                            <InputPlayerRequest
                                    autoCapitalize='none'/* 
                                    onChangeText={setName}
                                    value={name} *//>
                        </ViewImputsPlayerRequest>

                        <ViewImputsPlayerRequest>
                            <TextPlayerRequest>Classe Char</TextPlayerRequest>
                            <InputPlayerRequest
                                    autoCapitalize='none'/* 
                                    onChangeText={setName}
                                    value={name} *//>
                        </ViewImputsPlayerRequest>


                        <ButtonJoinRoom><TextModalPlayer>Solicitar</TextModalPlayer></ButtonJoinRoom>
                    </ViewPlayerRequest>
        } else {
            return  <ViewPlayerRequest>
                        <ButtonJoinRoom><TextModalPlayer>Solicitar</TextModalPlayer></ButtonJoinRoom>
                    </ViewPlayerRequest>
        }
    }
    

        let listaDeItens = null
        if (players !== null) {
        listaDeItens = players.map(item => {
            return <ListItems
                key={item.playerName}
                playerName={item.playerName}
                playerChar={item.playerChar}
                playerClass={item.playerClass}
            />
        })
        }

    return (
        <ContainerRoom>
            <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage} >
                    
            <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}>
                    <ViewButton onPress={() => { setModalVisible(!modalVisible); }}>
                        <ViewModal>
                            <TitleModal><B>Jogar como</B></TitleModal>

                            <RadioButton.Group onValueChange={value => setChecked(value)} value={checked}>
                                <ViewRadio>
                                    <RadioButton.Item   label="Jogador" 
                                                        value='player'
                                                        color="#5e3200"
                                                        uncheckedColor="#5e3200" />
                                    <RadioButton.Item   label="Mestre" 
                                                        value="master"
                                                        color="#5e3200"
                                                        uncheckedColor="#5e3200"  />
                                </ViewRadio>
                            </RadioButton.Group>

                            <ModalJoinRoom/>
                            
                        </ViewModal>
                    </ViewButton>
                </Modal>
                    
                    <HeaderRoom>
                        <BottomBack onPress={() => navigation.navigate('Routes')}>
                            <IconBack source={require('../../assets/icons/voltar.png')}/>
                        </BottomBack>
                        <TituloMesa> {idSala.title} </TituloMesa>

                        <ViewJoin>
                            <ButtomJoin onPress={() => { setModalVisible(true); }}>
                                <TextJoin>Entrar</TextJoin>
                            </ButtomJoin>
                        </ViewJoin>
                    </HeaderRoom>

                    <ScrollView style={styles.scrollView}>
                    <ContainerScroll>

                    <DetailsRPG>
                        <TitleRPG> {idSala.formato} </TitleRPG>
                    </DetailsRPG>

                    <DetailsRoom>
                        <DetailsTitle>Requisições</DetailsTitle>
                            <DetailsRoomText>
                                <DetailsText><B>Nivel Inicial do Char:</B> {idSala.lvlInic}</DetailsText>
                                <DetailsText><B>Máximo de Players:</B> {idSala.qtdeJog}</DetailsText>
                                <DetailsText><B>Nivel de Experiência:</B> {idSala.expJogo}</DetailsText>
                            </DetailsRoomText>
                    </DetailsRoom>
                
                    <MestreStatus/>
                    <Players>
                        <TitleView><TitlePlayers>Jogadores</TitlePlayers></TitleView>

                            {listaDeItens}
                                
                    </Players>
                
                </ContainerScroll>
                </ScrollView>
            </ImageBackground>
        </ContainerRoom>

    )
}
