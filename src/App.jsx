import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Game from '@pages/Game/Game'
import Config from '@pages/Config/Config'
import Start from '@pages/Start/Start'
import Success from '@pages/Success/Success'
import Fail from '@pages/Fail/Fail'

export default function App() {
  const [properties, setProperties] = useState({
    username: 'Username', character: 'Thanos', theme: 1, inverted: false, length: '10', height: '10', hasTime: false, time: '60',
  })
  const handleHasTime = (event) => {
    setProperties({ ...properties, hasTime: event.target.checked })
  }
  const handleTime = (event) => {
    if (event.target.value > 0) {
      setProperties({ ...properties, time: event.target.value })
    }
  }
  const handleChangeCharacter = (event) => {
    setProperties({ ...properties, character: event.target.value })
  }
  const mazeTheme1 = () => {
    setProperties({ ...properties, theme: 1 })
  }
  const mazeTheme2 = () => {
    setProperties({ ...properties, theme: 2 })
  }
  const mazeTheme3 = () => {
    setProperties({ ...properties, theme: 3 })
  }
  const handleMazeColorInversion = () => {
    setProperties({ ...properties, inverted: !properties.inverted })
  }
  const handleChangeMazeLength = (event) => {
    if (event.target.value > 4 && event.target.value < 100) {
      setProperties({ ...properties, length: event.target.value })
    }
  }
  const handleChangeMazeHeight = (event) => {
    if (event.target.value > 4 && event.target.value < 100) {
      setProperties({ ...properties, height: event.target.value })
    }
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={(<Start />)}
        />
        <Route
          path="/Config"
          element={(
            <Config
              mazeTheme1={mazeTheme1}
              mazeTheme2={mazeTheme2}
              mazeTheme3={mazeTheme3}
              handleMazeColorInversion={handleMazeColorInversion}
              handleChangeCharacter={handleChangeCharacter}
              handleChangeMazeLength={handleChangeMazeLength}
              handleChangeMazeHeight={handleChangeMazeHeight}
              handleHasTime={handleHasTime}
              handleTime={handleTime}
              time={properties.time}
              hasTime={properties.hasTime}
              length={properties.length}
              height={properties.height}
              inverted={properties.inverted}
              theme={properties.theme}
              character={properties.character}
            />
          )}
        />
        <Route
          path="/Game"
          element={(
            <Game
              length={properties.length}
              height={properties.height}
              inverted={properties.inverted}
              theme={properties.theme}
              character={properties.character}
              hasTime={properties.hasTime}
              time={properties.hasTime
                ? properties.time
                : '-1'}
            />
          )}
        />
        <Route
          path="/Success"
          element={(
            <Success />
          )}
        />
        <Route
          path="/Fail"
          element={(
            <Fail />
          )}
        />
      </Routes>
    </BrowserRouter>
  )
}
