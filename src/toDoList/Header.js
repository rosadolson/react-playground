import React from 'react'

const headerStyle = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '15%',
    color: '#e22d54',
    fontSize: '50px',
    textShadow: '3px 2px #ffd7d3'
  }
}

const Header = () => {
  return (
    <div style={headerStyle.container}>
      <h1>To Do List:</h1>
    </div>
  )
}

export default Header
