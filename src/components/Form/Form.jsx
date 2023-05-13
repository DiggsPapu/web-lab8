import { React } from 'react'
import {
  TextField, Select, MenuItem, FormControl, InputLabel, Checkbox, FormControlLabel,
} from '@mui/material'
import Player from '@components/Player/Player'
import PropTypes from 'prop-types'

export default function Form(props) {
  const {
    handleChangeCharacter,
    handleHasTime,
    handleTime,
    time,
    hasTime,
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
          <MenuItem value="Spiderman">Spiderman</MenuItem>
          <MenuItem value="Wolverine">Wolverine</MenuItem>
        </Select>
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <FormControlLabel
            control={(
              <Checkbox
                checked={hasTime}
                onChange={handleHasTime}
                color="warning"
              />
          )}
            label="Timer?"
            color="warning"
            style={{ marginRight: '20%' }}
          />
          <TextField
            label="Time"
            helperText="Enter the seconds that you want to play the game"
            variant="standard"
            margin="normal"
            id="time"
            color="warning"
            type="number"
            disabled={!hasTime}
            onChange={handleTime}
            value={time}
            focused
            InputProps={{
              style: { color: 'white' }, // change font color here
            }}
            style={{ postion: 'relative', right: '0px', width: '50%' }}
          />
        </div>
      </FormControl>
      <Player char={character} altitude={200} position="right" />
    </div>
  )
}
Form.propTypes = {
  handleChangeCharacter: PropTypes.func.isRequired,
  handleHasTime: PropTypes.func.isRequired,
  handleTime: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  hasTime: PropTypes.bool.isRequired,
  character: PropTypes.string.isRequired,
}
