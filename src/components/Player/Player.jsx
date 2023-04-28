import React from 'react'
import PropTypes from 'prop-types'
import WolverineHorizontal from '@assets/Wolverine.gif'
import SpidermanHorizontal from '@assets/SpidermanSprites/SpidermanWalking.gif'
import VenomHorizontal from '@assets/Venom.gif'
import CarnageHorizontal from '@assets/Carnage.gif'
import ThanosHorizontal from '@assets/Thanos.gif'
import './Player.css'

function Player({ char = 'Thanos' }) {
  let image = ThanosHorizontal
  if (char === 'Spiderman') {
    image = SpidermanHorizontal
  } else if (char === 'Venom') {
    image = VenomHorizontal
  } else if (char === 'Carnage') {
    image = CarnageHorizontal
  } else if (char === 'Wolverine') {
    image = WolverineHorizontal
  }
  return (
    <div className="Player">
      <img className="right" src={image} alt="character" />
      <h1>{char}</h1>
    </div>
  )
}
Player.propTypes = {
  char: PropTypes.string.isRequired,
}
export default Player
