import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { PrivateRoute } from '../../components'
import * as routes from '../../core/constants/routes'
import Dashboard from '../Dashboard'
import Login from '../Login'

const App = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact path={routes.PRIVATE.DASHBOARD} component={Dashboard} />
      <Route exact path={routes.NOT_PRIVATE.LOGIN} component={Login} />
      <Redirect from='*' to={routes.NOT_PRIVATE.LOGIN} component={Login} />
    </Switch>
  </BrowserRouter>
)

export default App
