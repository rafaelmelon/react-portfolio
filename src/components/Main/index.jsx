// Dependencies
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Components
import Worklist from '../Worklist/index.jsx'
import Work from '../Work/index.jsx'
import NotFound from '../NotFound/index.jsx'

const Main = () => (

  <Switch>
    <Route exact path='/' component={ Worklist }/>
    <Route path='/:id' component={ Work }/>
    <Route path="*" component={ NotFound } />
  </Switch>
)

export default Main
