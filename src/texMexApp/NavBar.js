import React from 'react'
import NavBarLink from './NavBarLink'
import PropTypes from 'prop-types'

const NavBar = ({ navTitle }) => {
  return (
    <div>
      <div>
        <span className='nav-bar-title' />{navTitle}
      </div>
      <nav className='nav-bar-link'>
        <NavBarLink name={'home'} />
        <NavBarLink name={'menu'} />
        <NavBarLink name={'contact'} />
      </nav>
    </div>
  )
}

NavBar.propTypes = {
  navTitle: PropTypes.array.isRequired
}

export default NavBar
