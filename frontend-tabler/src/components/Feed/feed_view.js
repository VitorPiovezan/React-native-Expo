import React from 'react';
import {
    ViewRoom,
    ViewTitles,
    TitleRoom,
    PlayersRoom,
    ButtonRoom,
    TextButtonRoom,
    ViewButtonRoom
} from './styles';

const ListItems = (props) => {

    return (

            <ViewRoom>
                <ViewTitles>
                    <TitleRoom>{props.title}</TitleRoom>
                    <PlayersRoom>{props.qtdeJog} Jogadores | M: {props.admMesa}</PlayersRoom>
                </ViewTitles>

                <ViewButtonRoom><ButtonRoom onPress={props.handlePressJoin}>
                    <TextButtonRoom>Entrar</TextButtonRoom>
                </ButtonRoom></ViewButtonRoom>
            </ViewRoom>

    )
}

export default ListItems;