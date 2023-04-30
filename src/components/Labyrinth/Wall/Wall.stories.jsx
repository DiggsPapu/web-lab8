import React from 'react'
import Wall from './Wall'

export default {
  title: 'Wall',
  argTypes: {
    position: {
      type: { name: 'string', required: false },
      options: ['+', '-', '|'],
      control: { type: 'radio' },
    },
  },
  component: Wall,
}
export const WallStory = {
  render: (args) => <Wall {...args} />,
}
