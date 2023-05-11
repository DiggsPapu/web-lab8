import React from 'react'
import {
  Switch, Button, Stack,
} from '@mui/material'
import PropTypes from 'prop-types'
import './Pills.css'

export default function Pills(props) {
  const {
    mazeTheme1,
    mazeTheme2,
    mazeTheme3,
    handleMazeColorInversion,
    inverted,
  } = props

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
          marginTop: '2%', marginLeft: '3%', marginRight: '3%', width: '55%', alignItems: 'center',
        }}
      >
        <Button variant="standard" onClick={mazeTheme1} style={{ width: '33%', height: '100%' }}>Building Night Style</Button>
        <Button variant="standard" onClick={mazeTheme2} style={{ width: '25%', height: '100%' }}>Building Day Style</Button>
        <Button variant="standard" onClick={mazeTheme3} style={{ width: '25%', height: '100%' }} autoCapitalize="off">War Style</Button>
        <Switch {...label} defaultChecked color="warning" value={inverted} onClick={handleMazeColorInversion} />
      </Stack>
    </div>
  )
}
Pills.propTypes = {
  inverted: PropTypes.bool.isRequired,
  theme: PropTypes.oneOf([1, 2, 3]).isRequired,
  handleMazeColorInversion: PropTypes.func.isRequired,
  mazeTheme1: PropTypes.func.isRequired,
  mazeTheme2: PropTypes.func.isRequired,
  mazeTheme3: PropTypes.func.isRequired,
}
