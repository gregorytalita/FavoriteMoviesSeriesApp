import React from 'react'
import { create } from 'react-test-renderer'
import NoContent from './NoContent'

describe('NoContent component', () => {
  test('it matches the snapshot', () => {
    const component = create(<NoContent />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
