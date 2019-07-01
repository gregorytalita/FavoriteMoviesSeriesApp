import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { appStore } from '../../core/store/mainStore'
import * as routes from '../../core/constants/routes'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest}
    render={
      props => appStore.login ? (
        <Component {...props} />
      ) : (
        <Redirect to={routes.NOT_PRIVATE.LOGIN}
        />
      )
    }
  />
)

export default PrivateRoute
