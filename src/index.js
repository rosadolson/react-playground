import React from 'react'
import ReactDOM from 'react-dom'

// import App from './webApp/App'

// import App from './acmeApp/App'
// import data from './acmeApp/data'

// import MonsterApp from './monsterMash/monsterApp'

// import SmartApp from './smartApp/SmartApp'

// import MappingAndFiltering from './mapAndFilter/MappingAndFiltering'
// import Data from './mapAndFilter/Data'

// import ChatterApp from './chatterApp/ChatterApp'
// import Data from './chatterApp/Data'

// import SearchApp from './searchApp/App'
// import data from './searchApp/sentences'

// import RestaurantApp from './restaurantApp/RestaurantApp'
// import Data from './restaurantApp/Data'

import TexMexApp from './texMexApp/TexMexApp'
import data from './texMexApp/data'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<TexMexApp data={data} />, document.getElementById('root'))
registerServiceWorker()
