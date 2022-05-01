import './Grid.scss';
import Case from "./Case";
import {WordleContext} from "../../context/wordleContext";
import * as React from "react";

function Row(props) {

    const {letter, indexCase} = React.useContext(WordleContext);
    const numbers = [0, 1, 2, 3, 4];

    const getLetter = (index) => {
        if (props.stateRow && indexCase === index) {
            return letter;
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