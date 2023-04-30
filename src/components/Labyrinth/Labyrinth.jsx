import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'

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
  console.log(maze)
  // console.log(maze.length)
  if (isLoaded && error == null) {
    return (
      <div>hola</div>
    )
  } if (!isLoaded) { return (<div>Loading</div>) }
  return (
    <div>
      Error:
      {error.message}
    </div>
  )
}
