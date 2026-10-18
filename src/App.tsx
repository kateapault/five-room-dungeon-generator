import { useState } from 'react'
import './App.css'
import Page from './components/page'
import { generateDungeon } from "./services/generator.ts"

function App() {
  const [generatedDungeon, setGeneratedDungeon] = useState({})

  function handleClick() {
    let dungeon: Object = generateDungeon()
    setGeneratedDungeon(dungeon)
  }

  return (
    <>
      <div className="top-bar">
        Five Room Dungeon Generator
        <span className="top-bar-kicker">roll a five-room crawl</span>
      </div>
      <div className="main">
        {
          Object.keys(generatedDungeon).length > 0 ?
          <Page dungeon={generatedDungeon}/>
          :
          <button className="btn btn-primary generate" onClick={() => handleClick()}>Generate a dungeon</button>
        }
      </div>
    </>
  )
}

export default App
