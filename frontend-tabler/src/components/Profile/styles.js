import styled from 'styled-components/native';
/* Styles Profile */
export const ContainerProfile = styled.View`
    flex: 1;
    align-items: center;
`;
export const ImgProfileConfig = styled.Image`
    width: 150px;
    height: 150px;
    border-radius: 100;
    margin: 50px 0px 0px 0px;
`;
export const TextNameUser = styled.Text`
    color: #5e3200;
    font-weight: bold;
    font-size: 26px;
    padding: 20px;
`;
export const ViewConfig = styled.View`
    border-style: solid;
    border-top-color: #5e3200;
    border-top-width: 1px;
    height: 60px;
    width: 40%;
    align-items: center;
    justify-content: center;
`;
export const TextConfig = styled.Text`
    color: #5e3200;
    font-weight: bold;
    font-size: 20px;
`;
export const ViewConfigList = styled.View`
    border-style: solid;
    border-top-color: #5e3200;
    border-top-width: 2px;
    width: 85%;
`;
export const ButtonConfigList = styled.TouchableOpacity`
    border-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #5e3200;
    padding: 15px 0 0 15px;
    justify-content: center;
`;
export const TextConfigList = styled.Text`
    color: #5E3200;
    font-size: 18px;
    padding-bottom: 15px;
`;

/* Rodapé */

export const ViewSair = styled.View`
    position: absolute;
    right: 15px;
    top: 15px;
`;

export const TextBoxRodape = styled.Text`
    font-size: 12px;
    color: #5E3200;
    margin-bottom: 4px;
`;

export const ButtonOut = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-style: solid;
    border-width: 1px;
    border-color: #5E3200;
    border-radius: 30px;
`;

export const IconLogout = styled.Image`
    width: 60%;
    height: 60%;
    margin-left: 2px;
`;

export const ViewContRodape = styled.View`
    align-items: center;
    width: 100%;
    padding: 30px;
`;

// Modal Sair

export const ViewButton = styled.TouchableHighlight`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: #120900;
    opacity: 0.8;
`;

export const ViewModal = styled.View`
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
    color: #120900;
`;

export const ButtonView = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    padding: 0px 0px 15px 0px;
`;

export const ButtonQuest = styled.TouchableOpacity`
    padding: 15px;
    width: 40%;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: #5E3200;
    background-color: #DAC69A;
    border-radius: 15;
`;

export const TextButtonSair = styled.Text`
    font-size: 16px;
`;