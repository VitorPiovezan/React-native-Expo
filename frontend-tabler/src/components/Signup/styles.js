import styled from 'styled-components/native';

export const ErrorMessage = styled.Text`
    color: #fff;
    margin: 5px;
    padding: 5px;
    background-color: red;
    border-radius: 5px;
`

export const Container = styled.View`
    flex: auto;
    justify-content: center;
    align-items: center;
    background-color: #D9BA8E;
`

export const SubTitle = styled.Text`
    color: #684d00;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    margin-bottom: 10px;
`

export const Title = styled.Text`
    color: #684d00;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    margin-bottom: 10px;
`

export const Logo = styled.Image`
    margin-top: -70px;
    width: 250px;
    height: 250px;
    margin-bottom: -70px;
    position: relative;
`

export const Inputs = styled.TextInput`
    color: #684d00
    margin-bottom: 10px;
    background-color: #eee;
    padding: 10px;
    width: 300px;
    border-radius: 4px;
`
export const ButtonView = styled.View`
    flex-direction: row;
    width: 300px;
    align-items: center;
    justify-content: space-between;
`

export const Button = styled.TouchableOpacity`
    height: 42px;
    width: 145px;
    border-radius: 5px;
    background-color: #95621F;
    justify-content: center;
    align-items: center;
`

export const TextButton = styled.Text`
    color: #fff;
    font-weight: bold;
`

export const ButtonViewRegister = styled.View`
    justify-content: center;
    align-items: center;
`
export const ButtonRegisterOk = styled.TouchableOpacity`
    height: 42px;
    width: 300px;
    border-radius: 5px;
    background-color: #95621F;
    justify-content: center;
    align-items: center;
`