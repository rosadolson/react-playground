import React from 'react'
import ReactDOM from 'react-dom'

// import App from './webApp/App'
// import App from './acmeApp/App'
// import data from './acmeApp/data'
// import MonsterApp from './monsterMash/monsterApp'
// import SmartApp from './smartApp/SmartApp'
// import MappingAndFiltering from './mapAndFilter/MappingAndFiltering'
// import Data from './mapAndFilter/Data'
import ChatterApp from './chatterApp/ChatterApp'
import Data from './chatterApp/Data'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<ChatterApp Data={Data} />, document.getElementById('root'))
registerServiceWorker()
