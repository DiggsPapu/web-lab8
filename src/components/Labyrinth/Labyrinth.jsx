import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Player from '@components/Player/Player'
import BuildingWall from './Wall/BuildingWall/BuildingWall'
import './Labyrinth.css'
import WarWall from './Wall/WarWall/WarWall'

function removeAll(arr, target) {
  let i = 0
  while (i < arr.length) {
    if (arr[i] === target) {
      arr.splice(i, 1)
    } else {
      i += 1
    }
  }
  return arr
}
export default function Labyrinth({ theme = 1, inverted = 0 }) {
  const [maze, setMaze] = useState([])
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [position, setPosition] = useState({ row: 2, col: 2 })
  const [arrayPos, setArrayPos] = useState(32)
  let array = []
  function handleKeyDown(event) {
    switch (event.key) {
      case 'ArrowUp':
        if (array[arrayPos - 31] === ' ' || array[arrayPos - 31] === 'p') {
          setArrayPos(arrayPos - 31)
          setPosition({ row: position.row - 1, col: position.col })
        }
        break
      case 'ArrowDown':
        if (array[arrayPos + 31] === ' ' || array[arrayPos + 31] === 'p') {
          setArrayPos(arrayPos + 31)
          setPosition({ row: position.row + 1, col: position.col })
        }
        break
      case 'ArrowLeft':
        if (array[arrayPos - 1] === ' ' || array[arrayPos - 1] === 'p') {
          setArrayPos(arrayPos - 1)
          setPosition({ row: position.row, col: position.col - 1 })
        }
        break
      case 'ArrowRight':
        if (array[arrayPos + 1] === ' ' || array[arrayPos + 1] === 'p') {
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
  useEffect(() => {
    fetch('https://maze.uvgenios.online/?type=text&w=10&h=10')
      // It does with text and not Json bc it has ASCII characters and not json.
      .then((res) => res.text())
      .then(
        (res) => {
          setIsLoaded(true)
          setMaze(res)
        },
        (mistake) => {
          setIsLoaded(true)
          setError(mistake)
        },
      )
  }, [])
  // console.log(maze)
  if (isLoaded && error == null) {
    array = maze.split('')
    array = removeAll(array, '\n')
    // console.log(array)
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
            array.map((item, i) => {
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
            array.map((item, i) => {
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
            array.map((item, i) => {
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
  } if (!isLoaded) { return (<div>Loading</div>) }
  return (
    <div>
      Error:
      {error.message}
    </div>
  )
}
Labyrinth.propTypes = {
  inverted: PropTypes.bool.isRequired,
  theme: PropTypes.oneOf([1, 2, 3]).isRequired,
}
