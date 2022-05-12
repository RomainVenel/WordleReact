import * as React from "react";
import {WordleContext} from "../../context/wordleContext";

function Key(props) {

    const {setLetter, setIndexCase, indexCase, setIndexRow, placedLetters, setErrorMessage} = React.useContext(WordleContext);

    function handleClick(e) {
        e.preventDefault();
        let letter = e.currentTarget.innerText;
        if (letter === 'DELETE') {
            // Suppression de la dernière lettre rentrée
            setIndexRow(0);
            setIndexCase(indexCase - 1);
            placedLetters.pop();
            let letter = placedLetters[placedLetters.length - 1];
            setLetter(letter);
        } else if (letter === 'ENTER') {
            // Touche entrée
            if (placedLetters.length < 5) {
                setErrorMessage('Veuillez entrer un mot de 5 lettres');
            } else {
                setErrorMessage('');
            }
        } else {
            setLetter(letter);
            setIndexRow(0);
            setIndexCase(indexCase + 1);
            placedLetters.push(letter);
        }
    }

    return (
        <button className={'caseKeyboard'} onClick={handleClick}>{props.value}</button>
    )
}
export default Key;