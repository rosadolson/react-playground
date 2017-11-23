import React from 'react'
import {
  Link
} from 'react-router-dom'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#34495e',
    padding: '10px',
    width: '100vw',
    boxShadow: '1px 1px 5px #888888'
  },
  link: {
    color: 'white'
  }
}

const NavigationBar = () => {
  return (
    <div style={styles.container}>
      <nav style={styles.link}>
        <Link to='/'> Home </Link>
        <Link to='/about'> About </Link>
        <Link to='/products'> Products </Link>
        <Link to='/services'> Services </Link>
      </nav>
    </div>
  )
}

export default NavigationBar
