import './Grid.scss';
import './Row'
import Row from "./Row";
import React from "react";
import {WordleContext} from "../../context/wordleContext";

function Grid() {

    const isActiveRow = true;

    const {indexRow} = React.useContext(WordleContext);
    const numbers = [0, 1, 2, 3, 4, 5];

    const getRow = (index) => {
        if (indexRow === index) {
            return <Row key={index} index={index} stateRow={isActiveRow}/>
        }
        return <Row key={index} index={index} stateRow={false}/>

    };

    return(
        <div id={'grid'}>
            {numbers.map((number) =>
                getRow(number)
            )}
        </div>
    )
}
export default Grid