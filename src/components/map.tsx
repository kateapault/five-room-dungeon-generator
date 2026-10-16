import React from "react";
import MapSquare from "./mapSquare";
import './components.css'
import { SPACER } from '../constants/constants'

export default function DungeonMap({ layout, selectedRoom, setSelectedRoom }) {

    function onSelection(room: String) {
        if (room == SPACER) {
            setSelectedRoom("")
        } else {
            setSelectedRoom(room)
        }
    }
    let ind = 0
    return (
        <div className="dungeon-map">
            {
                layout.pattern.map((row: Array<String>) => {
                    return ( <div key={ind} className="map-row"> 
                        {row.map(col => {
                        ind += 1
                        return (<MapSquare 
                            key={ind}
                            room={col}
                            entrance={col == layout.entrance}
                            selected={col == selectedRoom}
                            onSelection={() => onSelection(col)}
                        />)
                    })}
                    </div>
                )
                })
            }
        </div>
    )
}