import React from 'react';
import { useState } from 'react';
import { generateKeywords } from '../services/generator.ts'
import { SavedClueListItem } from './listElements.tsx';

export default function RoomDetails({ contents, extras, deleteClue, removeNpc, removeTreasure }) {
    // const [keywords, setKeywords] = useState<string[]>([])
    const [showHelpInfo, setShowHelpInfo] = useState(false)

    function toggleHelpInfo() {
        setShowHelpInfo(!showHelpInfo)
    }

    // function genKeys() {
    //     let kws: Array<string> = generateKeywords();
    //     console.log(kws)
    //     console.log(`typeof kws = ${typeof(kws)}`)
    //     setKeywords(kws);
    // }
    
    function formatKeywords(keywords: Array<string>): string {
        return keywords.join(', ').toLocaleLowerCase()
    }

    function formatRoomSize(dimensions: Object): string {

        return `A ${dimensions["size"]} room (${dimensions["width"]} x ${dimensions["length"]} blocks | ${dimensions["width"]*5}' x ${dimensions["length"]*5}')`
    }

    console.log(extras)

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
                                            deleteClue={() => deleteClue(c)}
                                        />
                                    )
                                })
                            }
                        </div> 
                    : <></>}
                    { extras["npcs"].length > 0 ? 
                        <div>
                            <div>npcs</div>
                            {
                                extras["npcs"].map(n => {
                                    return (
                                        <div key={n}>
                                            {n}
                                            <button onClick={() => removeNpc(n)}>X</button>
                                        </div>
                                    )
                                })
                            }
                        </div> 
                    : <></>}
                    { extras["treasures"].length > 0 ? 
                        <div>
                            <div>treasures</div>
                            {
                                extras["treasures"].map(t => {
                                    return (
                                        <div key={t}>
                                            {t}
                                            <button onClick={() => removeTreasure(t)}>X</button>
                                        </div>
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