import { useState } from "react";
import { generateClues } from "../services/generator";
import { TempClueListItem, TempTreasureListItem } from "./listElements";
import { Treasure } from "../constants/treasure"
import { COMMON, UNCOMMON, RARE, VERYRARE, LEGENDARY, CR0TO4, CR5TO10, CR11TO16, CR17PLUS, ANY, COINS, ART, GEMS, MAGICITEMS, CLUES, TREASURES, NPCS, ENEMIES } from "../constants/constants"

export default function GenerateMore({ saveThing }) {
    const [clues, setClues] = useState<string[]>([])
    const [clueParams, setClueParams] = useState(2)
    const [treasures, setTreasures] = useState<string[]>([])
    const [treasureParams, setTreasureParams] = useState({"num": 1, "level": COMMON, "type": ANY})

    function updateTreasureNum(num: number) {
        setTreasureParams({
            "num": num,
            "level": treasureParams.level,
            "type": treasureParams.type
        })
    }

    function updateTreasureLevel(level: string) {
        setTreasureParams({
            "num": treasureParams.num,
            "level": level,
            "type": treasureParams.type
        })
    }

    function updateTreasureType(type: string) {
        setTreasureParams({
            "num": treasureParams.num,
            "level": treasureParams.level,
            "type": type
        })
    }

    function handleGenerateThing(type: string) {
        switch (type) {
            case CLUES: {
                setClues(generateClues(clueParams))
                return
            }
            case TREASURES: {
                setTreasures(Treasure.generateTreasure(treasureParams))
                return
            }
        }
    }

    function handleRemoveThing(type: string, value: string) {
        switch (type) {
            case CLUES: {
                setClues(clues.filter(c => c != value))
                return
            }
            case TREASURES: {
                setTreasures(treasures.filter(t => t != value))
                return
            }
        }
    }

    function handleSaveThing(type: string, value: string) {
        saveThing(type, value)
        handleRemoveThing(type, value)
    }

    return(
        <div className="generate-more-block">
            <div className="panel generator-column">
                <div className="label">Clues</div>
                <div className="generator-results">{
                    clues.map(c => {
                        return(
                            <TempClueListItem 
                                key={c}
                                c={c}
                                removeClue={() => handleRemoveThing(CLUES, c)}
                                saveClue={() => handleSaveThing(CLUES, c)}
                            />
                        )
                    })
                }</div>
                <div className="generator-controls">
                    <select
                        className="select"
                        value={clueParams}
                        onChange={e => setClueParams(+e.target.value)}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <button className="btn" onClick={() => handleGenerateThing(CLUES)}>generate clues</button>
                </div>
            </div>
            <div className="panel generator-column">
                <div className="label">Treasure</div>
                <div className="generator-results">
                    {
                        treasures.map(t => {return(
                            <TempTreasureListItem 
                                key={t}
                                t={t}
                                removeTreasure={()=>handleRemoveThing(TREASURES, t)}
                                saveTreasure={()=> handleSaveThing(TREASURES, t)}
                            />
                        )})
                    }
                </div>
                <div className="generator-controls">
                    <select
                        className="select"
                        value={treasureParams['num']}
                        onChange={e => updateTreasureNum(+e.target.value)}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <select
                        className="select"
                        value={treasureParams['type']}
                        onChange={e => updateTreasureType(e.target.value)}
                    >
                        <option value={ANY}>Any</option>
                        <option value={COINS}>Coins</option>
                        <option value={GEMS}>Gems</option>
                        <option value={ART}>Art Objects</option>
                        <option value={MAGICITEMS}>Magic Items</option>
                    </select>
                    <select
                        className="select"
                        value={treasureParams['level']}
                        onChange={e => updateTreasureLevel(e.target.value)}
                    >
                        <option value={COMMON}>Common</option>
                        <option value={UNCOMMON}>Uncommon</option>
                        <option value={RARE}>Rare</option>
                        <option value={VERYRARE}>Very Rare</option>
                        <option value={LEGENDARY}>Legendary</option>
                    </select>
                    <button className="btn" onClick={() => handleGenerateThing(TREASURES)}>generate treasure</button>
                </div>
            </div>
            {/* <div>
                <button>generate combat encounter</button>
            </div>
            <div>
                <button>generate NPC</button>
            </div> */}
        </div>
    )
}