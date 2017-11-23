import React from 'react'
import Header from './Header'
import ToDoContainer from './ToDoContainer'

const appStyle = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundImage: 'url("https://vignette4.wikia.nocookie.net/animal-jam-clans-1/images/d/dc/COF_flowers.png/revision/latest?cb=20170418180905")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover'
  }
}

const App = () => {
  return (
    <div style={appStyle.container}>
      <Header />
      <ToDoContainer />
    </div>
  )
}

export default App
