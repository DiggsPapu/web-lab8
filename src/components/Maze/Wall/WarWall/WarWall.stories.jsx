import React from 'react'
import WarWall from './WarWall'

export default {
  title: 'WarWall',
  argTypes: {
    position: {
      type: { name: 'string', required: false },
      default: ' ',
      options: ['+', '-', ' ', '|', 'p', 'g'],
      control: { type: 'radio' },
    },
  },
  component: WarWall,
}
export const WarWallStory = {
  render: (args) => <WarWall {...args} />,
}
