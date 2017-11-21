import React from 'react'
import NavigationBar from './Navigation'
import HomeContainer from './HomeContainer'
import AboutContainer from './AboutContainer'
import ProductsContainer from './ProductsContainer'
import ServicesContainer from './ServicesContainer'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const styles = {
  container: {
    backgroundColor: '#bdc3c7',
    height: '100vh',
    width: '100vw',
    margin: '-1%'
  }
}

const App = () => {
  return (
    <Router>
      <div style={styles.container}>
        <NavigationBar />
        <Route exact path='/' component={HomeContainer} />
        <Route path='/about' component={AboutContainer} />
        <Route path='/products' component={ProductsContainer} />
        <Route path='/services' component={ServicesContainer} />
      </div>
    </Router>
  )
}

export default App
