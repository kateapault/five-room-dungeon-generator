// technically the treasure & clue items could be combined into a generic one
// but the NPC and enemy displays are going to be different so might as well have separate ones for treasure & clue as well to keep the pattern

export function TempTreasureListItem({t, removeTreasure, saveTreasure}) {
    return (<div className="temp-treasure-item">
        <button onClick={removeTreasure}>X</button>
        <div>{t}</div>
        <button onClick={saveTreasure}>Add to room</button>
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
        <button onClick={removeClue}>X</button>
        <div>{c}</div>
        <button onClick={saveClue}>Add to room</button>
    </div>)
}

export function SavedClueListItem({c, deleteClue}) {
    return (<div className="saved-clue-item">
        <button onClick={deleteClue}>X</button>
        <div>{c}</div>
    </div>)
}