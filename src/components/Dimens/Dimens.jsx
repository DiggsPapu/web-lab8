import React from 'react'
import { TextField } from '@mui/material'
import PropTypes from 'prop-types'
import './Dimens.css'

export default function Dimens(props) {
  const {
    handleChangeMazeLength,
    handleChangeMazeHeight,
    height,
    length,
  } = props
  return (
    <div style={{
      marginTop: '0.1%', marginBottom: '2%', display: 'flex', flexDirection: 'column', width: 'auto', justifyContent: 'space-evenly',
    }}
    >
      <div className="child">
        <TextField
          label="Height"
          helperText="Maze height (bigger than 4 less than 100)"
          type="number"
          value={height}
          onChange={handleChangeMazeHeight}
          variant="standard"
          id="MazeHeight"
          color="warning"
          focused
          InputProps={{
            style: { color: 'white', width: '100%' }, // change font color here
          }}
        />
      </div>
      <div className="child">
        <TextField
          label="Length"
          helperText="Maze length (bigger than 4 less than 100)"
          type="number"
          value={length}
          onChange={handleChangeMazeLength}
          variant="standard"
          id="MazeLength"
          color="warning"
          focused
          InputProps={{
            style: { color: 'white', width: '100%' }, // change font color here
          }}
        />
      </div>
    </div>
  )
}
Dimens.propTypes = {
  handleChangeMazeLength: PropTypes.func.isRequired,
  handleChangeMazeHeight: PropTypes.func.isRequired,
  height: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
}
