import React from 'react'
import {
  Link
} from 'react-router-dom'

const NavigationBar = () => {
  return (
    <nav className='nav'>
      <Link to='/'> Home </Link>
    </nav>
  )
}

export default NavigationBar
