import React from 'react'

const headerStyle = {
  container: {
    background: '#91B496',
    borderRadius: '5px',
    display: 'flex',
    color: 'white',
    padding: '3%',
    width: '80vw',
    height: '10vh',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const Header = () => {
  return (
    <div style={headerStyle.container}>
      <h1>To Do List App</h1>
    </div>
  )
}

export default Header
