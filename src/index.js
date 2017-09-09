// Dependencies
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// Routes
import AppRoutes from './routes'

// Assets
import styles from './assets/css/index.scss'

render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
  document.getElementById('root')
)
