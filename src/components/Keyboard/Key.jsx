import * as React from "react";
import {WordleContext} from "../../context/wordleContext";

function Key(props) {

    const {setLetter, setIndexCase, indexCase, setIndexRow, placedLetters} = React.useContext(WordleContext);

    function handleClick(e) {
        e.preventDefault();
        let letter = e.currentTarget.innerText;
        if (letter !== 'DELETE') {
            setLetter(letter);
            setIndexRow(0);
            setIndexCase(indexCase + 1);
            placedLetters.push(letter);
        } else {
            // Suppression de la dernière lettre rentrée
            setIndexRow(0);
            setIndexCase(indexCase - 1);
            placedLetters.pop();
            let letter = placedLetters[placedLetters.length - 1];
            setLetter(letter);
        }
    }

    return (
        <button className={'caseKeyboard'} onClick={handleClick}>{props.value}</button>
    )
}
export default Key;