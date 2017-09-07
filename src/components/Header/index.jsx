import React from 'react'
import { Link } from 'react-router-dom'
import Scrollchor from 'react-scrollchor'
import logo from '../../assets/img/logo.png'

const Header = () => {
  return (
    <header className="b-nav">
      <div className="container">
        <div className="row">
          <div className="four columns">
            <img src={ logo } alt="Logo Suix" />
          </div>
          <div className="eight columns">
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
