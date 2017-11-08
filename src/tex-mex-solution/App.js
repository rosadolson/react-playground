import React, {Component} from 'react'
import data from '../restaurantApp/data'
import RestaurantInfo from './RestaurantInfo'
import MenuContainer from './MenuContainer'

class App extends Component {
  render () {
    return (
      <div>
        <RestaurantInfo
          name={data.company[0].title}
          address={data.address}
          phone={data.phone}
        />
        <MenuContainer />
      </div>
    )
  }
}

export default App
