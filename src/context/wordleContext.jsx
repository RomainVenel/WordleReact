import * as React from "react";

const initialState = {
    letter: '',
    setLetter: () => {}
};

export const WordleContext = React.createContext(initialState);