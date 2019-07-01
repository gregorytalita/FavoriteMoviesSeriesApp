import React from 'react'
import { Card } from '../'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  list: {
    width: '80%',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  }
}))

const CardsList = ({ favorites, removeFromFavorites }) => {
  const classes = useStyles()

  return (
    <div className={classes.list}>
      {
        favorites.map((favorite, index) => (
          <Card key={index} {...favorite} remove={() => removeFromFavorites(favorite)} />
        ))
      }
    </div>
  )
}

export default CardsList
