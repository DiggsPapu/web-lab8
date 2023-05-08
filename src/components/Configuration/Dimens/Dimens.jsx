import React from 'react'
import { TextField } from '@mui/material'

export default function Dimens() {
  
  return (
    <>
      <TextField label="Height" helperText="Maze height (bigger than 4 less than 100)" />
      <TextField label="Length" helperText="Maze length (bigger than 4 less than 100)" />
    </>
  )
}
