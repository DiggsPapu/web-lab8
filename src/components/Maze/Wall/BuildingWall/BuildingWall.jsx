import React from 'react'
import PropTypes from 'prop-types'
import Center from '@assets/Maze/BuildingSprites/buildingCenter.png'
import Corner from '@assets/Maze/BuildingSprites/buildingCorner.png'
import Side from '@assets/Maze/BuildingSprites/buildingSide.png'
import Goal from '@assets/Maze/BuildingSprites/goal.png'
import './BuildingWall.css'

function BuildingWall({ position = ' ' }) {
  let image = ''
  if (position === ' ' || position === 'p') {
    return (
      <div className="street" />
    )
  } if (position === '-') {
    image = Center
  } else if (position === '+') {
    image = Corner
  } else if (position === '|') {
    image = Side
  } else if (position === 'g') {
    image = Goal
  }
  return (
    <div className={
      position === '-'
        ? 'building-wallside'
        : 'building-wall'
    }
    >
      <img src={image} alt="position" />
    </div>
  )
}
BuildingWall.propTypes = {
  position: PropTypes.string.isRequired,
}
export default BuildingWall
