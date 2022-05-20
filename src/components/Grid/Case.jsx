import Letter from "./Letter";
import * as React from "react";

function Case(props) {

    let isActive = props.word;

        return(
            <div className={'case '+ props.color + ' ' + (isActive ? 'isActive': '')}>
                <Letter word={props.word}/>
        </div>
    )
}
export default Case;