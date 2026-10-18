import DungeonMap from "./map"

function FormattedStringItem({str}) {
    // (๑$ᴗ$)
    // (╭ರ_•́)
    return (
        <div className="printout-list-item">
            + {str}
        </div>
    )
}

// TODO fill out placeholder
function FormattedNpcItem({npc}) {
    // (｡･▽･)ﾉﾞ
    return (
        <div>{npc}</div>
    )
}

// TODO fill out palceholder
function FormattedEnemyItem({enemy}) {
    // (ง •̀_•́)ง | (ง•̀ω•́)ง✧
    return (
        <div>{enemy}</div>
    )
}

function FormattedRoomDetails({ roomLabel, roomDimensions, roomContent, roomKeywords, roomClues, roomTreasures, roomNpcs, roomEnemies}) {
    return (
        <div className="printout-room">
            <div className="printout-room-header">
                <div className="printout-room-label">Room {roomLabel}</div>
                <div className="printout-room-dimensions">({roomDimensions["width"]} x {roomDimensions["length"]} blocks | {roomDimensions["width"]*5}' x {roomDimensions["length"]*5}')</div>
            </div>
            <div className="printout-room-content">Room keyword: {roomContent.toUpperCase()}</div>
            <div className="printout-room-keywords">Supporting keywords: {(roomKeywords).join(", ").toLowerCase()}</div>
            <div className="printout-room-extras">
            {   roomClues.length > 0 ?
                <div className="printout-list">
                    <div className="printout-list-label">Clues</div>
                    {
                        roomClues.map(c => {
                            return <FormattedStringItem 
                                str={c} 
                                key={c}
                            />
                        })
                    }
                </div>
                : <></>
            }
            {   roomTreasures.length > 0 ?
                <div className="printout-list">
                    <div className="printout-list-label">Treasures</div>
                    {
                        roomTreasures.map(t => {
                            return <FormattedStringItem 
                                str={t} 
                                key={t}
                            />
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
                            return <FormattedNpcItem npc={n} key={n}/>
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
                            return <FormattedEnemyItem enemy={e} key={e}/>
                        })
                    }
                </div>
                : <></>
            }
            </div>
            <div id={roomLabel + '-spacer'}>
            </div>
        </div>
    )
}

export default function FormattedDungeon({dungeon, extras, ref}){
    return(
        <div className="printout" ref={ref}>
            <div className="printout-title">{dungeon["title"]}</div>
            <DungeonMap 
                layout={dungeon["layout"]}
                selectedRoom=""
                setSelectedRoom={() => {}}
                showRoomLabels={true}
            />
            {
                Object.entries(dungeon["rooms"]).map(k => {
                    let roomExtras = extras[k[0]]
                    return(
                        <FormattedRoomDetails 
                            roomLabel={k[0]}
                            roomContent={k[1]["contents"]}
                            roomKeywords={k[1]["keywords"]}
                            roomDimensions={k[1]["dimensions"]}
                            roomClues={roomExtras["clues"]}
                            roomTreasures={roomExtras["treasures"]}
                            roomNpcs={roomExtras["npcs"]}
                            roomEnemies={roomExtras["enemies"]}
                            key={k[0]}
                        />
                    )
                })
            }
        </div>
    )
}