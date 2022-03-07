import React from 'react'
import Nav from '../nav/nav'
import headerStyles from './header.module.css'

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <Nav />
    </header>
  )
}

export default Header
