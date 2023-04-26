import React from 'react'
import Player from './Player'

export default {
  title: 'Character',
  args: {
    variant: 'primary',
  },
  component: Player,
}
export const Default = {
  render: () => <Player />,
}
export const Primary = {
  render: () => <Player char="Spiderman" />,
}
export const Secondary = {
  render: () => <Player char="Venom" />,
}
export const Tertiary = {
  render: () => <Player char="Carnage" />,
}
export const Quaternary = {
  render: () => <Player char="Thanos" />,
}
