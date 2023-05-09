import React, { useState } from 'react'
import {
  TextField, Select, MenuItem, FormControl, InputLabel, Switch, Button, Stack,
} from '@mui/material'
import Player from '@components/Player/Player'
import Pills from '@components/Pills/Pills'
import Maze from '../Maze/Maze'

export default function Configuration() {
  const label = { inputProps: { 'aria-label': 'Color switch demo' } }
  const [properties, setProperties] = useState({
    username: 'Username', character: 'Thanos', theme: 1, inverted: false, length: 10, height: 10,
  })
  const handleChangeCharacter = (event) => {
    setProperties({ ...properties, character: event.target.value })
    console.log(properties)
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
    <>
      <div>
        <div style={{
          width: '100%',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'center',
          alignItems: 'center',
        }}
        >
          <Stack
            direction="row"
            spacing={1}
            style={{
              marginTop: '2%', marginLeft: '3%', marginRight: '3%', width: '475px', alignItems: 'center',
            }}
          >
            <Button variant="standard" onClick={mazeTheme1} style={{ width: '33%', height: '100%' }}>Building Night Style</Button>
            <Button variant="standard" onClick={mazeTheme2} style={{ width: '25%', height: '100%' }}>Building Day Style</Button>
            <Button variant="standard" onClick={mazeTheme3} style={{ width: '25%', height: '100%' }} autoCapitalize="off">War Style</Button>
            <Switch {...label} defaultChecked color="warning" value={properties.inverted} onClick={handleMazeColorInversion} />
          </Stack>
          <div style={{
            width: '475px', height: '300px',
          }}
          >
            <Maze
              theme={properties.theme}
              style={{
                width: '700px', height: '300px', position: 'relative', top: '0px', left: '0px',
              }}
              dimens={[31, 21, 700 / 31, 300 / 21]}
              inverted={properties.inverted}
            />
          </div>
          <div style={{ marginTop: '11%', display: 'flex', flexDirection: 'row' }}>
            <TextField
              label="Height"
              helperText="Maze height (bigger than 4 less than 100)"
              type="number"
              value={properties.height}
              onChange={handleChangeMazeHeight}
              variant="standard"
              style={{ marginRight: '2%', marginLeft: '0%' }}
              id="MazeHeight"
            />
            <TextField
              label="Length"
              helperText="Maze length (bigger than 4 less than 100)"
              type="number"
              value={properties.length}
              onChange={handleChangeMazeLength}
              variant="standard"
              id="MazeLength"
            />
          </div>
        </div>
      </div>
      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Character Selection</InputLabel>
          <Select value={properties.character} onChange={handleChangeCharacter}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Thanos">Thanos</MenuItem>
            <MenuItem value="Venom">Venom</MenuItem>
            <MenuItem value="Carnage">Carnage</MenuItem>
            <MenuItem value="Spiderman">Spiderman</MenuItem>
          </Select>
          <Player char={properties.character} />
        </FormControl>
      </div>
      <div>
        <TextField label="Username" helperText="Enter your username" variant="standard" margin="normal" id="username" />
      </div>
    </>
  )
}
