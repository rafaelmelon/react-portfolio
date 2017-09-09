// Dependencies
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Components
import App from './components/App/index.jsx'
import Home from './components/Home/index.jsx'
import Work from './components/Work/index.jsx'
import NotFound from './components/NotFound/index.jsx'

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route exact path='/post/:id' component={ Work } />
      <Route component={ NotFound } />
    </Switch>
  </App>

export default AppRoutes
