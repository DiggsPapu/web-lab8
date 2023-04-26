import React from 'react'
import PropTypes from 'prop-types'
import Wolverine from '../../assets/Wolverine.gif'
import Spiderman from '../../assets/Spiderman.gif'
import Venom from '../../assets/Venom.gif'
import Carnage from '../../assets/Carnage.gif'
import Thanos from '../../assets/Thanos.gif'
import './Player.css'

function Player({ char = 'Thanos' }) {
  let image = Thanos
  if (char === 'Spiderman') {
    image = Spiderman
  } else if (char === 'Venom') {
    image = Venom
  } else if (char === 'Carnage') {
    image = Carnage
  } else if (char === 'Wolverine') {
    image = Wolverine
  }
  return (
    <div className="Player">
      <img src={image} alt="character" />
      <h1>{char}</h1>
    </div>
  )
}
Player.propTypes = {
  char: PropTypes.string.isRequired,
}
export default Player
