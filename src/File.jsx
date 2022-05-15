import { useEffect } from 'react';
import textfile from "./dictionnaire.txt";
import * as React from "react";
import App from "./App";

function File() {

    let ok = downloadDictionnary().then(r => {
        return r;
    });

    async function downloadDictionnary() {
        try {
            let response = await fetch(textfile);
            let text_data = await response.text();
            let wordList = text_data.split(" ");
            let maxWords = wordList.length;
            let wordNumber = getRandomInt(0,maxWords);
            let random = wordList[wordNumber];
            return random;
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
        <App randomWord={ok}/>
    )
}
export default File;