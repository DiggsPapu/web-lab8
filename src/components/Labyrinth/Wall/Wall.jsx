import React from 'react'
import PropTypes from 'prop-types'
import Center from '@assets/BuildingSprites/buildingCenter.png'
import Corner from '@assets/BuildingSprites/buildingCorner.png'
import Side from '@assets/BuildingSprites/buildingSide.png'
import './Wall.css'

function Wall({ position }) {
  let image = ''
  if (position === '+') {
    image = Corner
  } else if (position === '-') {
    image = Center
  } else if (position === '|') {
    image = Side
  }
  return (
    <div className={
      position === '-'
        ? 'wallside'
        : 'wall'
    }
    >
      <img src={image} alt="position" />
    </div>
  )
}
Wall.propTypes = {
  position: PropTypes.string.isRequired,
}
export default Wall
