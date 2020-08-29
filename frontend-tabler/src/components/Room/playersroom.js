import React from 'react';
import {
    PlayersAtivos,
    AvatarPlayer,
    DetailsPlayers,
    DetailsPlayersText,
    B,
    TitleView,
    TitlePlayers
} from './styles';

const ListItems = (props) => {
    if( props.playerName !== 'NO_PLAYERS'){
        return (
    
                <PlayersAtivos>
                    <AvatarPlayer source={require('../../assets/images/tpouse.jpg')}/>
                    <DetailsPlayers>
                        <DetailsPlayersText><B>Player:</B> {props.playerName}</DetailsPlayersText>
                        <DetailsPlayersText><B>Char:</B> {props.playerChar}</DetailsPlayersText>
                        <DetailsPlayersText><B>Classe:</B> {props.playerClass}</DetailsPlayersText>
                    </DetailsPlayers>
                </PlayersAtivos>
    
        )
    }else{
    return <TitleView>
        <TitlePlayers>Sala sem Jogadores</TitlePlayers>
    </TitleView>}
}

export default ListItems;