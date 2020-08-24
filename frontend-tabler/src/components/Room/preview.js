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
    DetailsTextRPG,
    TitleRPG,
    TitlePlayers,
    DetailsText,
    DetailsTitle,
    DetailsRoomText,
    Players,
    PlayersAtivos,
    AvatarPlayer,
    DetailsPlayers,
    DetailsPlayersText,
    TitleView,
    ViewJoin,
    ButtomJoin,
    TextJoin,
    ContainerScroll
} from './styles';

import api from '../../api/api'
import { StyleSheet, ImageBackground, ScrollView } from 'react-native';

export default function Preview({navigation, route}) {

    const idSala  = route.params.roomID
    const userId = route.params.userId  
    console.log(userId)
    const [rooms, setRooms] = useState([])

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

    useEffect(() => {
        async function getIdRoom() {
                const res = await api.post(`roomData`, {
                    ID_MESA: `${idSala}`
                })
                setRooms(res.data)
                console.log(res.data)
                /* console.log(res.data) */
        }
        
        getIdRoom()

    }, [idSala])

    return (
        <ContainerRoom>
            <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage} >
                    <HeaderRoom>
                        <BottomBack onPress={() => navigation.navigate('Routes')}>
                            <IconBack source={require('../../assets/icons/voltar.png')}/>
                        </BottomBack>
                        <TituloMesa> {rooms.title} </TituloMesa>

                        <ViewJoin>
                            <ButtomJoin>
                                <TextJoin>Entrar</TextJoin>
                            </ButtomJoin>
                        </ViewJoin>
                    </HeaderRoom>

                    <ScrollView style={styles.scrollView}>
                    <ContainerScroll>

                    <DetailsRPG>
                        <TitleRPG> Dangeons and Dragons v5.0 </TitleRPG>
                    </DetailsRPG>

                    <DetailsRoom>
                        <DetailsTitle>Requisições</DetailsTitle>
                            <DetailsRoomText>
                                <DetailsText><B>Nivel Inicial do Char:</B> 1</DetailsText>
                                <DetailsText><B>Máximo de Players:</B> 12</DetailsText>
                                <DetailsText><B>Nivel de Experiência:</B> Veterano</DetailsText>
                            </DetailsRoomText>
                    </DetailsRoom>

                    <DetailsMestre>
                        <Avatar source={require('../../assets/images/puts.png')} />
                        <Dados>
                            <TextDetails><B>Mestre:</B> {rooms.admMesa} </TextDetails>
                            <TextDetails><B>Quant. de mesas:</B> {rooms.qtdeJog} </TextDetails>
                        </Dados>
                    </DetailsMestre>

                    <Players>
                        <TitleView><TitlePlayers>Jogadores</TitlePlayers></TitleView>
                                <PlayersAtivos>
                                    <AvatarPlayer source={require('../../assets/images/perfilIcon.jpg')}/>
                                    <DetailsPlayers>
                                        <DetailsPlayersText><B>Player:</B> Offar</DetailsPlayersText>
                                        <DetailsPlayersText><B>Char:</B> Osmar</DetailsPlayersText>
                                        <DetailsPlayersText><B>Classe:</B> Guerreiro</DetailsPlayersText>
                                    </DetailsPlayers>
                                </PlayersAtivos>

                                <PlayersAtivos>
                                    <AvatarPlayer source={require('../../assets/images/perfil_exemple1.jpeg')}/>
                                    <DetailsPlayers>
                                        <DetailsPlayersText><B>Player:</B> Cerso</DetailsPlayersText>
                                        <DetailsPlayersText><B>Char:</B> Talude</DetailsPlayersText>
                                        <DetailsPlayersText><B>Classe:</B> Guerreiro</DetailsPlayersText>
                                    </DetailsPlayers>
                                </PlayersAtivos>

                                <PlayersAtivos>
                                    <AvatarPlayer source={require('../../assets/images/perfil_exemple2.jpeg')}/>
                                    <DetailsPlayers>
                                        <DetailsPlayersText><B>Player:</B> Tupete</DetailsPlayersText>
                                        <DetailsPlayersText><B>Char:</B> Tai</DetailsPlayersText>
                                        <DetailsPlayersText><B>Classe:</B> Monge</DetailsPlayersText>
                                    </DetailsPlayers>
                                </PlayersAtivos>

                                <PlayersAtivos>
                                    <AvatarPlayer source={require('../../assets/images/perfil_exemple3.jpeg')}/>
                                    <DetailsPlayers>
                                        <DetailsPlayersText><B>Player:</B> XinFeeder</DetailsPlayersText>
                                        <DetailsPlayersText><B>Char:</B> Hark</DetailsPlayersText>
                                        <DetailsPlayersText><B>Classe:</B> Arqueiro Arcano</DetailsPlayersText>
                                    </DetailsPlayers>
                                </PlayersAtivos>

                                <PlayersAtivos>
                                    <AvatarPlayer source={require('../../assets/images/perfil_exemple4.jpeg')}/>
                                    <DetailsPlayers>
                                        <DetailsPlayersText><B>Player:</B> Vitu</DetailsPlayersText>
                                        <DetailsPlayersText><B>Char:</B> Kreed</DetailsPlayersText>
                                        <DetailsPlayersText><B>Classe:</B> Ladino</DetailsPlayersText>
                                    </DetailsPlayers>
                                </PlayersAtivos>

                                <PlayersAtivos>
                                    <AvatarPlayer source={require('../../assets/images/perfil_exemple5.jpeg')}/>
                                    <DetailsPlayers>
                                        <DetailsPlayersText><B>Player:</B> Pedrão</DetailsPlayersText>
                                        <DetailsPlayersText><B>Char:</B> Arom</DetailsPlayersText>
                                        <DetailsPlayersText><B>Classe:</B> Druida</DetailsPlayersText>
                                    </DetailsPlayers>
                                </PlayersAtivos>
                    </Players>
                
                </ContainerScroll>
                </ScrollView>
            </ImageBackground>
        </ContainerRoom>

    )
}
