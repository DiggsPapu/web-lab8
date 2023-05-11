import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Maze from '../Maze/Maze'
import './Configuration.css'
import Pills from '../Pills/Pills'
import Dimens from './Dimens/Dimens'
import Form from './Form/Form'

function removeAll(arr, target) {
  let i = 0
  while (i < arr.length) {
    if (arr[i] === target) {
      arr.splice(i, 1)
    } else {
      i += 1
    }
  }
  return arr
}
function getDimens(maze) {
  let rows = 0
  for (let j = 0; j < maze.length; j += 1) {
    if (maze[j] === '\n') {
      rows += 1
    }
  }
  return [rows - 2, maze.indexOf('\n', 0), 700 / maze.indexOf('\n', 0), 300 / (rows - 2)]
}
export default function Configuration() {
  const [maze, setMaze] = useState([])
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [properties, setProperties] = useState({
    username: 'Username', character: 'Thanos', theme: 1, inverted: false, length: 10, height: 10,
  })
  const [dimens, setDimens] = useState([])
  useEffect(() => {
    fetch(`https://maze.uvgenios.online/?type=text&w=${properties.length}&h=${properties.height}`)
      // It does with text and not Json bc it has ASCII characters and not json.
      .then((res) => res.text())
      .then(
        (res) => {
          setIsLoaded(true)
          setDimens(getDimens(res))
          setMaze(removeAll(res.split(''), '\n'))
        },
        (mistake) => {
          setIsLoaded(true)
          setError(mistake)
        },
      )
  }, [properties.length, properties.height])
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
  if (isLoaded && error == null) {
    return (
      <div>
        <div style={{
          width: '100%',
          height: 'auto',
          display: 'flex',
          flexDirection: 'row',
          alignSelf: 'center',
          alignItems: 'center',
          color: 'white',
        }}
        >
          <h1 style={{ transform: 'rotate(-90deg)', fontSize: '500%', fontFamily: 'arial' }}>SETTINGS</h1>
          <div style={{
            width: '700px', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center',
          }}
          >
            <Pills
              mazeTheme1={mazeTheme1}
              mazeTheme2={mazeTheme2}
              mazeTheme3={mazeTheme3}
              handleMazeColorInversion={handleMazeColorInversion}
              inverted={properties.inverted}
              style={{ width: '100%' }}
            />
            <Maze
              theme={properties.theme}
              style={{
                width: '700px', height: '300px', position: 'relative', top: '0px', left: '0px',
              }}
              maze={maze}
              dimens={dimens}
              inverted={properties.inverted}
            />
            <Dimens
              handleChangeMazeLength={handleChangeMazeLength}
              handleChangeMazeHeight={handleChangeMazeHeight}
              height={properties.height}
              length={properties.length}
            />
            <Form
              handleChangeCharacter={handleChangeCharacter}
              character={properties.character}
            />
            <Link to="/Game">
              <Button variant="contained" style={{ width: '50%' }} color="warning">Send</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
