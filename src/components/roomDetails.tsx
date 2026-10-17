import React from 'react';
import { useState } from 'react';
import { SavedClueListItem, SavedTreasureListItem } from './listElements.tsx';
import { CLUES, TREASURES } from "../constants/constants"

export default function RoomDetails({ contents, extras, deleteThing }) {
    
    function formatKeywords(keywords: Array<string>): string {
        return keywords.join(', ').toLocaleLowerCase()
    }

    function formatRoomSize(dimensions: Object): string {
        return `${dimensions["size"].charAt(0).toUpperCase() + dimensions["size"].slice(1)} room (${dimensions["width"]} x ${dimensions["length"]} blocks | ${dimensions["width"]*5}' x ${dimensions["length"]*5}')`
    }

    return(
        <div className="panel room-details-section">
            <div className="room-details">
                <div className="room-meta">{formatRoomSize(contents["dimensions"])}</div>
                <div className="room-keyword">Room keyword: <span className="room-keyword-value">{contents["contents"]}</span></div>
                <div className="room-supporting-keywords">Supporting keywords: {formatKeywords(contents["keywords"])}</div>
                { extras["clues"].length > 0 ? 
                    <div className="extras-block">
                        <div className="label">Clues</div>
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
                    <div className="extras-block">
                        <div className="label">Treasures</div>
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
        </div>
    )
}
