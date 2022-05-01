import * as React from "react";
import {WordleContext} from "../../context/wordleContext";

function Key(props) {

    const {setLetter} = React.useContext(WordleContext);

    return (
        <button className={'caseKeyboard'} onClick={(e) => setLetter(e.currentTarget.innerText)}>{props.value}</button>
    )
}
export default Key;