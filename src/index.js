// Dependencies
import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'

// Routes
import AppRoutes from './routes'

// Assets
import styles from './assets/css/index.scss'

render(
  <HashRouter>
    <AppRoutes />
  </HashRouter>,
  document.getElementById('root')
)
