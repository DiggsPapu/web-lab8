import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Maze from '@components/Maze/Maze'
import Player from '../../components/Player/Player'
import './Game.css'

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
function getDimens(maze) {
  let rows = 0
  for (let j = 0; j < maze.length; j += 1) {
    if (maze[j] === '\n') {
      rows += 1
    }
  }
  return [rows - 2, maze.indexOf('\n', 0), 1395 / maze.indexOf('\n', 0), 727 / (rows - 2)]
}
export default function Game({ height = 10, len = 10 }) {
  const [maze, setMaze] = useState([])
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [position, setPosition] = useState({ row: 2, col: 3 })
  const [arrayPos, setArrayPos] = useState(32)
  const [pos, setPos] = useState('right')
  let dimens = []
  let array = []
  function handleKeyDown(event) {
    switch (event.key) {
      case 'ArrowUp':
        if (array[arrayPos - dimens[1]] === ' ' || array[arrayPos - dimens[1]] === 'p') {
          setArrayPos(arrayPos - dimens[1])
          setPosition({ row: position.row - 1, col: position.col })
          setPos('up')
        }
        break
      case 'ArrowDown':
        if (array[arrayPos + dimens[1]] === ' ' || array[arrayPos + dimens[1]] === 'p') {
          setArrayPos(arrayPos + dimens[1])
          setPosition({ row: position.row + 1, col: position.col })
          setPos('down')
        }
        break
      case 'ArrowLeft':
        if (array[arrayPos - 1] === ' ' || array[arrayPos - 1] === 'p') {
          setArrayPos(arrayPos - 1)
          setPosition({ row: position.row, col: position.col - 1 })
          setPos('left')
        }
        break
      case 'ArrowRight':
        if (array[arrayPos + 1] === ' ' || array[arrayPos + 1] === 'p') {
          setArrayPos(arrayPos + 1)
          setPosition({ row: position.row, col: position.col + 1 })
          setPos('right')
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
    fetch(`https://maze.uvgenios.online/?type=text&w=${len}&h=${height}`)
      // It does with text and not Json bc it has ASCII characters and not json.
      .then((res) => res.text())
      .then(
        (res) => {
          setIsLoaded(true)
          setMaze(res)
          setArrayPos(res.indexOf('p', 0))
        },
        (mistake) => {
          setIsLoaded(true)
          setError(mistake)
        },
      )
  }, [])
  if (isLoaded && error == null) {
    array = maze.split('')
    dimens = getDimens(maze)
    array = removeAll(array, '\n')
    return (
      <div className="game">
        <Maze theme={1} inverted={false} maze={array} dimens={dimens} />
        <div style={{
          width: '100%',
          height: '100%',
          display: 'grid',
          gridTemplateRows: `repeat(${dimens[0]},${dimens[3]}px)`,
          gridTemplateColumns: `repeat(${dimens[1]},${dimens[2]}px)`,
          alignContent: 'end',
          alignItems: 'end',
          gap: '0',
          position: 'absolute',
          top: '0px',
          left: '0px',
        }}
        >
          <div
            style={{ gridRow: position.row, gridColumn: position.col, alighSelf: 'right' }}
          >
            <Player position={pos} char="Venom" altitude={dimens[3]} />
          </div>
        </div>
      </div>
    )
  } if (!isLoaded) { return (<div>Loading</div>) }
  return (
    <div>
      Error:
      {error.message}
    </div>
  )
}
Game.propTypes = {
  len: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}
