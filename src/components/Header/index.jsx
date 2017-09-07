import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/img/logo.png'

console.log(logo);

const Header = () => {
  return (
    <header className="b-nav">
      <div className="container">
        <div className="row">
          <div className="four columns">
            <img src={ logo } alt="" />
          </div>
          <div className="eight columns">
            <nav>
              <ul>
                <li>
                  <Link to=''>Works</Link>
                </li>
                <li>
                  <Link to=''>About</Link>
                </li>
                <li>
                  <Link to=''>Contact</Link>
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
