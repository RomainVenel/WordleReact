import './Grid.scss';
import Case from "./Case";
import {WordleContext} from "../../context/wordleContext";
import * as React from "react";

function Row(props) {

    const {letter, indexCase, indexRow,  placedLetters, oldWords, colors, setErrorMessage, keyColors} = React.useContext(WordleContext);
    const numbers = [0, 1, 2, 3, 4];

    function endGame() {
        let popup = document.querySelector('#popup-lose');
        popup.style.display = 'block';
        popup.className = 'animate__animated animate__fadeIn';
        document.querySelector('.App').style.pointerEvents = 'none';
    }

    const getLetter = (index) => {
        if (props.stateRow) {
            if (indexCase === index) {
                return <Case key={index} word={letter}/>
            }
            return <Case key={index} word={placedLetters[index]}/>
        } else {
            if (oldWords.length > 0) {
                if (props.index === indexRow - 1) {
                    let color = colors[indexRow - 1][index];
                    return <Case key={index} color={color} word={oldWords[indexRow - 1][index]}/>
                } else if (props.index === indexRow - 2) {
                    let color = colors[indexRow - 2][index];
                    return <Case key={index} color={color} word={oldWords[indexRow - 2][index]}/>
                } else if (props.index === indexRow - 3) {
                    let color = colors[indexRow - 3][index];
                    return <Case key={index} color={color} word={oldWords[indexRow - 3][index]}/>
                } else if (props.index === indexRow - 4) {
                    let color = colors[indexRow - 4][index];
                    return <Case key={index} color={color} word={oldWords[indexRow - 4][index]}/>
                } else if (props.index === indexRow - 5) {
                    let color = colors[indexRow - 5][index];
                    return <Case key={index} color={color} word={oldWords[indexRow - 5][index]}/>
                } else if (props.index === indexRow - 6) {
                    endGame();
                    let color = colors[indexRow - 6][index];
                    return <Case key={index} color={color} word={oldWords[indexRow - 6][index]}/>
                }
            }
            return <Case key={index} word={''}/>
        }
    };

    return(
        <div className={'row'}>
            {numbers.map((number) =>
                getLetter(number)
            )}
        </div>
    )
}
export default Row