import React from 'react'
import ReactDOM from 'react-dom'

// import App from './webApp/App'
import App from './acmeApp/App'
import MonsterApp from './monsterMash/monsterApp'
import data from './acmeApp/data'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<MonsterApp />, document.getElementById('root'))
registerServiceWorker()
