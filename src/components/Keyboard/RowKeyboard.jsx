import Key from "./Key";
import * as React from "react";

function RowKeyboard(props) {

    return (
        <div>
            <div className={'rowKeyboard'}>
                {['A','Z','E','R','T','Y','U','I','O','P'].map((key) => (
                    <Key key={key} value={key} randomWord={props.randomWord}/>
                ))}
            </div>
            <div className={'rowKeyboard'}>
                {['Q','S','D','F','G','H','J','K','L','M'].map((key) => (
                    <Key key={key} value={key} randomWord={props.randomWord}/>
                ))}
            </div>
            <div className={'rowKeyboard'}>
                <Key key={'ENTER'} value={'ENTER'} randomWord={props.randomWord}/>
                {['W','X','C','V','B','N'].map((key) => (
                    <Key key={key} value={key} randomWord={props.randomWord}/>
                ))}
                <Key key={'DELETE'} value={'DELETE'} randomWord={props.randomWord}/>
            </div>
        </div>
    )
}
export default RowKeyboard;