import React from 'react'
import Labyrinth from './Labyrinth'

export default {
  title: 'Labyrinth',
  argTypes: {
    style: {
      type: { name: 'number', required: false },
      default: 1,
      options: [1, 2, 3],
      control: { type: 'select' },
    },
  },
  component: Labyrinth,
}
export const LabyrinthStory = {
  render: (args) => <Labyrinth {...args} />,
}
