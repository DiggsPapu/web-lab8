import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import Wall from './Wall/Wall'

function getRows(maze) {
  let i = 0
  for (let j = 0; j < maze.length; j += 1) {
    if (maze[j] === '\n') {
      i += 1
    }
  }
  return i
}
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
export default function Labyrinth() {
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
  if (isLoaded && error == null) {
    const columns = maze.indexOf('\n', 0)
    const rows = getRows(maze)
    let array = maze.split('')
    array = removeAll(array, '\n')
    console.log(columns)
    console.log(rows)
    console.log(maze)
    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateRows: 'repeat(21,34.6px)',
        gridTemplateColumns: 'repeat(31,45px)',
        alignContent: 'end',
        alignItems: 'end',
        gap: '0',
        background: 'black',
      }}
      >
        {
          array.map((item, i) => (
            <Wall
              style={{
                marginRight: '10%',
              }}
              position={item}
              key={i}
            />
          ))
        }
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
