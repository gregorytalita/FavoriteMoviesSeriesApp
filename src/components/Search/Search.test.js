import React from 'react'
import { create } from 'react-test-renderer'
import Search from './Search'

describe('Search component', () => {
  test('it matches the snapshot', () => {
    const component = create(<Search />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
