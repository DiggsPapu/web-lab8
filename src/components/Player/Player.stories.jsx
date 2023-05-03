import React from 'react'
import Player from './Player'

export default {
  title: 'Player',
  argTypes: {
    char: {
      type: { name: 'string', required: false },
      defaultValue: 'Thanos',
      options: ['Spiderman', 'Venom', 'Wolverine', 'Carnage'],
      control: { type: 'radio' },
    },
  },
  component: Player,
}
export const Character = {
  render: (args) => <Player {...args} />,
}
