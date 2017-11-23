import React from 'react'
import Link from './Link'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    textDecoration: 'none',
    color: 'black'
  }
}

const NavBar = () => {
  return (
    <nav style={styles.container}>
      <Link icon={'home'} name={'HOME'} />
      <Link icon={'grav'} name={'ABOUT'} />
      <Link icon={'money'} name={'SHOP'} />
      <Link icon={'user-circle'} name={'CUSTOMERS'} />
      <Link icon={'envelope-square'} name={'CONTACT'} />
    </nav>
  )
}

export default NavBar
