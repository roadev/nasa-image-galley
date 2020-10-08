import React from 'react';
// import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
// import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import './styles.styl';

const Search = ({ search, searchInput, handleOnChange }) => (
  <form noValidate autoComplete="off" onSubmit={search} className="search">
    <Input
      placeholder="Search"
      inputProps={{ 'aria-label': 'search' }}
      value={searchInput}
      onChange={handleOnChange}
    />
    <IconButton type="submit" aria-label="search">
      <SearchIcon />
    </IconButton>
  </form>
);

export default Search;
