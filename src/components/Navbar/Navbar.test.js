import React from 'react'
import { create } from 'react-test-renderer'
import Navbar from './Navbar'

describe('Navbar component', () => {
  test('it matches the snapshot', () => {
    const component = create(<Navbar />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
