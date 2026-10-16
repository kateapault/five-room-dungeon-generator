import React from "react";
import './components.css'
import { SPACER } from '../constants/constants'

type MapSquareProps = {
    room: string,
    entrance: boolean,
    selected: boolean,
    onSelection: Function,
}

export default function MapSquare( {room, entrance, selected, onSelection}: MapSquareProps ) {
    let classNames = `square`
    room == SPACER ? classNames += ' spacer' : classNames += ' room'
    if (selected) classNames += ' selected'

    function selectRoom() {
        if (room == SPACER) {
            return
        }
        onSelection(room)
    }
    
    return(
        <div className={classNames} onClick={selectRoom}>
            {room != SPACER ? <span className="room-letter">{room}</span> : null}
            {entrance ? <span className="entrance-label">Entrance</span> : null}
        </div>
    )
}
