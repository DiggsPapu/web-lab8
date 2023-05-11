import React from 'react'
import './Start.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Start() {
  return (
    <div className="start">
      <h1>MARVEL MAZE</h1>
      <Link to="/Menu">
        <Button>Start</Button>
      </Link>
    </div>
  )
}
