import React from 'react';
import { useState } from 'react';
import { generateKeywords } from '../services/generator.ts'

export default function RoomDetails({ contents }) {
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
                    { contents["treasure"].length > 0 ? <div>treasure placeholder</div> : <></>}
                    { contents["npcs"].length > 0 ? <div>NPC placeholder</div> : <></>}
                    { contents["clues"].length > 0 ? <div>clues placeholder</div> : <></>}
                    { contents["enemies"].length > 0 ? <div>enemies placeholder</div> : <></>}
                </div>
            }
        </div>
    )
}