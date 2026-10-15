import React from 'react'
import { useState } from 'react'
import './App.css'
import Page from './components/page'
import { generateDungeon } from "./services/generator.ts"

function App() {
  const [generatedDungeon, setGeneratedDungeon] = useState({})
  // const [buttonClicked, setButtonClicked] = useState(false)
  
  function handleClick() {
    let dungeon: Object = generateDungeon()
    setGeneratedDungeon(dungeon)
    // setButtonClicked(true)
  }
  console.log(generatedDungeon)
  // console.log('loadeddd')

  return (
    <>
      <div className="top-bar">
        Five Room Dungeon Generator
      </div>
      <div className="main">
        {
          Object.keys(generatedDungeon).length > 0 ?
          // buttonClicked ?
          <Page dungeon={generatedDungeon}/>
          // <div>{`${generatedDungeon}`}</div>
          // <div>placeholder</div>
          :
          <button className="generate" onClick={() => handleClick()}>Generate</button>
        }
      </div>
    </>
  )
}

export default App
