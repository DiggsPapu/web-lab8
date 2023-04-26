import React from 'react'
import Player from './Player'

export default {
  title: 'Character',
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
export const Story = {
  render: (args) => <Player {...args} />,
}
