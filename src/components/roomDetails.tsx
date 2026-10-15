import React from 'react';
import { useState } from 'react';
import { generateKeywords } from '../services/generator.js'

export default function RoomDetails({ contents }) {
    const [keywords, setKeywords] = useState([])

    function genKeys() {
        let kws = generateKeywords();
        console.log(kws)
        setKeywords(kws);
    }

    return(
        <div className="room-details">
            {contents}
            <div>{keywords}</div>
            <button onClick={genKeys}>Generate keywords</button>
        </div>
    )
}