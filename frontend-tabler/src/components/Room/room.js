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
    TitleRPG,
    TitlePlayers,
    DetailsText,
    Players,
    TitleView,
    ContainerScroll,
    SDetailsMestre,
    SDados,
    STextDetails,
    LinkDiscord
} from './styles';

import ListItems from './playersroom';
import api from '../../api/api'
import { StyleSheet, ImageBackground, ScrollView, Modal, Text, Alert} from 'react-native';

export default function Room({navigation, route}) {

    const [cadastrado, setCadastrado] = useState('')

    const idSala  = route.params.idSala
    const userId = route.params.userId 

    const [rooms, setRooms] = useState('')
    const [players, setPlayers] = useState([])
  

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
                    
                    <HeaderRoom>
                        <BottomBack onPress={() => navigation.navigate('Routes')}>
                            <IconBack source={require('../../assets/icons/voltar.png')}/>
                        </BottomBack>
                        <TituloMesa> {idSala.title} </TituloMesa>

                    </HeaderRoom>

                    <ScrollView style={styles.scrollView}>
                    <ContainerScroll>

                    <DetailsRPG>
                        <TitleRPG> {idSala.formato} </TitleRPG>
                    </DetailsRPG>
                
                    <MestreStatus/>

                        <LinkDiscord><DetailsText><B>Link Discord: </B>{idSala.linkChat}</DetailsText></LinkDiscord>

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
