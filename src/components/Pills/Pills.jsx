import React from 'react'
import {
  TextField, Switch, Button, Stack,
} from '@mui/material'
import Maze from '@components/Maze/Maze'
import './Pills.css'

export default function Pills(props) {
  const {
    mazeTheme1,
    mazeTheme2,
    mazeTheme3,
    handleMazeColorInversion,
    handleChangeMazeHeight,
    handleChangeMazeLength,
    inverted,
    theme,
    height,
    length,
  } = props;

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
        <Switch {...label} defaultChecked color="warning" value={inverted} onClick={handleMazeColorInversion} />
      </Stack>
      <div style={{
        marginTop: '2%', marginLeft: '3%', marginRight: '3%', width: '475px', alignItems: 'center',
      }}
      >
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
        >
          <TextField
            label="Height"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            style={{ width: '33%' }}
            onChange={handleChangeMazeHeight}
            value={height}
          />
          <TextField
            label="Width"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            style={{ width: '33%' }}
            onChange={handleChangeMazeLength}
            value={length}
          />
        </Stack>
      </div>
    </div>
  )
}
