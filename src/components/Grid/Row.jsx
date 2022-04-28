import './Grid.scss';
import Case from "./Case";

function Row() {
    return(
        <div className={'row'}>
            <Case/>
            <Case/>
            <Case/>
            <Case/>
            <Case/>
        </div>
    )
}
export default Row