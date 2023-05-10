import React from 'react'
import {
  TextField, Switch, Button, Stack,
} from '@mui/material'
import Maze from '@components/Maze/Maze'
import './Pills.css'

export default function Pills(
  mazeTheme1,
  mazeTheme2,
  mazeTheme3,
  handleMazeColorInversion,
  properties,
  handleChangeMazeHeight,
  handleChangeMazeLength,
) {
  const label = { inputProps: { 'aria-label': 'Color switch demo' } }
  return (
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
  )
}
