import './Grid.scss';
import Case from "./Case";
import {WordleContext} from "../../context/wordleContext";
import * as React from "react";

function Row(props) {

    const {letter, indexCase, indexRow,  placedLetters, oldWords, setErrorMessage} = React.useContext(WordleContext);
    const numbers = [0, 1, 2, 3, 4];

    function endGame() {
        setErrorMessage('Jeu terminé');
    }

    const getLetter = (index) => {
        if (props.stateRow) {
            if (indexCase === index) {
                return letter;
            }
            return placedLetters[index];
        } else {
            if (oldWords.length > 0) {
                if (props.index === indexRow - 1) {
                    return oldWords[indexRow - 1][index];
                } else if (props.index === indexRow - 2) {
                    return oldWords[indexRow - 2][index];
                } else if (props.index === indexRow - 3) {
                    return oldWords[indexRow - 3][index];
                } else if (props.index === indexRow - 4) {
                    return oldWords[indexRow - 4][index];
                } else if (props.index === indexRow - 5) {
                    return oldWords[indexRow - 5][index];
                } else if (props.index === indexRow - 6) {
                    endGame();
                    return oldWords[indexRow - 6][index];
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