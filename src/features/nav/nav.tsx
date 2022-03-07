import React from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='nav-list'>
        <li>
          <NavLink
            to={'/'}
            className={`nav-link logo ({ isActive }) => (isActive ? 'active' : '')`} aria-label="Home">
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/dashboard'}
            className={`nav-link ({ isActive }) => (isActive ? 'active' : '')`}
          >
            Employees
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
