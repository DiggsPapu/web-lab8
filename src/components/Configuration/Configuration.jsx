import React, { useState } from 'react'
import {
  TextField, Select, MenuItem, FormControl, InputLabel,
} from '@mui/material'
import Player from '@components/Player/Player'

export default function Configuration() {
  const [properties, setProperties] = useState({ username: 'Username', character: 'Thanos', dimens: [10, 10] })
  const handleChangeCharacter = (event) => {
    setProperties({ ...properties, character: event.target.value })
  }
  return (
    <>
      <div>
        <TextField label="Username" helperText="Enter your username" variant="standard" margin="normal" id="username" />
      </div>
      <div>
        <h2>Maze dimensions</h2>
        <TextField label="Height" helperText="Maze height (bigger than 4 less than 100)" variant="standard" margin="normal" id="MazeHeight" />
        <TextField label="Length" helperText="Maze length (bigger than 4 less than 100)" variant="standard" margin="normal" id="MazeLength" />
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
    </>
  )
}
