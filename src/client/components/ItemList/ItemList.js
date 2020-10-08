import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Item from '../Item/Item';

const ItemList = ({ items }) => {
  return (
    items.map(item => (
      <Grid item xs={12} md={4}>
        <Item {...item} />
      </Grid>
    ))
  );
};

ItemList.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.object,
  ]),
};

export default ItemList;
