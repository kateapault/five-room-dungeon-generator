import { useState } from "react";
import DungeonMap from "./map";
import RoomDetails from "./roomDetails.js";
import './components.css'
import GenerateMore from "./generateMore.tsx";
import { CLUES, TREASURES, NPCS, ENEMIES } from "../constants/constants"


export default function Page({dungeon}) {
    const [selectedRoom, setSelectedRoom] = useState(dungeon["layout"]["entrance"])
    let e = {
        "A": {[CLUES]: [], [TREASURES]: [], [NPCS]: [], [ENEMIES]: []},
        "B": {[CLUES]: [], [TREASURES]: [], [NPCS]: [], [ENEMIES]: []},
        "C": {[CLUES]: [], [TREASURES]: [], [NPCS]: [], [ENEMIES]: []},
        "D": {[CLUES]: [], [TREASURES]: [], [NPCS]: [], [ENEMIES]: []},
        "E": {[CLUES]: [], [TREASURES]: [], [NPCS]: [], [ENEMIES]: []},
    }
    const [extras, setExtras] = useState<object>(e)

    function saveExtra(type: string, value: string) {
        let newExtras: object = {...extras}
        newExtras[selectedRoom][type] = [...newExtras[selectedRoom][type], value]
        setExtras(newExtras)
    }

    function deleteExtra(type: string, value: string) {
        let newExtras:object = {...extras}
        newExtras[selectedRoom][type] = newExtras[selectedRoom][type].filter(e => e != value)
        setExtras(newExtras)
    }

    return (
        <div className="page">
            <div className="dungeon-title">
                <button className="btn download-btn">
                    <div className="download-icon"></div>
                    Download
                </button>
                {dungeon["title"]}
            </div>
            <DungeonMap 
                layout={dungeon["layout"]} 
                selectedRoom={selectedRoom} 
                setSelectedRoom={setSelectedRoom}
            />
            <RoomDetails 
                contents={dungeon["rooms"][selectedRoom]}
                extras={extras[selectedRoom]}
                deleteThing={deleteExtra}
            />
            <GenerateMore 
                saveThing={saveExtra}
            />
        </div>
    )
}