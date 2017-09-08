import React from 'react'
import { Link } from 'react-router-dom'
import Scrollchor from 'react-scrollchor'
import logo from '../../assets/img/logo.png'

const Header = () => {
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
              <ul>
                <li>
                  <Scrollchor to='#works'>Works</Scrollchor>
                </li>
                <li>
                  <Scrollchor to='#about'>About</Scrollchor>
                </li>
                <li>
                  <Scrollchor to='#contact'>Contact</Scrollchor>
                </li>
                <li>
                  <Link to=''>CV</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
