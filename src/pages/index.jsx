import React from 'react'
import Game from './Game/Game'

export default function Page() {
  const route = new URLSearchParams(window.location.search)
  switch (route.get('route')) {
    case 'menu':
      return (
        <Game />
      )
    case 'game':
      return (
        <Game />
      )
    default:
      return (
        <Game />
      )
  }
}
