import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Scrollchor from 'react-scrollchor'
import logo from '../../assets/img/logo.png'

import { BrowserRouter } from 'react-router-dom'

class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      page: props.nav
    }

  }

  render () {
    const duration =  { duration: 1000 }
    return (
      <header className="b-nav">
        <div className="container">
          <div className="row">
            <div className="three columns">
              <Link className="logo" to='/'>
                <img src={ logo } alt="Logo Suix" />
              </Link>
            </div>
            <div className="nine columns">
              <nav>
                { this.state.page.nav == "home"
                  ?
                    <ul>
                      <li><Scrollchor animate={ duration } to='#works'>Works</Scrollchor></li>
                      <li><Scrollchor animate={ duration } to='#about'>About</Scrollchor></li>
                      <li><Scrollchor animate={ duration } to='#contact'>Contact</Scrollchor></li>
                      <li><Link to=''>CV</Link></li>
                    </ul>
                  :
                    <ul>
                      <li><Link to='/'>Home</Link></li>
                      <li><Scrollchor animate={ duration } to='#contact'>Contact</Scrollchor></li>
                      <li><Link to=''>CV</Link></li>
                    </ul>
                }
              </nav>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
