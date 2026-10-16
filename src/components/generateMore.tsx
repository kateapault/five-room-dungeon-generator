import { useState } from "react";
import { generateClues, generateTreasures } from "../services/generator";
import { TempClueListItem, TempTreasureListItem } from "./listElements";

export default function GenerateMore({ saveClue, saveTreasure=null, addCombat=null, addNpc=null }) {
    const [clues, setClues] = useState<string[]>([])

    function handleGenerateClues() {
        setClues(generateClues(2))
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
                <button onClick={handleGenerateClues}>generate clues</button>
            </div>
            <div>
                <button>generate treasure</button>
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