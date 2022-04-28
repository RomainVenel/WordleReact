import RowKeyboard from "./RowKeyboard";
import './Keyboard.scss';

function Keyboard() {
    return (
        <div id={'keyboard'}>
            <RowKeyboard/>
            <RowKeyboard/>
            <RowKeyboard/>
        </div>
    )
}
export default Keyboard;