import Key from "./Key";

function RowKeyboard() {
    return (
        <div>
            <div className={'rowKeyboard'}>
                {['A','Z','E','R','T','Y','U','I','O','P'].map((key) => (
                    <Key key={key} value={key}/>
                ))}
            </div>
            <div className={'rowKeyboard'}>
                {['Q','S','D','F','G','H','J','K','L','M'].map((key) => (
                    <Key key={key} value={key}/>
                ))}
            </div>
            <div className={'rowKeyboard'}>
                <Key key={'ENTER'} value={'ENTER'}/>
                {['W','X','C','V','B','N'].map((key) => (
                    <Key key={key} value={key}/>
                ))}
                <Key key={'DELETE'} value={'DELETE'}/>
            </div>
        </div>
    )
}
export default RowKeyboard;