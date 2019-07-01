import React, { useState } from 'react'
import {
  Typography,
  InputLabel,
  FormControl,
  Input,
  Button
} from '@material-ui/core'

import './signupForm.css'

const SignupForm = ({ register, error }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [match, handleMatch] = useState(true)

  const submit = () => {
    const validPass = password !== ''
    const validConfirm = confirmPassword !== ''

    if (validPass && validConfirm) {
      register({ email, password })
      handleMatch(false)
    } else {
      handleMatch(true)
    }
  }

  return (
    <>
      <Typography variant='h1' align='center' style={{ fontSize: 32 }}>
        Signup
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
        <FormControl error={error || !match}>
          <InputLabel htmlFor='password'>Password</InputLabel>
          <Input
            id='password'
            type='password'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            aria-describedby='password-text'
          />
        </FormControl>
        <FormControl error={error || !match}>
          <InputLabel htmlFor='confirm-password'>Confirm password</InputLabel>
          <Input
            id='confirm-password'
            type='password'
            value={confirmPassword}
            onChange={({ target }) => setConfirmPassword(target.value)}
            aria-describedby='confirm-password-text'
          />
        </FormControl>
      </div>
      <Button
        variant='outlined'
        color='secondary'
        onClick={submit}
        className='formButton'
      >
        Signup
      </Button>
    </>
  )
}

export default SignupForm
