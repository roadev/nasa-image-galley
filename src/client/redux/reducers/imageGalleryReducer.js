import actionTypes from '../actions/actionTypes';

const initialState = {
  items: [],
  itemsLoading: false,
};

export default function imageGalleryReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_ITEMS: {
      const parsed = action.items.map(item => ({
        img: item.links[0].href,
        title: item.data[0].title,
        description: item.data[0].description,
      }));
      return {
        ...state, items: parsed,
      };
    }

    case actionTypes.TOGGLE_ITEMS_LOADING:
      return {
        ...state, itemsLoading: !state.itemsLoading,
      };

    default:
      return initialState;
  }
}
