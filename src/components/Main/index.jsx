import React from 'react'
import { Switch, Route } from 'react-router-dom'


import Worklist from '../Worklist/index.jsx'
import Work from '../Work/index.jsx'

const Main = () => (

  <Switch>
    <Route exact path='/' component={ Worklist }/>
    <Route path='/:id' component={ Work }/>
  </Switch>
)

export default Main
