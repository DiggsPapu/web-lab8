import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Game from '@pages/Game/Game'
import Menu from '@pages/Menu/Menu'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Game />,
    children: [
      {
        path: '/Game',
        element: <Game />,
      },
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
