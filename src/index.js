import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App/index.jsx'

import styles from './assets/css/index.scss'

render((
  <BrowserRouter history={ history }>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
