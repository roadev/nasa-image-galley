import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
// import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

import ItemList from '../../components/ItemList/ItemList';
// import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const Home = ({ fetchItems, imageGalleryData }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchItems('pluto');
  }, []);

  return (
    <section>
      <article>
        {/* <InputBase
          className={classes.input}
          placeholder="Search Google Maps"
          inputProps={{ 'aria-label': 'search google maps' }}
        /> */}
        {/* <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton> */}
        <form noValidate autoComplete="off">
          <Input placeholder="Search" inputProps={{ 'aria-label': 'search' }} />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </form>
      </article>
      <article>
        <Grid container>
          <ItemList items={imageGalleryData.items} />
        </Grid>

      </article>
    </section>
  );
};

Home.propTypes = {
  fetchItems: PropTypes.func.isRequired,
};

export default Home;
