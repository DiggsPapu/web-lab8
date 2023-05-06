import React from 'react'
import Maze from './Maze'

export default {
  title: 'Maze',
  component: Maze,
}
export const MazeStory = {
  render: (args) => <Maze {...args} />,
}
