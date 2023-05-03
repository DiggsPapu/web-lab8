import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
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
export default function Labyrinth({ theme = 2 }, { inverted = 0 }) {
  const [maze, setMaze] = useState([])
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
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
  console.log(maze)
  if (isLoaded && error == null) {
    let array = maze.split('')
    array = removeAll(array, '\n')
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
            array.map((item, i) => (
              <BuildingWall
                style={{
                  marginRight: '10%',
                }}
                position={item}
                key={i}
              />
            ))
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
            array.map((item, i) => (
              <BuildingWall
                style={{
                  marginRight: '10%',
                }}
                position={item}
                key={i}
              />
            ))
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
            array.map((item, i) => (
              <WarWall
                style={{
                  marginRight: '10%',
                }}
                position={item}
                key={i}
              />
            ))
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
