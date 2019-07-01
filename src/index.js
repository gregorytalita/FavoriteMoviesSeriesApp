import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter } from 'react-router-dom'
import App from './containers/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>
  , document.getElementById('root'))
serviceWorker.unregister()
