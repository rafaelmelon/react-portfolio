// Dependencies
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// Components
import App from './components/App/index.jsx'

// Styles
import styles from './assets/css/index.scss'

render((
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
), document.getElementById('root'))
