export function TempTreasureListItem({t, removeTreasure, saveTreasure}) {
    return (<div className="list-row temp-treasure-item">
        <button className="btn btn-icon" onClick={removeTreasure}>X</button>
        <div className="list-row-text">{t}</div>
        <button className="btn btn-ghost" onClick={saveTreasure}>Add to room</button>
    </div>)
}

export function SavedTreasureListItem({t, deleteTreasure}) {
    return (<div className="list-row saved-treasure-item">
        <button className="btn btn-icon" onClick={deleteTreasure}>X</button>
        <div className="list-row-text">{t}</div>
    </div>)
}

export function TempClueListItem({c, removeClue, saveClue}) {
    return (<div className="list-row temp-clue-item">
        <button className="btn btn-icon" onClick={removeClue}>X</button>
        <div className="list-row-text">{c}</div>
        <button className="btn btn-ghost" onClick={saveClue}>Add to room</button>
    </div>)
}

export function SavedClueListItem({c, deleteClue}) {
    return (<div className="list-row saved-clue-item">
        <button className="btn btn-icon" onClick={deleteClue}>X</button>
        <div className="list-row-text">{c}</div>
    </div>)
}
