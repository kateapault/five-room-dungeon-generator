import { tsat1_keywords, tsat2_keywords } from "../constants/keywords"
import { adjectives } from "../constants/adjectives"
import { layouts } from "../constants/layouts"
import { roomContents, dungeonPurpose, roomSizes } from "../constants/dungeonAspects"
import { clues } from "../constants/clues"
import { randomlySelectWeightedIndex, getRandInt } from "./helpers"

export function generateClues(num: number = 1): Array<string> {
    let resultClues = [clues[getRandInt(clues.length)]]
    if (num > 1) {
        let i = 1
        while (i < num) {
            let nextClue = clues[getRandInt(clues.length)]
            if (nextClue in resultClues) {
                continue
            }
            resultClues.push(nextClue)
            i++
        }
    }
    return [...resultClues]
}

// useList=1 pulls from tsat_1, useList=2 pulls from tsat_2, anything else pulls from both
// num must be >=1 but this isn't a public-facing method so I'm not adding any rails on this
export function generateKeywords(num: number = 3, useList: number|null = null): Array<string> {
    let list: Array<string>
    if (useList == 1) {
        list = tsat1_keywords
    } else if (useList == 2) {
        list = tsat2_keywords
    } else {
        list = [...tsat1_keywords, ...tsat2_keywords]
    }
    let keywords: Array<string> = [list[getRandInt(list.length)]]
    if (num > 1) {
        for (let i=1; i<num; i++) {
            keywords.push(list[getRandInt(list.length)])
        } 
    }
    return keywords
}

function generateDungeonTitle(): string {
    let adj:string = adjectives[getRandInt(adjectives.length)]
    adj = String(adj).charAt(0).toUpperCase() + String(adj).slice(1)
    return 'The ' + adj + ' ' + dungeonPurpose[getRandInt(dungeonPurpose.length)]
}

function generateRoomSize(): Object {
    let weights = roomSizes.map(rs => rs.weight)
    let roomData = roomSizes[randomlySelectWeightedIndex(weights)]
    let roomWidth = roomData["width_add"]
    for (let i = 0; i < roomData["width_num_rolls"]; i++) {
        roomWidth += getRandInt(roomData["width_die_type"]+1, true)
    }
    let roomLength = roomData["length_add"]
    for (let i = 0; i < roomData["length_num_rolls"]; i++) {
        roomLength += getRandInt(roomData["length_die_type"]+1, true)
    }

    return {
        "size": roomData["size"],
        "width": roomWidth,
        "length": roomLength,
    }
}


export function generateDungeon(): Object {
    // dungeon = {layout, title, rooms = {room, contents, keywords, dimensions, treasure, npcs, clues, enemies}}
    let dungeon = {}
    dungeon["layout"] = layouts[getRandInt(layouts.length)]
    dungeon["title"] = generateDungeonTitle()

    let rooms = {};
    ["A","B","C","D","E"].forEach((letter) => {
        rooms[letter] = {
            "room": letter, // needed...?
            "contents": roomContents[getRandInt(6)][getRandInt(6)],
            "keywords": generateKeywords(),
            "dimensions": generateRoomSize(),
            "treasure": [],
            "npcs": [],
            "clues": [],
            "enemies": [],
        }
    })
    dungeon["rooms"] = rooms
    return dungeon
}