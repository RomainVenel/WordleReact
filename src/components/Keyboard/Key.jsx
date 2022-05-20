import * as React from "react";
import {WordleContext} from "../../context/wordleContext";

function Key(props) {

    const {setLetter, setIndexCase, indexCase, setIndexRow, indexRow, placedLetters, setPlacedLetters, oldWords, setOldWords, colors, setColors, setErrorMessage} = React.useContext(WordleContext);

    function checkWord() {
        let randomWord = '';
        props.randomWord.then(function(value) {
                randomWord = value;
                randomWord = randomWord.split("");
                console.log(randomWord);
                console.log(placedLetters);
                if (JSON.stringify(randomWord) === JSON.stringify(placedLetters)) {
                    setErrorMessage('Bien joué');
                } else {
                    checkLetters(randomWord, placedLetters);
                    setOldWords([...oldWords, placedLetters]);
                    // Réinitialisation de toutes les variables + passage à la ligne
                    setPlacedLetters([]);
                    setErrorMessage('');
                    setIndexRow(indexRow + 1);
                    setIndexCase(-1);
                }
            },
            function(error) {  });
    }

    function checkLetters(randomWord, testedWord) {
        let colorArray = [];
        testedWord.map((letter, index) => {
            if (letter === randomWord[index]) {
                colorArray[index] = 'green';
            } else {
                colorArray[index] = 'grey';
            }
            setColors([...colors, colorArray]);
        });
    }

    function handleClick(e) {
        e.preventDefault();
        let letter = e.currentTarget.innerText;
        if (letter === 'DELETE') {
            // Suppression de la dernière lettre rentrée
            setIndexRow(indexRow);
            // L'index est toujours minimum à 0
            if (indexCase > -1) {
                setIndexCase(indexCase - 1);
            }
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
                checkWord();
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