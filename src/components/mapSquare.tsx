import './components.css'
import { SPACER } from '../constants/constants'

type MapSquareProps = {
    room: string,
    entrance: boolean,
    selected: boolean,
    onSelection: Function,
    showRoomLabels: boolean,
}

export default function MapSquare( {room, entrance, selected, onSelection, showRoomLabels}: MapSquareProps ) {
    let classNames = `square`
    room == SPACER ? classNames += ' spacer' : classNames += ' room'
    if (selected) classNames += ' selected'
    if (showRoomLabels && room != SPACER) classNames += ' printout-square'

    function selectRoom() {
        if (room == SPACER) {
            return
        }
        onSelection(room)
    }
    
    return(
        <div className={classNames} onClick={selectRoom}>
            {
                showRoomLabels && room != SPACER ?
                <span>{room}</span>
                :
                entrance ? <span className="entrance-label">Entrance</span> : null
            }
            {
                showRoomLabels && entrance ?
                <span>(entry)</span> : <></>
            }
        </div>
    )
}
