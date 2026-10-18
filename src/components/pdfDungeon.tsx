import DungeonMap from "./map"
import { renderToStaticMarkup } from "react-dom/server"
import "../components/components.css"
// TODO finish setting up & use interfaces


function FormattedStringItem({str}) {
    return (
        <div>{str}</div>
    )
}

// TODO fill out placeholder
function FormattedNpcItem({npc}) {
    return (
        <div>{npc}</div>
    )
}

// TODO fill out palceholder
function FormattedEnemyItem({enemy}) {
    return (
        <div>{enemy}</div>
    )
}

function FormattedRoomDetails({ roomLabel, roomDimensions, roomContent, roomKeywords, roomClues, roomTreasures, roomNpcs, roomEnemies}) {
    return (
        <div>
            <div>
                <div>Room {roomLabel}</div>
                <div>({roomDimensions})</div>
            </div>
            <div>Room keyword: {roomContent}</div>
            <div>Supporting keywords: {roomKeywords}</div>
            {   roomClues.length > 0 ?
                <div>
                    <div>Clues</div>
                    {
                        roomClues.map(c => {
                            <FormattedStringItem str={c}/>
                        })
                    }
                </div>
                : <></>
            }
            {   roomTreasures.length > 0 ?
                <div>
                    <div>Treasures</div>
                    {
                        roomTreasures.map(t => {
                            <FormattedStringItem str={t}/>
                        })
                    }
                </div>
                : <></>
            }
            {   roomNpcs.length > 0 ?
                <div>
                    <div>Npcs</div>
                    {
                        roomNpcs.map(n => {
                            <FormattedNpcItem npc={n}/>
                        })
                    }
                </div>
                : <></>
            }
            {   roomEnemies.length > 0 ?
                <div>
                    <div>Enemies</div>
                    {
                        roomEnemies.map(e => {
                            <FormattedEnemyItem enemy={e}/>
                        })
                    }
                </div>
                : <></>
            }
        </div>
    )
}


type formattedDungeonProps = {
    dungeon: object,
    extras: object,
}

function FormattedDungeon({dungeon, extras} : formattedDungeonProps) {
// dungeon = {layout, title, rooms = {room, contents, keywords, dimensions, treasure, npcs, clues, enemies}}
    return(
        <div>
            <div>{dungeon["title"]}</div>
            <DungeonMap 
                layout={dungeon["layout"]}
                selectedRoom=""
                setSelectedRoom={() => {}}
                showRoomLabels={true}
            />
            {
                Object.entries(dungeon["rooms"]).map((k,v) => {
                    let roomExtras = extras[v["room"]]
                    return(
                        <FormattedRoomDetails 
                            roomLabel={k}
                            roomContent={v["contents"]}
                            roomKeywords={v["keywords"]}
                            roomDimensions={v["dimensions"]}
                            roomClues={roomExtras["clues"]}
                            roomTreasures={roomExtras["treasures"]}
                            roomNpcs={roomExtras["npcs"]}
                            roomEnemies={roomExtras["enemies"]}
                        />
                    )
                })
            }
        </div>
    )
}

export default function FormattedHTMLDungeon({dungeon, extras}) {
    let formatted = FormattedDungeon({dungeon: dungeon, extras: extras})
    return renderToStaticMarkup(formatted)
}