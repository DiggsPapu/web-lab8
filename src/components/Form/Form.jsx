import React from 'react'
import {
  TextField, Select, MenuItem, FormControl, InputLabel,
} from '@mui/material'
import Player from '@components/Player/Player'
import PropTypes from 'prop-types'

export default function Form(props) {
  const {
    handleChangeCharacter,
    character,
  } = props
  return (
    <div style={{
      display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '3%',
    }}
    >
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} color="warning" focused>
        <InputLabel>Character Selection</InputLabel>
        <Select value={character} onChange={handleChangeCharacter} style={{ color: 'white' }}>
          <MenuItem value="" color="warning">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Thanos" color="warning">Thanos</MenuItem>
          <MenuItem value="Venom">Venom</MenuItem>
          <MenuItem value="Carnage">Carnage</MenuItem>
          <MenuItem value="Spiderman">Spiderman</MenuItem>
          <MenuItem value="Wolverine">Wolverine</MenuItem>
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
      <Player char={character} altitude={200} position="right" />
    </div>
  )
}
Form.propTypes = {
  handleChangeCharacter: PropTypes.func.isRequired,
  character: PropTypes.string.isRequired,
}
