import Letter from "./Letter";
import * as React from "react";

function Case(props) {

    let isActive = props.word;

        return(
            <div className={'case ' + (isActive ? 'isActive': '')}>
                <Letter word={props.word}/>
        </div>
    )
}
export default Case;