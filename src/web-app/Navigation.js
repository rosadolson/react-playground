import React from 'react'
import {
  Link
} from 'react-router-dom'

const NavigationBar = () => {
  return (
    <nav className='nav'>
      <Link to='/'> Home </Link>
      <Link to='/section/about'> About </Link>
      <Link to='/section/products'> Products </Link>
    </nav>
  )
}

export default NavigationBar
