import React from 'react'
import PropTypes from 'prop-types'
import Center from '@assets/BuildingSprites/buildingCenter.png'
import Corner from '@assets/BuildingSprites/buildingCorner.png'
import Goal from '@assets/BuildingSprites/goal.png'
import './Wall.css'

function Wall({ position = ' ' }) {
  let image = ''
  if (position === ' ' || position === '\n') {
    return (
      <div className="street" />
    )
  } if (position === '+' || position === '-') {
    image = Center
  } else if (position === '|') {
    image = Corner
  } else if (position === 'g' || position === 'p') {
    image = Goal
  }
  return (
    <div className="inverted-colors">
      <div className={
      position === '-'
        ? 'wallside'
        : 'wall'
    }
      >
        <img src={image} alt="position" />
      </div>
    </div>
  )
}
Wall.propTypes = {
  position: PropTypes.string.isRequired,
}
export default Wall
