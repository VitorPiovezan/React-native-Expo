import styled from 'styled-components/native';

export const ContainerRoom = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ContainerScroll = styled.View`
    justify-content: center;
    align-items: center;
`;

export const B = styled.Text`
    font-weight: bold;
`;

//Div detalhes do mestre -------------------------------------------------

export const DetailsMestre = styled.View`
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
    font-size: 15px;
    color: #5E3200;
`;

export const SDetailsMestre = styled.View`
    width: 85%;
    height: 80px;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    border-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #777;
`;


export const SDados = styled.View`
    align-items: center;
    justify-content:center;
`;

export const STextDetails = styled.Text`
    padding: 5px;
    font-size: 20px;
    color: #5E3200;
`;


//Header -------------------------------------------------


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
    font-size: 20px;
    font-weight: bold;
    padding: 15px;
    color: #fff2d9;
`;

export const ViewJoin = styled.View`
    right: 5;
    align-items: center;
    position: absolute;
`;

export const ButtomJoin = styled.TouchableOpacity`
    justify-content: center;
    width: 70px;
    height: 40px;
    border-radius: 30px;
    align-items: center;
    border-style: solid;
    border-width: 1px;
    border-color: #fff2d9;
`;

export const TextJoin = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fff2d9;
`;

//Div Detalhes RPG -------------------------------------------------

export const DetailsRPG = styled.View`
    width: 85%;
    height: 60px;
    border-style: solid;
    align-items: center;
    border-bottom-width: 1px;
    justify-content: space-evenly;
    border-bottom-color: #777;
`;

export const TitleRPG = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #5E3200;
`;

export const DetailsRoom = styled.View`
    width: 85%;
    align-items: center;
    border-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #777;
`;

export const DetailsRoomText = styled.View`
    width: 100%; 
    padding-bottom: 15px;
`;

export const DetailsText = styled.Text`
    font-size: 16px;
    color: #5E3200;
    padding: 5px;
`;

export const DetailsTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #5E3200;
    padding: 15px;
`;

//Div detalhes dos playes -------------------------------------------------

export const TitlePlayers = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #5E3200;
    padding: 15px;
`;

export const Players = styled.View`
    width: 85%; 
    padding-bottom: 15px;
    flex: 1;
`;


export const PlayersAtivos = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    border-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #777;
    padding: 5px 0px 5px 0px ;
`;

export const AvatarPlayer = styled.Image`
    height: 70;
    width: 70;
    border-radius: 100;
    margin-right: 15px;
`;

export const DetailsPlayers = styled.View`
    
`;

export const DetailsPlayersText = styled.Text`
    font-size: 16px;
    color: #5E3200;
    padding: 4px;
`;

export const TitleView = styled.View`
    width: 100%;
    align-items: center;
`;

//Modal

export const ViewButton = styled.TouchableHighlight`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: #120900;
    opacity: 0.8;
`;

export const ViewModal = styled.TouchableOpacity`
    width: 70%;
    padding: 20px;
    background-color: #D9BA8E;
    align-items: center;
    justify-content: center;
    border-radius: 20;
`;

export const TitleModal = styled.Text`
    font-size: 18px;
    padding: 15px 15px 25px 15px;
    color: #5E3200;
`;

export const ViewRadio = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
`;

//Modal Jogador

export const ViewPlayerRequest = styled.View`
    width: 100%;
    align-items: center;
`;

export const ViewImputsPlayerRequest = styled.View`
    width: 100%;
    padding: 5px 0px 5px 0px;
    justify-content: center;
`;

export const TextPlayerRequest = styled.Text`
    font-weight: bold;
    padding: 5px 0px 5px 0px;
    font-size: 16px;
    color: #5E3200;
`;

export const InputPlayerRequest = styled.TextInput`
    color: #684D00;
    background-color: #fff2d9;
    padding: 5px;
    width: 100%;
    border-radius: 4px;
`;

export const ButtonJoinRoom = styled.TouchableOpacity`
    background-color: #fff2d9;
    padding: 15px;
    width: 50%;
    margin-top: 15px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
`;

export const TextModalPlayer = styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: #5E3200;
`;