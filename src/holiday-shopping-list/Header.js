import React from 'react'

const headerStyle = {
  container: {
    border: '3px solid black',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

const Header = () => {
  return (
    <div style={headerStyle.container}>
      <h3>Holiday Shopping List</h3>
      <p>Keep track of your gifts!</p>
    </div>
  )
}

export default Header
