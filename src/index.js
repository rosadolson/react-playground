import React from 'react'
import ReactDOM from 'react-dom'

// import App from './webApp/App'
// import App from './acmeApp/App'
// import data from './acmeApp/data'
// import MonsterApp from './monsterMash/monsterApp'
import SmartApp from './smartApp/SmartApp'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<SmartApp />, document.getElementById('root'))
registerServiceWorker()
