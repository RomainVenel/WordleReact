import Letter from "./Letter";
import * as React from "react";

function Case(props) {

        return(
            <div className={'case'}>
                <Letter word={props.word}/>
        </div>
    )
}
export default Case;