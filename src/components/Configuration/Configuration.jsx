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
    username: 'Username', character: 'Thanos', theme: 3, inverted: 1, length: 10, height: 10,
  })
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
    <>
      <div>
        <div style={{
          width: '100%',
          height: '600px',
        }}
        >
          <div style={{
            width: '100%',
            height: '500px',
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'center',
          }}
          >
            <Stack direction="column" spacing={6} style={{ margin: '10%', width: '20%', alignItems: 'center' }}>
              <Button variant="outlined" onClick={mazeTheme1} style={{ width: '100%' }}>Building Night Style</Button>
              <Button variant="outlined" onClick={mazeTheme2} style={{ width: '100%' }}>Building Day Style</Button>
              <Button variant="outlined" onClick={mazeTheme3} style={{ width: '100%' }}>War Style</Button>
              <Switch {...label} defaultChecked color="warning" value={properties.inverted} onClick={handleMazeColorInversion} />
            </Stack>
            <Maze value={properties.theme} style={{ width: '700px', height: '300px', position: 'relative' }} dimens={[31, 21, 700 / 31, 300 / 21]} inverted={properties.inverted} />
          </div>
        </div>
        {/* <Pills handleChangeMaze={handleChangeMaze} value={properties.theme} /> */}
        <TextField
          label="Height"
          helperText="Maze height (bigger than 4 less than 100)"
          type="number"
          value={properties.height}
          onChange={handleChangeMazeHeight}
          variant="standard"
          style={{ marginRight: '10%', marginLeft: '10%' }}
          id="MazeHeight"
        />
        <TextField
          label="Length"
          helperText="Maze length (bigger than 4 less than 100)"
          type="number"
          value={properties.length}
          onChange={handleChangeMazeLength}
          variant="standard"
          style={{ marginRight: '10%' }}
          id="MazeLength"
        />
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
