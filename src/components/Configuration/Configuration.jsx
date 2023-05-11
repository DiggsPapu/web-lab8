import React, { useState, useEffect } from 'react'
import {
  TextField, Select, MenuItem, FormControl, InputLabel, Switch, Button, Stack,
} from '@mui/material'
import { Link } from 'react-router-dom'
import Player from '@components/Player/Player'
import Maze from '../Maze/Maze'
import './Configuration.css'
import Pills from '../Pills/Pills'

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
  const label = { inputProps: { 'aria-label': 'Color switch demo' } }
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
          flexDirection: 'column',
          alignSelf: 'center',
          alignItems: 'center',
          color: 'white',
        }}
        >
          <h1>Maze Settings</h1>
          <Pills
            mazeTheme1={mazeTheme1}
            mazeTheme2={mazeTheme2}
            mazeTheme3={mazeTheme3}
            handleMazeColorInversion={handleMazeColorInversion}
            inverted={properties.inverted}
            style={{ width: '100%' }}
          />
          <div style={{
            width: '700px', height: '300px',
          }}
          >
            <Maze
              theme={properties.theme}
              style={{
                width: '700px', height: '300px', position: 'relative', top: '0px', left: '0px',
              }}
              maze={maze}
              dimens={dimens}
              inverted={properties.inverted}
            />
          </div>
          <div style={{
            marginTop: '2%', marginBottom: '2%', display: 'flex', flexDirection: 'row',
          }}
          >
            <TextField
              label="Height"
              helperText="Maze height (bigger than 4 less than 100)"
              type="number"
              value={properties.height}
              onChange={handleChangeMazeHeight}
              variant="standard"
              style={{ marginRight: '2%', marginLeft: '0%' }}
              id="MazeHeight"
              color="warning"
              focused
              InputProps={{
                style: { color: 'white' }, // change font color here
              }}
            />
            <TextField
              label="Length"
              helperText="Maze length (bigger than 4 less than 100)"
              type="number"
              value={properties.length}
              onChange={handleChangeMazeLength}
              variant="standard"
              id="MazeLength"
              color="warning"
              focused
              InputProps={{
                style: { color: 'white' }, // change font color here
              }}
            />
          </div>
          <div style={{
            display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '3%',
          }}
          >
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} color="warning" focused>
              <InputLabel>Character Selection</InputLabel>
              <Select value={properties.character} onChange={handleChangeCharacter} style={{ color: 'white' }}>
                <MenuItem value="" color="warning">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Thanos" color="warning">Thanos</MenuItem>
                <MenuItem value="Venom">Venom</MenuItem>
                <MenuItem value="Carnage">Carnage</MenuItem>
                <MenuItem value="Spiderman">Spiderman</MenuItem>
              </Select>
              <TextField
                label="Username"
                helperText="Enter your username"
                variant="standard"
                margin="normal"
                id="username"
                color="warning"
                focused
                InputProps={{
                  style: { color: 'white' }, // change font color here
                }}
                style={{ postion: 'relative', top: '0px' }}
              />
            </FormControl>
            <Player char={properties.character} altitude={200} />
          </div>
          <Link to="/Game">
            <Button variant="contained" style={{ width: '50%' }} color="warning">Send</Button>
          </Link>
        </div>
      </div>
    )
  }
}
