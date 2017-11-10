import React from 'react'
import data from '../restaurantApp/data'
import RestaurantInfo from './RestaurantInfo'
import MenuContainer from './MenuContainer'

const App = () =>
  <div>
    <RestaurantInfo
      name={data.company[0].title}
      address={data.address}
      phone={data.phone}
    />
    <MenuContainer />
  </div>

export default App
