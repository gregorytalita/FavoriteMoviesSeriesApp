import React from 'react'
import { Typography, makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  navbar: {
    boxShadow: 'rgba(0, 0, 0, .16) 0px 6px 6px',
    width: '100%',
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  dashboard: {
    background: 'linear-gradient(to bottom, #F48087, #E75B64)',
    height: 20,
    padding: '16px 40px',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 68
  },
  logout: {
    position: 'absolute',
    right: 32
  }
}))

const Navbar = ({ logout }) => {
  const classes = useStyles()

  return (
    <div className={classes.navbar}>
      <div className={classes.dashboard}>
        <Typography>
          Dashboard
        </Typography>
      </div>
      <Button color='secondary' className={classes.logout} onClick={logout}>
        Logout
      </Button>
    </div>
  )
}

export default Navbar
