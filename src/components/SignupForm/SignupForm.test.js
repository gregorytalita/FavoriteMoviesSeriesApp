import React from 'react'
import { create } from 'react-test-renderer'
import SignupForm from './SignupForm'

describe('SignupForm component', () => {
  test('it matches the snapshot', () => {
    const component = create(<SignupForm />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
