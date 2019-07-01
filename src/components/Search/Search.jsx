import React, { useState } from 'react'
import { ReactComponent as Add } from '../../assets/add.svg'
import {
  makeStyles,
  TextField,
  Paper,
  MenuItem
} from '@material-ui/core'

const useStyles = makeStyles(() => ({
  container: {
    flexGrow: 1,
    position: 'relative',
    width: '100%',
    maxWidth: 650,
    marginBottom: 40,
    zIndex: 99
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: 8,
    left: 0,
    right: 0,
    maxWidth: 650,
    maxHeight: 400,
    overflowY: 'scroll'
  },
  inputRoot: {
    flexWrap: 'wrap',
    width: '100%'
  }
}))

const renderSuggestion = (obj, index, add, searchValue) => (
  <MenuItem
    key={index}
    component='div'
    style={{
      fontWeight: 400,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
    onClick={() => {
      add(obj)
      searchValue('')
    }}
  >
    {obj.title}
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Add /> Add
    </div>
  </MenuItem>
)

const Search = ({ add }) => {
  const classes = useStyles()
  const [searchValue, handleSearchValue] = useState('')
  const [suggestions, handleSuggestions] = useState([])

  const getSuggestions = (value) => {
    handleSearchValue(value)
    if (searchValue) {
      fetch(`https://api.themoviedb.org/3/search/multi?api_key=a067f0fc0e33f09423e16ed48c8b5ce9&language=en-US&query=${searchValue}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(({ results }) => results.map(result => ({
          title: result.title,
          vote_average: result.vote_average,
          media_type: result.media_type,
          release_date: result.release_date,
          poster_path: result.poster_path
        })))
        .then(suggestions => suggestions.filter(suggestion => suggestion.title))
        .then(handleSuggestions)
    }
  }

  return (
    <div className={classes.container}>
      <TextField
        classes={{
          root: classes.inputRoot
        }}
        placeholder='Type what are you looking for…'
        onChange={({ target }) => getSuggestions(target.value)}
        variant='outlined'
        value={searchValue}
      />
      {
        (suggestions.length !== 0 && searchValue !== '') &&
        <Paper className={classes.paper} square>
          {
            suggestions.map((suggestion, index) => renderSuggestion(suggestion, index, add, handleSearchValue))
          }
        </Paper>
      }
    </div>
  )
}

export default Search
