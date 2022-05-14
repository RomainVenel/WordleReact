import * as React from "react";
import {WordleContext} from "../../context/wordleContext";

function Key(props) {

    const {setLetter, setIndexCase, indexCase, setIndexRow, indexRow, placedLetters, setPlacedLetters, setErrorMessage} = React.useContext(WordleContext);

    function handleClick(e) {
        e.preventDefault();
        let letter = e.currentTarget.innerText;
        if (letter === 'DELETE') {
            // Suppression de la dernière lettre rentrée
            setIndexRow(indexRow);
            setIndexCase(indexCase - 1);
            placedLetters.pop();
            let letter = placedLetters[placedLetters.length - 1];
            setLetter(letter);
        } else if (letter === 'ENTER') {
            // Touche entrée
            if (placedLetters.length < 5) {
                setErrorMessage('Veuillez entrer un mot de 5 lettres');
                setTimeout(() => {
                    setErrorMessage('');
                }, 2000);
            } else {
                // Réinitialisation de toutes les variables + passage à la ligne
                setPlacedLetters([]);
                setErrorMessage('');
                setIndexRow(indexRow + 1);
                setIndexCase(-1);
            }
        } else {
            setLetter(letter);
            setIndexRow(indexRow);
            // Vérification de la taille du mot pour ne pas rajouter des lettres dans le tableau si déjà taille max
            if (placedLetters.length < 5) {
                setIndexCase(indexCase + 1);
                placedLetters.push(letter);
            }
        }
    }

    return (
        <button className={'caseKeyboard'} onClick={handleClick}>{props.value}</button>
    )
}
export default Key;