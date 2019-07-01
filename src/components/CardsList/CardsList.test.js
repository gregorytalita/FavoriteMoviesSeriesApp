import React from 'react'
import { create } from 'react-test-renderer'
import CardsList from './CardsList'

const ListData = [{
  media_type: 'movie',
  poster_path: '/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg',
  release_date: '2019-03-06',
  title: 'Captain Marvel',
  user: 'talitagregory@hotmail.com',
  vote_average: 7
}]

describe('CardsList component', () => {
  test('it matches the snapshot', () => {
    const component = create(<CardsList favorites={ListData} />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
