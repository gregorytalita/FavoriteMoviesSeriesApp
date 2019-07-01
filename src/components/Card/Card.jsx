import React from 'react'
import { ReactComponent as Remove } from '../../assets/remove.svg'
import { ReactComponent as Tv } from '../../assets/tv.svg'
import { ReactComponent as Movie } from '../../assets/movie.svg'
import { ReactComponent as Rate } from '../../assets/rate.svg'
import {
  makeStyles,
  Paper,
  Button,
  Typography
} from '@material-ui/core'
import './card.css'

const useStyles = makeStyles(() => ({
  button: {
    width: 142,
    height: 56,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}))

const Card = (props) => {
  const classes = useStyles()

  return (
    <Paper
      className='card'
      elevation={3}
      style={{ background: `url(https://image.tmdb.org/t/p/w300/${props.poster_path})` }}
    >
      <div className='cardOverlay' />

      <div className='cardRate'>
        <Typography style={{ color: '#fff' }}>
          <Rate /> {props.vote_average}
        </Typography>
        {
          props.media_type === 'tv'
            ? <Tv />
            : <Movie />
        }
      </div>

      <div className='cardContent'>
        <div className='cardInfo'>
          <Typography align='center'>
            <b>{props.title}</b>
          </Typography>
          <Typography>
            {props.release_date}
          </Typography>
        </div>
        <Button color='secondary' onClick={props.remove} className={classes.button}>
          <Remove /> Remove
        </Button>
      </div>

    </Paper>
  )
}

export default Card
