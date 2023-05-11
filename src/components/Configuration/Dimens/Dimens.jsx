import React from 'react'
import { TextField } from '@mui/material'
import PropTypes from 'prop-types'

export default function Dimens(props) {
  const {
    handleChangeMazeLength,
    handleChangeMazeHeight,
    height,
    length,
  } = props
  return (
    <div style={{
      marginTop: '2%', marginBottom: '2%', display: 'flex', flexDirection: 'row',
    }}
    >
      <TextField
        label="Height"
        helperText="Maze height (bigger than 4 less than 100)"
        type="number"
        value={height}
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
        value={length}
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
  )
}
Dimens.propTypes = {
  handleChangeMazeLength: PropTypes.func.isRequired,
  handleChangeMazeHeight: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
}
