import React, { useState, useEffect } from 'react'
import { Navbar, NoContent, Search, CardsList } from '../../components'
import { makeStyles } from '@material-ui/core'
import appStore from '../../core/store/mainStore'

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4rem 2rem'
  }
}))

const Dashboard = ({ history }) => {
  const [favorites, handleFavorites] = useState([])
  const classes = useStyles()

  useEffect(() => {
    const userFavorites = appStore.favoritesSaved.filter(favorites => (
      favorites.user === appStore.profile.email
    ))
    handleFavorites(userFavorites)
  }, [])

  const addToFavorites = (obj) => {
    appStore.favoritesSaved = [...appStore.favoritesSaved, { ...obj, user: appStore.profile.email }]
    handleFavorites([...favorites, obj])
  }
  const removeFromFavorites = (obj) => {
    appStore.favoritesSaved = appStore.favoritesSaved.filter(favorite => favorite.title !== obj.title)
    handleFavorites(favorites.filter(favorite => favorite !== obj))
  }

  const handleLogout = () => {
    appStore.login = false
    appStore.profile = {}
    history.push('/')
  }

  return (
    <>
      <Navbar logout={handleLogout} />
      <div className={classes.wrapper}>
        <Search add={addToFavorites} />
        {
          favorites.length !== 0
            ? <CardsList favorites={favorites} removeFromFavorites={removeFromFavorites} />
            : <NoContent />
        }

      </div>
    </>
  )
}

export default Dashboard
