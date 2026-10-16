

export function TempTreasureListItem({t, removeTreasure, saveTreasure}) {
    return (<div className="temp-treasure-item">
        <button onClick={() => removeTreasure(c)}>X</button>
        <div>{c}</div>
        <button onClick={() => saveTreasure(c)}>Add to room</button>
    </div>)
}

export function SavedTreasureListItem({t, deleteTreasure}) {
    return (<div className="saved-treasure-item">
        <button onClick={deleteTreasure}>X</button>
        <div>{t}</div>
    </div>)
}

export function TempClueListItem({c, removeClue, saveClue}) {
    return (<div className="temp-clue-item">
        <button onClick={() => removeClue(c)}>X</button>
        <div>{c}</div>
        <button onClick={() => saveClue(c)}>Add to room</button>
    </div>)
}

export function SavedClueListItem({c, deleteClue}) {
    return (<div className="saved-clue-item">
        <button onClick={deleteClue}>X</button>
        <div>{c}</div>
    </div>)
}