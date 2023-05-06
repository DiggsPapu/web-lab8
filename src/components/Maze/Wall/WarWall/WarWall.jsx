import React from 'react'
import PropTypes from 'prop-types'
import Center from '@assets/Maze/OldSprites/muralla.png'
import Corner from '@assets/Maze/OldSprites/murodefensivo.png'
import Goal from '@assets/Maze/BuildingSprites/goal.png'
import './WarWall.css'

function WarWall({ position = ' ' }) {
  let image = ''
  if (position === ' ' || position === 'p') {
    return (
      <div className="stone-street" />
    )
  } if (position === '+' || position === '-') {
    image = Center
  } else if (position === '|') {
    image = Corner
  } else if (position === 'g' || position === 'p') {
    image = Goal
  }
  return (
    <div className={
      position === '-'
        ? 'war-wallside'
        : 'war-wall'
    }
    >
      {
          position === '|'
            ? (
              <>
                <img src={image} alt="position" />
                <img src={image} alt="position" />
                <img src={image} alt="position" />
              </>
            )
            : <img src={image} alt="position" />
        }

    </div>
  )
}
WarWall.propTypes = {
  position: PropTypes.string.isRequired,
}
export default WarWall
