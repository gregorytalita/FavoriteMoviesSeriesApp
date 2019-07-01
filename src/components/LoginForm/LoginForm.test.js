import React from 'react'
import { create } from 'react-test-renderer'
import LoginForm from './LoginForm'

describe('LoginForm component', () => {
  test('it matches the snapshot', () => {
    const component = create(<LoginForm />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
