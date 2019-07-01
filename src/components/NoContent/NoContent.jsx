import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import { ReactComponent as None } from '../../assets/none.svg'

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: 600
  }
}))

const NoContent = () => {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <Typography variant='h2' align='center'>
        You didn’t add anything yet
      </Typography>
      <None />
    </div>
  )
}

export default NoContent
