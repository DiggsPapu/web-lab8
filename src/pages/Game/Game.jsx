import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import Maze from '@components/Maze/Maze'
import Player from '@components/Player/Player'
import Timer from '@components/Timer/Timer'
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
export default function Game({
  theme, inverted, height = 10, length = 10, character = 'Spiderman', hasTime = false, time = 60,
}) {
  const [maze, setMaze] = useState([])
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [position, setPosition] = useState({ row: 2, col: 3 })
  const [arrayPos, setArrayPos] = useState(32)
  const [pos, setPos] = useState('right')
  const [count, setCount] = useState(time)
  const history = useNavigate()
  useEffect(() => {
    if (count === 0) {
      history('/Fail')
    }
    const timer = setTimeout(() => {
      setCount(count - 1)
    }, 1000)
    return () => clearTimeout(timer)
  }, [count])
  let dimens = []
  let array = []
  function handleKeyDown(event) {
    switch (event.key) {
      case 'ArrowUp':
        if (array[arrayPos - dimens[1]] === ' ' || array[arrayPos - dimens[1]] === 'p') {
          setArrayPos(arrayPos - dimens[1])
          setPosition({ row: position.row - 1, col: position.col })
          setPos('up')
        } else if (array[arrayPos - dimens[1]] === 'g') {
          history('/Success')
        }
        break
      case 'ArrowDown':
        if (array[arrayPos + dimens[1]] === ' ' || array[arrayPos + dimens[1]] === 'p') {
          setArrayPos(arrayPos + dimens[1])
          setPosition({ row: position.row + 1, col: position.col })
          setPos('down')
        } else if (array[arrayPos + dimens[1]] === 'g') {
          history('/Success')
        }
        break
      case 'ArrowLeft':
        if (array[arrayPos - 1] === ' ' || array[arrayPos - 1] === 'p') {
          setArrayPos(arrayPos - 1)
          setPosition({ row: position.row, col: position.col - 1 })
          setPos('left')
        } else if (array[arrayPos - 1] === 'g') {
          history('/Success')
        }
        break
      case 'ArrowRight':
        if (array[arrayPos + 1] === ' ' || array[arrayPos + 1] === 'p') {
          setArrayPos(arrayPos + 1)
          setPosition({ row: position.row, col: position.col + 1 })
          setPos('right')
        } else if (array[arrayPos + 1] === 'g') {
          history('/Success')
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
    fetch(`https://maze.uvgenios.online/?type=text&w=${length}&h=${height}`)
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
        <Maze theme={theme} inverted={inverted} maze={array} dimens={dimens} />
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
            style={{
              gridRow: position.row, gridColumn: position.col, alighSelf: 'right', marginBottom: '10px',
            }}
          >
            <Player position={pos} char={character} altitude={dimens[3]} />
          </div>
          <div style={{ position: 'fixed', right: '0%', bottom: '0%' }} hidden={!hasTime}>
            <Timer time={count} />
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
  length: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  theme: PropTypes.number.isRequired,
  inverted: PropTypes.bool.isRequired,
  hasTime: PropTypes.bool.isRequired,
  time: PropTypes.string.isRequired,
}
