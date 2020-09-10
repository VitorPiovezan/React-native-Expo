import React, { useState } from 'react';

import {
    B,
    ContainerRoom,
    ContainerScroll,
    ViewImputsPlayerRequest,
    TextPlayerRequest,
    InputPlayerRequest,
    HeaderRoom,
    BottomBack,
    IconBack,
    TituloMesa,
    ButtonJoinRoom,
    ViewJoin,
    TextModalPlayer
} from './styles';
import api from '../../api/api'
import { StyleSheet, ImageBackground, ScrollView, Alert} from 'react-native';

export default function CreatePlayer({navigation, route}) {

    const idSala  = route.params.idSala
    const userId = route.params.userId 


    const [mestreJoga, setMestreJoga] = useState(0)
    const [teste, setTeste] = useState('')
    const [playerChar, setPlayerChar] = useState('')
    const [playerClass, setPlayerClass] = useState('')

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


    async function PostaIss() {   //Faz o post com os dados para o backend
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
                    navigation.navigate('Routes')
                    navigation.navigate('Preview', 
                    {
                        roomID: idSala,
                        userId: userId
                    })
                    
    }

    async function PostCharOrMaster() {  //Faz uma conferencia para ver se o jogador esta com o nome vazio

            if(playerChar === '' || playerClass === ''){
                Alert.alert('Tabler','Falto um campo ae irmão')
            }else{
                setTeste('DeuBom')
                PostaIss();                  
            }
        

    }

    return (
        <ContainerRoom>
            <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage} >

                    <HeaderRoom>
                        <BottomBack onPress={() => navigation.navigate('Preview')}>
                            <IconBack source={require('../../assets/icons/voltar.png')}/>
                        </BottomBack>
                        <TituloMesa> Criar Personagem </TituloMesa>
                    </HeaderRoom>

                <ScrollView style={styles.scrollView}>
                <ContainerScroll>

                        <ViewImputsPlayerRequest>
                            <TextPlayerRequest>Nome Char</TextPlayerRequest>
                            <InputPlayerRequest
                                    autoCapitalize='none' 
                                    onChangeText={setPlayerChar}
                                    value={playerChar} />
                        </ViewImputsPlayerRequest>

                        <ViewImputsPlayerRequest>
                            <TextPlayerRequest>Classe Char</TextPlayerRequest>
                            <InputPlayerRequest
                                    autoCapitalize='none' 
                                    onChangeText={setPlayerClass}
                                    value={playerClass} />
                        </ViewImputsPlayerRequest>
                
                        <ButtonJoinRoom onPress={PostCharOrMaster}><TextModalPlayer>Entrar</TextModalPlayer></ButtonJoinRoom>

                </ContainerScroll>
                </ScrollView>
            </ImageBackground>
        </ContainerRoom>

    )
}
