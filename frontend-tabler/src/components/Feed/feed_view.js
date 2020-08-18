import React, {Component} from 'react';
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

export default class ScrollViewFeed extends Component {
    render () {
        return(
        <ScrollView>

                {this.state.users.map(item => <ViewRoom>
                <ViewTitles>
                    <TitleRoom>{item.title}</TitleRoom>
                    <PlayersRoom>{item.qtdeJog} Jogadores | M: {item.admMesa}</PlayersRoom>
                </ViewTitles>

                <ViewButtonRoom><ButtonRoom>
               <TextButtonRoom>Join</TextButtonRoom>
            </ButtonRoom></ViewButtonRoom>
            </ViewRoom>)}                                

        </ScrollView>
    )
}}
