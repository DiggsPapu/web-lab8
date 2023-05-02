import React from 'react'
import PropTypes from 'prop-types'
import Center from '@assets/Maze/OldSprites/muralla.png'
import Street from '@assets/Maze/OldSprites/stone-street.png'
import Corner from '@assets/Maze/OldSprites/murodefensivo.png'
import Goal from '@assets/Maze/BuildingSprites/goal.png'
import './WarWall.css'

function WarWall({ position = ' ' }) {
  let image = Street
  if (position === ' ' || position === '\n') {
    return (
      <div className="stone-street">
        <img src={image} alt="position" />
      </div>
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
        ? 'war-wallside'
        : 'war-wall'
    }
      >
        <img src={image} alt="position" />
      </div>
    </div>
  )
}
WarWall.propTypes = {
  position: PropTypes.string.isRequired,
}
export default WarWall
