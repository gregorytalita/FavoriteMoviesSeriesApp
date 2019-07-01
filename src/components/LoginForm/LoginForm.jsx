import React, { useState } from 'react'
import {
  Typography,
  InputLabel,
  FormControl,
  Input,
  Button
} from '@material-ui/core'
import './loginForm.css'

const LoginForm = ({ login, error }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <Typography variant='h1' align='center' style={{ fontSize: 32 }}>
        Login
      </Typography>
      <div className='formContent'>
        {
          error &&
          <Typography>
            Seems that you typed something wrong :c
          </Typography>
        }
        <FormControl error={error}>
          <InputLabel htmlFor='email'>Email</InputLabel>
          <Input
            id='email'
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            aria-describedby='email-text'
          />
        </FormControl>
        <FormControl error={error}>
          <InputLabel htmlFor='email'>Password</InputLabel>
          <Input
            id='password'
            type='password'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            aria-describedby='password-text'
          />
        </FormControl>
      </div>
      <Button
        variant='outlined'
        color='secondary'
        onClick={() => login({ email, password })}
        className='formButton'
      >
        Login
      </Button>
    </>
  )
}

export default LoginForm
