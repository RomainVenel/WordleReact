import './App.scss';
import Grid from "./components/Grid/Grid";
import Keyboard from "./components/Keyboard/Keyboard";
import {WordleContext} from "./context/wordleContext";
import React, { useMemo } from 'react'

function App() {
    const [letter, setLetter] = React.useState('');
    const value = useMemo(function () {
        return {
            letter: letter,
            setLetter: setLetter
        }
    }, [setLetter, letter]);
  return (
      <WordleContext.Provider value={value}>
        <div className="App">
            <Grid/>
            <Keyboard/>
        </div>
      </WordleContext.Provider>
  );
}

export default App;
