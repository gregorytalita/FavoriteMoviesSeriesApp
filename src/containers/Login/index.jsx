import React, { useState } from 'react'
import { ReactComponent as Popcorn } from '../../assets/popcorn.svg'
import { LoginForm, SignupForm } from '../../components'
import { Typography, Button } from '@material-ui/core'
import appStore from '../../core/store/mainStore'
import './login.css'

const Login = ({ history }) => {
  const [login, toggleLogin] = useState(true)
  const [error, toggleError] = useState(false)

  const handleLogin = (obj) => {
    if (!appStore.register.find(user => user.email === obj.email && user.password === obj.password)) {
      toggleError(true)
    } else {
      appStore.profile = obj
      appStore.login = true
      history.push('/dashboard')
    }
  }

  const handleRegistration = (obj) => {
    if (appStore.register.find(user => user.email === obj.email) || obj.email === '') {
      toggleError(true)
    } else {
      appStore.register = obj
      appStore.profile = obj
      appStore.login = true
      history.push('/dashboard')
    }
  }

  const toggleForms = () => {
    toggleLogin(!login)
    toggleError(false)
  }

  return (
    <div className='wrapper'>
      <div className='panelPlaceholder'>
        <div className='panel'>
          <div className='panelContent'>
            {
              login
                ? <LoginForm login={handleLogin} error={error} />
                : <SignupForm register={handleRegistration} error={error} />
            }
            <div className='toggleForm'>
              <Typography>
                {
                  login
                    ? 'Doesn’t have an account yet?'
                    : 'Do you already have an account?'
                }

              </Typography>
              <Button color='secondary' onClick={toggleForms}>
                {
                  login
                    ? 'Join us :)'
                    : 'Login ;)'
                }
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='illustration-panel'>
        <div className='illustration'>
          <Popcorn />
        </div>
      </div>
    </div>
  )
}

export default Login
