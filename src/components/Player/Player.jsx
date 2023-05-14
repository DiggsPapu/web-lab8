import React from 'react'
import PropTypes from 'prop-types'
import WolverineHorizontal from '@assets/Character/WolverineSprites/Wolverine.gif'
import WolverineUp from '@assets/Character/WolverineSprites/WolverineUp.gif'
import WolverineDown from '@assets/Character/WolverineSprites/WolverineDown.gif'
import SpidermanHorizontal from '@assets/Character/SpidermanSprites/SpidermanWalking.gif'
import SpidermanJump from '@assets/Character/SpidermanSprites/SpidermanJump.gif'
import SpidermanDown from '@assets/Character/SpidermanSprites/SpidermanDown.gif'
import VenomHorizontal from '@assets/Character/Venom/Venom.gif'
import VenomUp from '@assets/Character/Venom/VenomUp.gif'
import VenomDown from '@assets/Character/Venom/VenomDown.gif'
import ThanosHorizontal from '@assets/Character/ThanosSprites/Thanos.gif'
import ThanosUp from '@assets/Character/ThanosSprites/thanosUp.gif'
import ThanosDown from '@assets/Character/ThanosSprites/thanosDown.gif'
import './Player.css'

function Player({ char = 'Thanos', position = 'right', altitude = 727 / 21 }) {
  let image = ThanosHorizontal
  if (char === 'Spiderman') {
    image = SpidermanHorizontal
    if (position === 'up') {
      image = SpidermanJump
    } else if (position === 'down') {
      image = SpidermanDown
    }
  } else if (char === 'Venom') {
    image = VenomHorizontal
    if (position === 'up') {
      image = VenomUp
    } else if (position === 'down') {
      image = VenomDown
    }
  } else if (char === 'Wolverine') {
    image = WolverineHorizontal
    if (position === 'up') {
      image = WolverineUp
    } else if (position === 'down') {
      image = WolverineDown
    }
  } else if (char === 'Thanos') {
    if (position === 'up') {
      image = ThanosUp
    } else if (position === 'down') {
      image = ThanosDown
    }
  }
  return (
    <div
      className="Player"
    >
      {position === 'right' || position === 'left'
        ? (
          <img
            className={position === 'right' ? 'right' : 'left'}
            src={image}
            alt="character"
            style={{
              height: `${altitude}px`,
              width: 'auto',
            }}
          />
        )
        : (
          <img
            src={image}
            alt="character"
            style={{
              height: `${altitude}px`,
              width: 'auto',
            }}
          />
        )}
    </div>
  )
}
Player.propTypes = {
  char: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['right', 'left', 'up', 'down']).isRequired,
  altitude: PropTypes.number.isRequired,
}
export default Player
