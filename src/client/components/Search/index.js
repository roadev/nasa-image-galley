import React from 'react';
// import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
// import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import './styles.styl';

const Search = ({ search, searchInput, handleOnChange }) => (
  <form noValidate autoComplete="off" onSubmit={search} className="full-width search">
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className="input-container"
    >
      <Grid item xs={11}>
        <Input
          className="full-width input"
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
          value={searchInput}
          onChange={handleOnChange}
        />
      </Grid>
      <Grid item xs={1}>
        <IconButton type="submit" aria-label="search">
          <SearchIcon className="icon" />
        </IconButton>
      </Grid>
    </Grid>

  </form>
);

export default Search;
