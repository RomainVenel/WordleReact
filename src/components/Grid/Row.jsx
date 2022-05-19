import './Grid.scss';
import Case from "./Case";
import {WordleContext} from "../../context/wordleContext";
import * as React from "react";

function Row(props) {

    const {letter, indexCase, indexRow,  placedLetters, oldWords} = React.useContext(WordleContext);
    const numbers = [0, 1, 2, 3, 4];

    const getLetter = (index) => {
        if (props.stateRow) {
            if (indexCase === index) {
                return letter;
            }
            return placedLetters[index];
        } else {
            if (oldWords.length > 0) {
                if (props.index === indexRow-1) {
                    return oldWords[indexRow-1][index];
                }
            }
        }
    };

    return(
        <div className={'row'}>
            {numbers.map((number) =>
                <Case key={number} word={getLetter(number)}/>
            )}
        </div>
    )
}
export default Row