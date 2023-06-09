import React from 'react'
import './Start.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Start() {
  return (
    <div className="start">
      <h1>MARVEL MAZE</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <img src="https://i.etsystatic.com/29790149/r/il/771212/3249471455/il_570xN.3249471455_pdxr.jpg" alt="Logo" />
        <Link to="/20172/lab8/Config">
          <Button color="warning" size="large" style={{ width: '100%', fontSize: '200%' }}>Start</Button>
        </Link>
      </div>
    </div>
  )
}
