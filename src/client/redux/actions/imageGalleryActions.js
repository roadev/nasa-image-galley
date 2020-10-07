import { getItems } from '../../services/api';

const receiveItems = items => ({
  type: 'SET_ITEMS',
  items,
});

const toggleItemsLoading = () => ({
  type: 'TOGGLE_ITEMS_LOADING',
});

export function fetchItems(query) {
  return async (dispatch) => {
    dispatch(toggleItemsLoading());
    const items = await getItems(query);
    if (items.ok) {
      dispatch(receiveItems(items.data));
      dispatch(toggleItemsLoading());
    }
    console.log(items);
  };
}
