import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import ItemList from '../../components/ItemList/ItemList';
import Search from '../../components/Search';
// import DirectionsIcon from '@material-ui/icons/Directions';

// const useStyles = makeStyles(theme => ({
//   root: {
//     padding: '2px 4px',
//     display: 'flex',
//     alignItems: 'center',
//     width: 400,
//   },
//   input: {
//     marginLeft: theme.spacing(1),
//     flex: 1,
//   },
//   iconButton: {
//     padding: 10,
//   },
//   divider: {
//     height: 28,
//     margin: 4,
//   },
// }));

const Home = ({ fetchItems, imageGalleryData }) => {
  // const classes = useStyles();
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {

  }, []);

  const handleOnChange = (e) => {
    setSearchInput(e.target.value);
  };

  const search = (e) => {
    e.preventDefault();
    fetchItems(searchInput);
  };

  return (
    <section>
      <article>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={8} sm={6}>
            <Search search={search} handleOnChange={handleOnChange} />
          </Grid>
        </Grid>
        {/* <InputBase
          className={classes.input}
          placeholder="Search Google Maps"
          inputProps={{ 'aria-label': 'search google maps' }}
        /> */}
        {/* <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton> */}

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
