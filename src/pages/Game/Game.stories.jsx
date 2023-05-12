import React from 'react'
import Game from './Game'

export default {
  title: 'Game',
  component: Game,
  argTypes: {
    character: {
      type: { name: 'string', required: true },
      defaultValue: 'Thanos',
      options: ['Spiderman', 'Venom', 'Wolverine', 'Carnage'],
      control: { type: 'select' },
    },
    inverted: {
      type: { name: 'boolean', required: true },
      defaultValue: false,
    },
    theme: {
      type: { name: 'number', required: true },
      defaultValue: 1,
      options: [1, 2, 3],
      control: { type: 'select' },
    },
    height: {
      type: { name: 'number', required: true },
      defaultValue: 10,
      options: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26],
      control: { type: 'select' },
    },
    length: {
      type: { name: 'number', required: true },
      defaultValue: 10,
      options: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26],
      control: { type: 'select' },
    },
  },
}
export const GameStory = {
  render: (args) => <Game {...args} />,
}
