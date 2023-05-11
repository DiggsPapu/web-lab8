import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter, RouterProvider, Routes, Route,
} from 'react-router-dom'
import Game from '@pages/Game/Game'
import Menu from '@pages/Menu/Menu'
import Start from '@pages/Start/Start'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: 'Start',
        element: <Start />,
      },
      {
        path: 'Game',
        element: <Game len={20} height={10} />,
      },
      {
        path: 'Menu',
        element: <Menu />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
