import React from "react";
import { useState } from "react";
import { layouts } from '../constants/layouts.js'
import { roomContents } from '../constants/dungeonAspects.js'
import DungeonMap from "./map";
import RoomDetails from "./roomDetails.js";
import { generateDungeon, generateKeywords } from "../services/generator.js"


export default function Page() {
    const [layout, setLayout] = useState(layouts[0])
    const [roomTheme, setRoomTheme] = useState(roomContents[0][0])
    const [selectedRoom, setSelectedRoom] = useState('A')

    let dungeon = generateDungeon()
    console.log(dungeon)
    return (
        <div className="page">
            <DungeonMap 
                layout={layout} 
                selectedRoom={selectedRoom} 
                setSelectedRoom={setSelectedRoom}
            />
            <RoomDetails 
                contents={roomTheme}
            />
        </div>
    )
}