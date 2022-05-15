import RowKeyboard from "./RowKeyboard";
import './Keyboard.scss';
import * as React from "react";

function Keyboard(props) {

    return (
        <div id={'keyboard'}>
            <RowKeyboard randomWord={props.randomWord}/>
        </div>
    )
}
export default Keyboard;