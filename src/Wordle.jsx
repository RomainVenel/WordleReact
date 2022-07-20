import './App.scss';
import Grid from "./components/Grid/Grid";
import Keyboard from "./components/Keyboard/Keyboard";
import {WordleContext} from "./context/wordleContext";
import React, { useState, useMemo } from 'react';
import Navbar from "./components/Navbar/Navbar";

function Wordle(props) {

    const [indexRow, setIndexRow] = useState(0);
    const [indexCase, setIndexCase] = useState(-1);
    const [letter, setLetter] = useState('');
    const [placedLetters, setPlacedLetters] = useState([]);
    const [oldWords, setOldWords] = useState([]);
    const [colors, setColors] = useState([]);
    const [errorMessage, setErrorMessage] = React.useState("");
    const [keyColors, setKeyColors] = React.useState([]);

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
            oldWords: oldWords,
            setOldWords: setOldWords,
            colors: colors,
            setColors: setColors,
            errorMessage: errorMessage,
            setErrorMessage: setErrorMessage,
            keyColors: keyColors,
            setKeyColors: setKeyColors,
        }
    }, [setIndexRow, indexRow, setIndexCase, indexCase, setLetter, letter, placedLetters, setPlacedLetters, oldWords, setOldWords, colors, setColors, errorMessage, setErrorMessage, keyColors, setKeyColors]);

    function handleClick(e) {
        e.preventDefault();
        window.location.reload(false);
    }

  return (
      <div>
          <WordleContext.Provider value={value}>
              <div id={'popup-win'}>
                  <div className="bodyPopup" id="winPopup">
                      <button className="close">✖</button>
                      <img src={require('./assets/prize.png')} alt="cookies-img"/>
                      <p>Tu as gagné !</p>
                      <button className="accept" onClick={handleClick}>Rejouer</button>
                  </div>
              </div>
              <div id={'popup-lose'}>
                  <div className="bodyPopup" id="losePopup">
                      <button className="close">✖</button>
                      <img src={require('./assets/lose.png')} alt="cookies-img"/>
                      <p>Tu as perdu !</p>
                      <button className="accept" onClick={handleClick}>Rejouer</button>
                  </div>
              </div>
              <div className="App">
                  <Navbar/>
                  {errorMessage && <div className="error"> {errorMessage} </div>}
                  <Grid/>
                  <Keyboard randomWord={props.randomWord}/>
              </div>
          </WordleContext.Provider>
      </div>
  );
}

export default Wordle;
