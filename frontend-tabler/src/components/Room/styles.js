import styled from 'styled-components/native';

export const ContainerRoom = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const DetailsRoom = styled.View`
    width: 85%;
    height: 80px;
    flex-direction: row;
    align-items: center;
    border-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #777;
`;

export const Avatar = styled.Image`
    height: 50;
    width: 50;
    border-radius: 100;
    margin-right: 15px;
`;

export const Dados = styled.View`
    
`;

export const TextDetails = styled.Text`
    padding: 5px;
    font-size: 15;
    font-weight: bold;
`;

export const HeaderRoom = styled.View`
    align-items:center;
    width: 100%;
    height: 50px;
    background-color: #5e3200;
    flex-direction: row;
`;

export const BottomBack = styled.TouchableOpacity`
    height: 80%;
    align-items: center;
    justify-content: center;
`;

export const IconBack = styled.Image`
    height: 30;
    width: 30;
    margin-left: 15px;
`;

export const TituloMesa = styled.Text`
    font-size: 20;
    font-weight: bold;
    padding: 15px;
    color: white;
`;