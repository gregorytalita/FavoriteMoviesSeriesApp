import React from 'react'
import { create } from 'react-test-renderer'
import { createMemoryHistory } from 'history'
import Dashboard from './'

describe('Dashboard functionality', () => {
  const history = createMemoryHistory('/dashboard')

  test('it shows the expected when logout button is clicked', () => {
    const component = create(<Dashboard history={history} />)
    const rootInstance = component.root
    const button = rootInstance.findByType('button')
    button.props.onClick()
    expect(window.location.pathname).toBe('/')
  })
})
