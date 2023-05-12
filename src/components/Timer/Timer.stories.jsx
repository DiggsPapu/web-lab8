import React from 'react'
import Timer from './Timer'

export default {
  title: 'Timer',
  argTypes: {
    time: {
      type: { name: 'number', required: true },
    },
  },
  component: Timer,
}
export const TimerExample = {
  render: (args) => <Timer {...args} />,
}
