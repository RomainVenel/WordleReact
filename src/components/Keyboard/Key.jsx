import * as React from "react";
import {WordleContext} from "../../context/wordleContext";

function Key(props) {

    const {setLetter, setIndexCase, indexCase, setIndexRow, placedLetters} = React.useContext(WordleContext);

    function handleClick(e) {
        let letter = e.currentTarget.innerText;
        e.preventDefault();
        setLetter(letter);
        setIndexRow(0);
        setIndexCase(indexCase + 1);
        placedLetters.push(letter);
    }

    return (
        <button className={'caseKeyboard'} onClick={handleClick}>{props.value}</button>
    )
}
export default Key;