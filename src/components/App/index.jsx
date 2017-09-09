// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ScrollToTop from 'react-scroll-up'

// Components
import Header from '../Global/Header/index.jsx'
import Content from '../Global/Content/index.jsx'
import Footer from '../Global/Footer/index.jsx'

// Data
import items from '../../data/menu'

const propTypes = {
  children: PropTypes.object.isRequired
}

class App extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="App">
        <Header
          title="Codejobs"
          items={ items }
        />
        <Content body={ children } />
        <Footer />
        <ScrollToTop showUnder={ 180 } duration={ 1500 } >
          <span className="top">
            <svg version="1.1" viewBox="0 0 129 129">
              <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
            </svg>
            <span>Top</span>
          </span>
        </ScrollToTop>
      </div>
    )
  }
}

App.propTypes = propTypes

export default App
