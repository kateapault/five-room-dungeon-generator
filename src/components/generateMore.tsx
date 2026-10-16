import { useState } from "react";
import { generateClues } from "../services/generator";
import { TempClueListItem, TempTreasureListItem } from "./listElements";
import { Treasure } from "../constants/treasure"

export default function GenerateMore({ saveClue, saveTreasure=null, addCombat=null, addNpc=null }) {
    const [clues, setClues] = useState<string[]>([])
    const [numClues, setNumClues] = useState(2)
    const [treasures, setTreasures] = useState<string[]>([])

    function handleGenerateClues() {
        setClues(generateClues(numClues))
        console.log(clues)
    }

    function handleRemoveClue(clue: string) {
        setClues(clues.filter(c => c != clue))
    }

    function handleSaveClue(clue: string) {
        saveClue(clue)
        handleRemoveClue(clue)
        console.log(clues)
    }

    function handleGenerateTreasures() {
        setTreasures(Treasure.generateTreasure())
    }

    return(
        <div className="generate-more-block">
            <div>
                <div>{
                    clues.map(c => {
                        return(
                            <TempClueListItem 
                                key={c}
                                c={c}
                                removeClue={() => handleRemoveClue(c)}
                                saveClue={() => handleSaveClue(c)}
                            />
                        )
                    })
                }</div>
                <div>
                    <select
                        value={numClues}
                        onChange={e => setNumClues(+e.target.value)}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <button onClick={handleGenerateClues}>generate clues</button>
                </div>
            </div>
            <div>
                <div>{treasures}</div>
                <button onClick={handleGenerateTreasures}>generate treasure</button>
            </div>
            <div>
                <button>generate combat encounter</button>
            </div>
            <div>
                <button>generate NPC</button>
            </div>
        </div>
    )
}