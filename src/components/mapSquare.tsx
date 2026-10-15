import React from "react";
import './components.css'

type MapSquareProps = {
    room: string,
    entrance: boolean,
    selected: boolean,
    onSelection: Function,
}

export default function MapSquare( {room, entrance, selected, onSelection} ) {
    let classNames = `square`
    room == 'spacer' ? classNames += ' spacer' : classNames += ' room'
    if (selected) classNames += ' selected'
    
    return(
        <div className={classNames} onClick={onSelection}>
            {entrance ? 'E' : ''}
        </div>
    )
}