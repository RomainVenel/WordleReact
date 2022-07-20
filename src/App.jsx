import textfile from "./dictionnaire.txt";
import * as React from "react";
import Wordle from "./Wordle";

function App() {

    let word = downloadDictionnary().then(r => {
        return r;
    });

    async function downloadDictionnary() {
        try {
            let response = await fetch(textfile);
            let text_data = await response.text();
            let wordList = text_data.split(" ");
            let maxWords = wordList.length;
            let wordNumber = getRandomInt(0,maxWords);
            return wordList[wordNumber];
        } catch (error) {
            console.log(error);
        }
    }

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

    return (
        <Wordle randomWord={word}/>
    )
}
export default App;