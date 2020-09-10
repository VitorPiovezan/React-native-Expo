import styled from 'styled-components/native';

export const ContainerHome = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ContainerScroll = styled.View`
    width: 85%;
    justify-content: center;
    align-items: center;
`;

//create room styles

export const CreateRoomButton = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 15px 0px 15px 0px;
    border-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #5e3200;
`;

export const CreateRoomIcon = styled.Image`
    width: 50px;
    height: 50px;
`;

export const CreateRoomText = styled.Text`
    font-weight: bold;
    font-size: 18px;
    padding:15px;
    color: #5e3200;
`;

//Salas Participando

export const ViewYoursRooms = styled.View`
    width: 85%;
    justify-content: center;
    align-items: center;    
`;

export const TitleYoursRooms = styled.Text`
    padding: 20px;
    font-weight: bold;
    font-size: 20px;
    color: #5e3200;
`;



