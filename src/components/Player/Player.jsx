import React from 'react'
import PropTypes from 'prop-types'
import WolverineHorizontal from '@assets/Character/Wolverine.gif'
import SpidermanHorizontal from '@assets/Character/SpidermanSprites/SpidermanWalking.gif'
import VenomHorizontal from '@assets/Character/Venom/Venom.gif'
import VenomUp from '@assets/Character/Venom/VenomUp.gif'
import VenomDown from '@assets/Character/Venom/VenomDown.gif'
import CarnageHorizontal from '@assets/Character/Carnage.gif'
import ThanosHorizontal from '@assets/Character/ThanosSprites/Thanos.gif'
import ThanosUp from '@assets/Character/ThanosSprites/thanosUp.gif'
import ThanosDown from '@assets/Character/ThanosSprites/thanosDown.gif'
import './Player.css'

function Player({ char = 'Thanos', position = 'right' }) {
  let image = ThanosHorizontal
  if (char === 'Spiderman') {
    image = SpidermanHorizontal
  } else if (char === 'Venom') {
    if (position === 'up') {
      image = VenomUp
    } else if (position === 'down') {
      image = VenomDown
    } else {
      image = VenomHorizontal
    }
  } else if (char === 'Carnage') {
    image = CarnageHorizontal
  } else if (char === 'Wolverine') {
    image = WolverineHorizontal
  } else if (char === 'Thanos') {
    if (position === 'up') {
      image = ThanosUp
    } else if (position === 'down') {
      image = ThanosDown
    }
  }
  return (
    <div className="Player">
      {position === 'right' || position === 'left'
        ? (
          <>
            <img className={position === 'right' ? 'right' : 'left'} src={image} alt="character" />
            <h1>{char}</h1>
          </>
        )
        : (
          <>
            <img src={image} alt="character" />
            <h1>{char}</h1>
          </>
        )}
    </div>
  )
}
Player.propTypes = {
  char: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['right', 'left', 'up', 'down']).isRequired,
}
export default Player
