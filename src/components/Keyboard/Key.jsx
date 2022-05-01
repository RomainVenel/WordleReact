import * as React from "react";
import {WordleContext} from "../../context/wordleContext";

function Key(props) {

    const {setLetter, setIndexCase, indexCase, setIndexRow, indexRow} = React.useContext(WordleContext);

    function handleClick(e) {
        e.preventDefault();
        setLetter(e.currentTarget.innerText);
        setIndexRow(0);
        setIndexCase(indexCase + 1);
    }

    return (
        <button className={'caseKeyboard'} onClick={handleClick}>{props.value}</button>
    )
}
export default Key;