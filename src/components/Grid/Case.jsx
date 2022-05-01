import Letter from "./Letter";

function Case(props) {
    return(
        <div className={'case'}>
            <Letter word={props.word}/>
        </div>
    )
}
export default Case;