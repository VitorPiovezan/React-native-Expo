import styled from 'styled-components/native';

export const ContainerConfig = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const ContainerScroll = styled.View`
    justify-content: center;
    align-items: center;
`
//Header

export const HeaderConfig = styled.View`
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

export const ViewConfig = styled.View`
    right: 5;
    align-items: center;
    position: absolute;
`;

export const ButtomSave = styled.TouchableOpacity`
    justify-content: center;
    width: 70px;
    height: 40px;
    border-radius: 30px;
    align-items: center;
    border-style: solid;
    border-width: 1px;
    border-color: #fff2d9;
`;

export const TextSave = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fff2d9;
`;

//Edit

export const ViewEdit = styled.View`
    width: 85%;
    border-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #5e3200;
    padding: 5px 0px 5px 0px;
    justify-content: center;
`;

export const TextEdit = styled.Text`
    font-weight: bold;
    padding: 5px 0px 5px 0px;
    font-size: 16px;
    color: #5E3200;
`;

export const InputEdit = styled.TextInput`
    color: #684D00;
    margin-bottom: 10px;
    background-color: #fff2d9;
    padding: 5px;
    width: 100%;
    border-radius: 4px;
`;