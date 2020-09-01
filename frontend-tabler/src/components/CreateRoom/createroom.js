import React, { useState,useEffect } from 'react';

import {
    ContainerHome,
    ContainerScroll,
    ViewPiker,
    ViewRadio
} from './styles';

import {
    HeaderConfig,
    BottomBack,
    IconBack,
    TituloMesa,
    ViewConfig,
    ButtomSave,
    TextSave,
    ViewEdit,
    ViewJogarComo,
    TextEdit,
    InputEdit
} from '../EditProfile/styles'

import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, ImageBackground, Picker, Alert } from 'react-native';
import api from '../../api/api'

export default function CreateRoom({ navigation, route }) {

    const user = (route.params.userId)

    const numbers = [
        {value: '1'},{value: '2'},{value: '3'},{value: '4'},{value: '5'},{value: '6'},{value: '7'},{value: '8'},{value: '9'},{value: '10'},{value: '11'},{value: '12'},{value: '13'},{value: '14'},{value: '15'},{value: '16'},{value: '17'},{value: '18'},{value: '19'},{value: '20'},
    ]
    const experiencia = [
        {value: 'Júnior'},{value: 'Pleno'},{value: 'Sênior'}
    ]
    
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [dropdown, setDropdown] = useState([]);
    const [selectedValue, setSelectedValue] = useState('D&D 5E Adventures in Middle Earth');
    const [numberList, setNumberList] = useState('5');
    const [nivelInicial, setNivelInicial] = useState('1');
    const [nivelExperiencia, setNivelExperiencia] = useState('Júnior');
    const [linkDisc, setLinkDisc] = useState('')
    const [checked, setChecked] = useState('player');

    useEffect(() => {
        api.get('roomFormat')
            .then((res) => {
                setDropdown(res.data)
            })
        /* console.log('passou no useEffect') */
    }, [user.id]);

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

    let listaDeItens = null

    if (dropdown !== null) {
        listaDeItens = dropdown.map(item => {
            return <Picker.Item key={item.descFormt} label={item.descFormat} value={item.descFormat} />
        })
    }

    let listaNumbers = null

    if (numbers !== null) {
        listaNumbers = numbers.map(item => {
            return <Picker.Item key={item.value} label={item.value} value={item.value} />
        })
    }

    let listaExperiencia = null

    if (experiencia !== null) {
        listaExperiencia = experiencia.map(item => {
            return <Picker.Item key={item.value} label={item.value} value={item.value} />
        })
    }

    async function postCreateRoom() {
        if(user.apelido === '' || title === '' || desc === '' || numberList === '' || selectedValue === '' || nivelInicial === '' || nivelExperiencia === '' || linkDisc === ''){
            Alert.alert("Tabler", 'Faltou algum campo ae irmão!');

        }else {const res = await api.post('createRoom', {
            ADM_MESA: `${user.apelido}`,
            TITULO_MESA: `${title}`,
            DESC_MESA: `${desc}`,
            QTDEJOG_MESA: `${numberList}`,
            FORMA_MESA: `${selectedValue}`,
            STATUS_MESA: '0',
            LVLINIC_MESA: `${nivelInicial}`,
            EXPJOGO_MESA: `${nivelExperiencia}`,
            LINK_CHAT: `${linkDisc}`
        })
        console.log(res.data)
        Alert.alert("Tabler", 'Sala criada com sucesso! Entre e chame seus amigos!');
        navigation.navigate('Preview', {
            roomID: res.data,
            userId: user
        })
    }
    }

    return (
        <ContainerHome>
            <ImageBackground source={require('../../assets/images/fundo.png')} style={styles.backgroundImage} >
                <ScrollView style={styles.scrollView}>
                    
                            
                    <HeaderConfig>
                    <BottomBack onPress={() => navigation.navigate('Routes')}>
                        <IconBack source={require('../../assets/icons/voltar.png')}/>
                    </BottomBack>
                    <TituloMesa> Criar Sala </TituloMesa>
                
                    <ViewConfig>
                        <ButtomSave onPress={postCreateRoom}>
                        <TextSave>Criar</TextSave>
                        </ButtomSave>
                    </ViewConfig>
                    </HeaderConfig>
                    
                    <ContainerScroll>

                    <ViewEdit>
                        <TextEdit>Titulo da Mesa</TextEdit>
                        <InputEdit
                                autoCapitalize='none'
                                onChangeText={setTitle}
                                value={title}
                                placeholder="Ilha do Molusco" />
                    </ViewEdit>

                    <ViewEdit>
                        <TextEdit>Descrição da Mesa</TextEdit>
                        <InputEdit
                                autoCapitalize='none'
                                onChangeText={setDesc}
                                value={desc}
                                placeholder="Procura-se Jogadores que comam abacaxi" />
                    </ViewEdit>
                    
                    <ViewEdit>
                        <TextEdit>Formato da Mesa</TextEdit>
                        <ViewPiker>
                            <Picker
                                onValueChange={(itemValue) => setSelectedValue(itemValue)}
                                selectedValue={selectedValue}
                                style={{ width: '100%' }}
                            >
                                {listaDeItens}
                            </Picker>
                        </ViewPiker>
                    </ViewEdit>

                    <ViewEdit>
                        <TextEdit>Qtd. Max. de Jogadores</TextEdit>
                        <ViewPiker>
                            <Picker
                                onValueChange={(itemValue) => setNumberList(itemValue)}
                                selectedValue={numberList}
                                style={{ width: '100%' }}
                            >
                                {listaNumbers}
                            </Picker>
                        </ViewPiker>
                    </ViewEdit>

                    <ViewEdit>
                        <TextEdit>Nivel Inicial</TextEdit>
                        <ViewPiker>
                            <Picker
                                onValueChange={(itemValue) => setNivelInicial(itemValue)}
                                selectedValue={nivelInicial}
                                style={{ width: '100%' }}
                            >
                                {listaNumbers}
                            </Picker>
                        </ViewPiker>
                    </ViewEdit>

                    <ViewEdit>
                        <TextEdit>Experiência com o Jogo</TextEdit>
                        <ViewPiker>
                            <Picker
                                onValueChange={(itemValue) => setNivelExperiencia(itemValue)}
                                selectedValue={nivelExperiencia}
                                style={{ width: '100%' }}
                            >
                                {listaExperiencia}
                            </Picker>
                        </ViewPiker>
                    </ViewEdit>

                    <ViewEdit>
                        <TextEdit>Link Voice Chat</TextEdit>
                        <InputEdit
                                autoCapitalize='none'
                                onChangeText={setLinkDisc}
                                value={linkDisc}
                                placeholder="Convite Discord ou outra plataforma" />
                    </ViewEdit>

                    </ContainerScroll>
                </ScrollView>
            </ImageBackground>
        </ContainerHome>

    )
}