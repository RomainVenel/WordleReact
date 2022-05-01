import './Grid.scss';
import Case from "./Case";
import {WordleContext} from "../../context/wordleContext";
import * as React from "react";

function Row(props) {

    const {letter} = React.useContext(WordleContext);

    const getLetter = () => {
        if (props.state) {
            return letter;
        }
        return '';
    };

    return(
        <div className={'row'}>
            <Case word={getLetter()}/>
            <Case word={getLetter()}/>
            <Case word={getLetter()}/>
            <Case word={getLetter()}/>
            <Case word={getLetter()}/>
        </div>
    )
}
export default Row