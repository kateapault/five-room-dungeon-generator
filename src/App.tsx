import React from 'react'
import { useState } from 'react'
import './App.css'
import Page from './components/page'

function App() {
  const [generatedDungeon, setGeneratedDungeon] = useState({})

  function generateDungeon() {
    setGeneratedDungeon({'dungeon': true})
  }

  return (
    <>
      <div className="top-bar">
        Five Room Dungeon Generator
      </div>
      <div className="main">
        {
          Object.keys(generatedDungeon).length > 0 ?
          <Page />
          :
          <button className="generate" onClick={generateDungeon}>Generate</button>
        }
      </div>
    </>
  )
}

export default App
