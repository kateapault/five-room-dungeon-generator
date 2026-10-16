import React from "react";
import { useState } from "react";
import { layouts } from '../constants/layouts.js'
import { roomContents } from '../constants/dungeonAspects.js'
import DungeonMap from "./map";
import RoomDetails from "./roomDetails.js";
import { generateKeywords } from "../services/generator.ts"
import GenerateMore from "./generateMore.tsx";


export default function Page({dungeon}) {
    const [selectedRoom, setSelectedRoom] = useState(dungeon["layout"]["entrance"])
    let e = {
        "A": {"clues": [], "treasures": [], "npcs": [], "enemies": []},
        "B": {"clues": [], "treasures": [], "npcs": [], "enemies": []},
        "C": {"clues": [], "treasures": [], "npcs": [], "enemies": []},
        "D": {"clues": [], "treasures": [], "npcs": [], "enemies": []},
        "E": {"clues": [], "treasures": [], "npcs": [], "enemies": []},
    }
    const [extras, setExtras] = useState<object>(e)

    function saveClue(clue: string) {
        let newExtras:object = {...extras}
        newExtras[selectedRoom]["clues"] = [...newExtras[selectedRoom]["clues"], clue]
        setExtras(newExtras)
        console.log(extras)
    }

    function deleteClue(clue: string) {
        let newExtras:object = {...extras}
        newExtras[selectedRoom]["clues"] = newExtras[selectedRoom]["clues"].filter(e => e != clue)
        setExtras(newExtras)
    }

    function saveTreasure() {
        return
    }

    function deleteTreasure() {
        return
    }

    return (
        <div className="page">
            <div className="dungeon-title">{dungeon["title"]}</div>
            <DungeonMap 
                layout={dungeon["layout"]} 
                selectedRoom={selectedRoom} 
                setSelectedRoom={setSelectedRoom}
            />
            <RoomDetails 
                contents={dungeon["rooms"][selectedRoom]}
                extras={extras[selectedRoom]}
                deleteClue={deleteClue}
            />
            <GenerateMore 
                saveClue={saveClue}
            />
        </div>
    )
}