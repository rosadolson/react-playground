import React from 'react'
import Link from './Link'

const NavigationBar = () => {
  return (
    <nav className='nav'>
      <Link icon={'home'} name={'HOME'} />
      <Link icon={'question-circle-o'} name={'ABOUT'} />
      <Link icon={'cart-plus'} name={'PRODUCTS'} />
      <Link icon={'envelope'} name={'CONTACT'} />
    </nav>
  )
}

export default NavigationBar
