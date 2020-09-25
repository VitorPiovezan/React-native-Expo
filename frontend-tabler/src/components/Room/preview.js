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
    TextModalPlayer,
    BottomVoltar
} from './styles';

import { RadioButton } from 'react-native-paper'
import ListItems from './playersroom';
import api from '../../api/api'
import { StyleSheet, ImageBackground, ScrollView, Modal, Text, Alert} from 'react-native';

export default function Preview({navigation, route}) {

    const [checked, setChecked] = useState('0');
    const [cadastrado, setCadastrado] = useState('')
    const [mestreJoga, setMestreJoga] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalJoined, setModalJoined] = useState(false);

    const idSala  = route.params.roomID
    const userId = route.params.userId 

    const [rooms, setRooms] = useState('')
    const [players, setPlayers] = useState([])
    const [playerChar, setPlayerChar] = useState('')
    const [playerClass, setPlayerClass] = useState('')
  

    useEffect(() => {  //aqui faz o post para retornar os dados da mesa, caso cadastre um usuário ela roda novamente
        api.post('roomData', {
            ID_MESA: `${idSala.id}`,
            ID_USUAR: `${userId.id}`
        })
            .then((res) => {
                console.log(res.data)
                setRooms(res.data)
                setPlayers(res.data.players)
            })

    }, [cadastrado])

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

    function MestreStatus() {  //Essa função confere se existe mestre ou não
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

    async function PostaIss() {   //Faz o post com os dados para o backend
        if(mestreJoga === 0){
        }
        else{
            const res = await api.post('joinRoom', 
                    {
                        ID_MESA: `${idSala.id}`,
                        ID_USUAR: `${userId.id}`,
                        MESTRE_JOGA: `${mestreJoga}`,
                        NOMECHAR_JOGA: `${playerChar}`,
                        CLASSECHAR_JOGA: `${playerClass}`,
                        UserName: `${userId.apelido}`
                    });
                    console.log(res)
                    if(res.data.jaExiste === 'mestre'){
                        Alert.alert('Tabler','Já existe um mestre nesta mesa')
                    }
                    setCadastrado(res.data.jaExiste)
                    setModalVisible(!modalVisible)
            }
    }

    function CreatePlayer(){
        setModalVisible(!modalVisible);
        navigation.navigate('CreatePlayer', {
            idSala: idSala,
            userId: userId,
        })        
    }

    function IfUserAdm(){   //confere se o usuário já está na mesa ou não
        if(rooms.alreadyIn === 'yes'){
            setModalJoined(true);
            navigation.navigate('Room', {
                userId: userId,
                idSala: idSala
            })
        }else{
            setModalVisible(true);
        }
    }

    function ModalJoinRoom(){  //modal caso o usuário não esteja na mesa
        if(checked === '0'){
            setMestreJoga(0);
            return  <ViewPlayerRequest>
                        <ButtonJoinRoom onPress={CreatePlayer}><TextModalPlayer>Entrar</TextModalPlayer></ButtonJoinRoom>
                    </ViewPlayerRequest>
        } else {
            setMestreJoga(1);
            return  <ViewPlayerRequest>
                        <ButtonJoinRoom onPress={PostaIss}><TextModalPlayer>Entrar</TextModalPlayer></ButtonJoinRoom>
                    </ViewPlayerRequest>
        }
    }
    

    //Esse if roda os players que estão na mesa, se não tiver ele retorna que não existe

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

            {/*  Esse modal vai rodar se o usu não estiver na mesa    */}    

            <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}>
                    <ViewButton>
                        <ViewModal>
                            <BottomVoltar onPress={() => { setModalVisible(!modalVisible); }} ><TitleModal><B>X</B></TitleModal></BottomVoltar>
                            <TitleModal><B>Jogar como</B></TitleModal>

                            <RadioButton.Group onValueChange={value => setChecked(value)} value={checked}>
                                <ViewRadio>
                                    <RadioButton.Item   label="Jogador" 
                                                        value='0'
                                                        color="#5e3200"
                                                        uncheckedColor="#5e3200" />
                                    <RadioButton.Item   label="Mestre" 
                                                        value='1'
                                                        color="#5e3200"
                                                        uncheckedColor="#5e3200"  />
                                </ViewRadio>
                            </RadioButton.Group>

                            <ModalJoinRoom/>
                            
                        </ViewModal>
                    </ViewButton>
                </Modal>

                {/* Esse modal abre se o usuário Já está na mesa */}

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalJoined}>
                    <ViewButton>
                        <ViewModal>
                            <BottomVoltar onPress={() => { setModalJoined(!modalJoined); }} ><TitleModal><B>X</B></TitleModal></BottomVoltar>
                            <TitleModal><B>Vou fazer rota para ir para mesa</B></TitleModal>                            
                        </ViewModal>
                    </ViewButton>
                </Modal>
                    
                    <HeaderRoom>
                        <BottomBack onPress={() => navigation.navigate('Routes')}>
                            <IconBack source={require('../../assets/icons/voltar.png')}/>
                        </BottomBack>
                        <TituloMesa> {idSala.title} </TituloMesa>

                        <ViewJoin>
                            <ButtomJoin onPress={IfUserAdm}>
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
