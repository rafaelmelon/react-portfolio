import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <img src="" alt="" />
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
    </header>
  )
}

export default Header
