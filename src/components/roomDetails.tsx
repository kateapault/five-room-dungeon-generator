import React from 'react';
import { useState } from 'react';
import { generateKeywords } from '../services/generator.ts'
import { SavedClueListItem, SavedTreasureListItem } from './listElements.tsx';
import { CLUES, TREASURES, NPCS, ENEMIES} from "../constants/constants"

export default function RoomDetails({ contents, extras, deleteThing, removeNpc, removeTreasure }) {
    // const [keywords, setKeywords] = useState<string[]>([])
    const [showHelpInfo, setShowHelpInfo] = useState(false)

    function toggleHelpInfo() {
        setShowHelpInfo(!showHelpInfo)
    }
    
    function formatKeywords(keywords: Array<string>): string {
        return keywords.join(', ').toLocaleLowerCase()
    }

    function formatRoomSize(dimensions: Object): string {
        return `A ${dimensions["size"]} room (${dimensions["width"]} x ${dimensions["length"]} blocks | ${dimensions["width"]*5}' x ${dimensions["length"]*5}')`
    }

    return(
        <div className="room-details-section">
            <div className="question-bar">
                <button className="question-button" onClick={toggleHelpInfo}>{showHelpInfo ? 'X' : '?'}</button>
            </div>
            {
                showHelpInfo ?
                <div className="help-info">
                    <div>
                        The room keyword indicates what's in this room. It may be a straightforward noun, like "Combat" or "Treasure", or it may be a more abstract word like "Atmosphere" or "Revelation" where you'll have to get creative about what that means for your adventure.
                        <br />
                        <br />
                        The supporting keywords are provided to help generate ideas for fleshing out that main keyword.
                        <br />
                        <br />
                        The dimensions are given both in feet and in a grid size for 5' squares. Hex measurements are still in the works. 
                    </div>
                </div>
                :
                <div className="room-details">
                    <div>{formatRoomSize(contents["dimensions"])}</div>
                    <div>Room keyword: {contents["contents"]}</div>
                    <div>Supporting keywords: {formatKeywords(contents["keywords"])}</div>
                    { extras["clues"].length > 0 ? 
                        <div>
                            <div>Clues</div>
                            {
                                extras["clues"].map(c => {
                                    return (
                                        <SavedClueListItem
                                            key={c}
                                            c={c}
                                            deleteClue={() => deleteThing(CLUES, c)}
                                        />
                                    )
                                })
                            }
                        </div> 
                    : <></>}
                    { extras["treasures"].length > 0 ? 
                        <div>
                            <div>Treasures</div>
                            {
                                extras["treasures"].map(t => {
                                    return (
                                        <SavedTreasureListItem 
                                            key={t}
                                            t={t}
                                            deleteTreasure={() => deleteThing(TREASURES, t)}
                                        />
                                    )
                                })
                            }
                        </div> 
                    : <></>}
                </div>
            }
        </div>
    )
}