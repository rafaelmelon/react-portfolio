// Dependencies
import React, { Component } from 'react'

// Components
import Carousel from '../Carousel/index.jsx'
import WorkList from '../WorkList/index.jsx'
import About from '../About/index.jsx'
import Contact from '../Contact/index.jsx'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Carousel />
        <WorkList />
        <About />
        <Contact />
      </div>
    )
  }
}

export default Home
