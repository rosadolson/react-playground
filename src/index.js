import React from 'react'
import ReactDOM from 'react-dom'

import App from './acme-app/App'
import data from './acme-app/data'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App data={data} />, document.getElementById('root'))
registerServiceWorker()
