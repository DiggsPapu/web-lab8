import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Labyrinth from '@components/Labyrinth/Labyrinth'
import './Game.css'

export default function Game() {
  return (
    <div className="Game">
      <Labyrinth />
    </div>
  )
}
