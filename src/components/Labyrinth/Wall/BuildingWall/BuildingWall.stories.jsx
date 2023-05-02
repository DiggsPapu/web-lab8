import React from 'react'
import BuildingWall from './BuildingWall'

export default {
  title: 'BuildingWall',
  argTypes: {
    position: {
      type: { name: 'string', required: false },
      default: ' ',
      options: ['+', '-', ' ', '|', 'p', 'g'],
      control: { type: 'radio' },
    },
  },
  component: BuildingWall,
}
export const BuildingWallStory = {
  render: (args) => <BuildingWall {...args} />,
}
