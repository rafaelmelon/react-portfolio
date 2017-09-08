import React, { Component } from 'react'

import Header from '../Header/index.jsx'
import Main from '../Main/index.jsx'
import Contact from '../Contact/index.jsx'
import Footer from '../Footer/index.jsx'

export class App extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  componentDidMount () {

  }
  render () {
    return (
      <div>
        
        <Main />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App
