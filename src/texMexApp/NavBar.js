import React from 'react'
import NavBarLink from './NavBarLink'
import PropTypes from 'prop-types'

const NavBar = ({ navTitle }) => {
  return (
    <div className='nav-bar-section'>
      <p className='nav-bar-title'>{navTitle}</p>
      <nav className='nav-bar-link'>
        <NavBarLink name={'Menu'} />
        <NavBarLink name={'About'} />
        <NavBarLink name={'Contact'} />
      </nav>
    </div>
  )
}

NavBar.propTypes = {
  navTitle: PropTypes.string.isRequired
}

export default NavBar
