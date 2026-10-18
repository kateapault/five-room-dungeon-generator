import MapSquare from "./mapSquare";
import './components.css'
import { SPACER } from '../constants/constants'

type DungeonMapProps = {
    layout: object
    selectedRoom: string
    setSelectedRoom: Function
    showRoomLabels?: boolean
}

export default function DungeonMap({ layout, selectedRoom, setSelectedRoom, showRoomLabels=false }: DungeonMapProps) {

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
                layout["pattern"].map((row: Array<string>) => {
                    return ( <div key={ind} className="map-row"> 
                        {row.map(col => {
                        ind += 1
                        return (<MapSquare 
                            key={ind}
                            room={col}
                            entrance={col == layout["entrance"]}
                            selected={col == selectedRoom}
                            onSelection={() => onSelection(col)}
                            showRoomLabels={showRoomLabels}
                        />)
                    })}
                    </div>
                )
                })
            }
        </div>
    )
}