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
import { ScrollView } from 'react-native-gesture-handler';

const ListItems = (props) => {

    return (

            <ViewRoom>
                <ViewTitles>
                    <TitleRoom>{props.title}</TitleRoom>
                    <PlayersRoom>{props.qtdeJog} Jogadores | M: {props.admMesa}</PlayersRoom>
                </ViewTitles>

                <ViewButtonRoom><ButtonRoom>
                    <TextButtonRoom>Join</TextButtonRoom>
                </ButtonRoom></ViewButtonRoom>
            </ViewRoom>

    )
}

export default ListItems;