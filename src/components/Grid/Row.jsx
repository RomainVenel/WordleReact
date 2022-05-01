import './Grid.scss';
import Case from "./Case";
import {WordleContext} from "../../context/wordleContext";
import * as React from "react";

function Row() {

    const {letter} = React.useContext(WordleContext);

    return(
        <div className={'row'}>
            <Case word={letter}/>
            <Case word={letter}/>
            <Case word={letter}/>
            <Case word={letter}/>
            <Case word={letter}/>
        </div>
    )
}
export default Row