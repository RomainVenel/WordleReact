import './App.scss';
import Grid from "./components/Grid/Grid";
import Keyboard from "./components/Keyboard/Keyboard";
import {WordleContext} from "./context/wordleContext";
import React, { useState, useMemo } from 'react';

function Wordle(props) {

    const [indexRow, setIndexRow] = useState(0);
    const [indexCase, setIndexCase] = useState(-1);
    const [letter, setLetter] = useState('');
    const [placedLetters, setPlacedLetters] = useState([]);
    const [errorMessage, setErrorMessage] = React.useState("");

    const value = useMemo(function () {
        return {
            indexRow: indexRow,
            setIndexRow: setIndexRow,
            indexCase: indexCase,
            setIndexCase: setIndexCase,
            letter: letter,
            setLetter: setLetter,
            placedLetters: placedLetters,
            setPlacedLetters: setPlacedLetters,
            errorMessage: errorMessage,
            setErrorMessage: setErrorMessage,
        }
    }, [setIndexRow, indexRow, setIndexCase, indexCase, setLetter, letter, placedLetters, setPlacedLetters, errorMessage, setErrorMessage]);

  return (
      <div>
          <WordleContext.Provider value={value}>
            <div className="App">
                {errorMessage && <div className="error"> {errorMessage} </div>}
                <Grid/>
                <Keyboard randomWord={props.randomWord}/>
            </div>
        </WordleContext.Provider>
      </div>
  );
}

export default Wordle;
