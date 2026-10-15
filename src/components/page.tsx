import React from "react";
import { useState } from "react";
import { layouts } from '../constants/layouts.js'
import { roomContents } from '../constants/dungeonAspects.js'
import DungeonMap from "./map";
import RoomDetails from "./roomDetails.js";
import { generateKeywords } from "../services/generator.ts"


export default function Page({dungeon}) {
    // const [layout, setLayout] = useState(layouts[0])
    // const [roomDetails, setRoomDetails] = useState(roomContents[0][0])
    const [selectedRoom, setSelectedRoom] = useState(dungeon["layout"]["entrance"])
    // console.log(dungeon["layout"]["entrance"])
    // console.log(dungeon["rooms"][selectedRoom])

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
            />
        </div>
    )
}