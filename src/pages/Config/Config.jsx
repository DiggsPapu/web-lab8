import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Maze from '@components/Maze/Maze'
import Pills from '@components/Pills/Pills'
import Dimens from '@components/Dimens/Dimens'
import Form from '@components/Form/Form'
import './Config.css'

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

export default function Config(props) {
  const {
    mazeTheme1,
    mazeTheme2,
    mazeTheme3,
    handleMazeColorInversion,
    handleChangeCharacter,
    handleChangeMazeLength,
    handleChangeMazeHeight,
    handleHasTime,
    handleTime,
    time,
    hasTime,
    length,
    height,
    inverted,
    theme,
    character,
  } = props

  const [maze, setMaze] = useState([])
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [dimens, setDimens] = useState([])
  useEffect(() => {
    fetch(`https://maze.uvgenios.online/?type=text&w=${length}&h=${height}`)
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
  }, [length, height])
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
              inverted={inverted}
              theme={theme}
              style={{ width: '100%' }}
            />
            <Maze
              theme={theme}
              style={{
                width: '700px', height: '300px', position: 'relative', top: '0px', left: '0px',
              }}
              maze={maze}
              dimens={dimens}
              inverted={inverted}
            />
            <Dimens
              handleChangeMazeLength={handleChangeMazeLength}
              handleChangeMazeHeight={handleChangeMazeHeight}
              height={height}
              length={length}
            />
            <Form
              handleChangeCharacter={handleChangeCharacter}
              handleHasTime={handleHasTime}
              handleTime={handleTime}
              time={time}
              hasTime={hasTime}
              character={character}
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
Config.propTypes = {
  inverted: PropTypes.bool.isRequired,
  theme: PropTypes.oneOf([1, 2, 3]).isRequired,
  length: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  hasTime: PropTypes.bool.isRequired,
  time: PropTypes.string.isRequired,
  handleTime: PropTypes.func.isRequired,
  mazeTheme1: PropTypes.func.isRequired,
  mazeTheme2: PropTypes.func.isRequired,
  mazeTheme3: PropTypes.func.isRequired,
  handleMazeColorInversion: PropTypes.func.isRequired,
  handleChangeCharacter: PropTypes.func.isRequired,
  handleChangeMazeLength: PropTypes.func.isRequired,
  handleChangeMazeHeight: PropTypes.func.isRequired,
  handleHasTime: PropTypes.func.isRequired,
}
