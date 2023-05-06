import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Player from '@components/Player/Player'
import BuildingWall from './Wall/BuildingWall/BuildingWall'
import WarWall from './Wall/WarWall/WarWall'
import './Maze.css'

export default function Maze({
  theme = 1, inverted = 0, maze = [
    '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+',
    '|', 'p', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|',
    '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', ' ', ' ', '+',
    '|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|',
    '+', '-', '-', '+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+',
    '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', '|',
    '+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', ' ', ' ', '+', ' ', ' ', '+',
    '|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|',
    '+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', '-', '-', '+', '-', '-', '+', ' ', ' ', '+', ' ', ' ', '+',
    '|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|',
    '+', ' ', ' ', '+', '-', '-', '+', '-', '-', '+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', ' ', ' ', '+',
    '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|',
    '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+', '-', '-', '+', ' ', ' ', '+', '-', '-', '+', '-', '-', '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+',
    '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|',
    '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+',
    '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|',
    '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', '-', '-', '+',
    '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', '|',
    '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+',
    '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'g', '|',
    '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+',
  ],
}) {
  const [position, setPosition] = useState({ row: 2, col: 2 })
  const [arrayPos, setArrayPos] = useState(32)
  function handleKeyDown(event) {
    switch (event.key) {
      case 'ArrowUp':
        if (maze[arrayPos - 31] === ' ' || maze[arrayPos - 31] === 'p') {
          setArrayPos(arrayPos - 31)
          setPosition({ row: position.row - 1, col: position.col })
        }
        break
      case 'ArrowDown':
        if (maze[arrayPos + 31] === ' ' || maze[arrayPos + 31] === 'p') {
          setArrayPos(arrayPos + 31)
          setPosition({ row: position.row + 1, col: position.col })
        }
        break
      case 'ArrowLeft':
        if (maze[arrayPos - 1] === ' ' || maze[arrayPos - 1] === 'p') {
          setArrayPos(arrayPos - 1)
          setPosition({ row: position.row, col: position.col - 1 })
        }
        break
      case 'ArrowRight':
        if (maze[arrayPos + 1] === ' ' || maze[arrayPos + 1] === 'p') {
          setArrayPos(arrayPos + 1)
          setPosition({ row: position.row, col: position.col + 1 })
        }
        break
      default:
        break
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })
  if (theme === 1) {
    return (
      <div className={
        inverted
          ? 'inverted-colors'
          : 'normal-colors'
      }
      >
        <div className="city-night-style">
          <div className="labyrinth">
            {
          maze.map((item, i) => {
            if (item === 'p') {
              return (
                <div
                  style={{ gridRow: position.row, gridColumn: position.col }}
                >
                  <Player
                    key="player"
                  />
                </div>
              )
            }
            return (
              <BuildingWall
                style={{
                  marginRight: '10%',
                }}
                position={item}
                key={i}
              />
            )
          })
        }
          </div>
        </div>
      </div>
    )
  } if (theme === 2) {
    return (
      <div className={
        inverted
          ? 'inverted-colors'
          : 'normal-colors'
      }
      >
        <div className="city-day-style">
          <div className="labyrinth">
            {
          maze.map((item, i) => {
            if (item === 'p') {
              return (
                <div
                  style={{ gridRow: position.row, gridColumn: position.col }}
                >
                  <Player
                    key="player"
                  />
                </div>
              )
            }
            return (
              <BuildingWall
                style={{
                  marginRight: '10%',
                }}
                position={item}
                key={i}
              />
            )
          })
        }
          </div>
        </div>
      </div>
    )
  } if (theme === 3) {
    return (
      <div className={
        inverted
          ? 'inverted-colors'
          : 'normal-colors'
      }
      >
        <div className="war-style">
          <div className="labyrinth">
            {
          maze.map((item, i) => {
            if (item === 'p') {
              return (
                <div
                  style={{ gridRow: position.row, gridColumn: position.col }}
                >
                  <Player
                    key="player"
                  />
                </div>
              )
            }
            return (
              <WarWall
                style={{
                  marginRight: '10%',
                }}
                position={item}
                key={i}
              />
            )
          })
        }
          </div>
        </div>
      </div>
    )
  }
}
Maze.propTypes = {
  inverted: PropTypes.bool.isRequired,
  theme: PropTypes.oneOf([1, 2, 3]).isRequired,
  maze: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}
