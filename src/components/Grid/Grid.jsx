import './Grid.scss';
import './Row'
import Row from "./Row";
import React from "react";

function Grid() {

    const isActive = true;

    return(
        <div id={'grid'}>
            <Row state={isActive}/>
            <Row state={false}/>
            <Row state={false}/>
            <Row state={false}/>
            <Row state={false}/>
            <Row state={false}/>
        </div>
    )
}
export default Grid