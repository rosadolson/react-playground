import React from 'react'
import Link from './Link'

const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <Link icon={'home'} name={'HOME'} />
      <Link icon={'grav'} name={'ABOUT'} />
      <Link icon={'money'} name={'SHOP'} />
      <Link icon={'user-circle'} name={'CUSTOMERS'} />
      <Link icon={'envelope-square'} name={'CONTACT'} />
    </nav>
  )
}

export default NavBar
