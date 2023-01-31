export const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const initialState = {
  categories: [],
};

// Actions

export const checkStatus = () => ({
  type: CHECK_STATUS.BOOK_STATUS_CHECK,
});

// Reducer

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS.BOOK_STATUS_CHECK:
      return {
        ...state,
        categories: [...state.categories, 'Under construction'],
      };
    default:
      return state;
  }
};

export default categoryReducer;
