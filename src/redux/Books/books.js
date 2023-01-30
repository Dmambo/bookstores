import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const bookReducer = createReducer(initialState, (construct) => {
  construct.addCase('CREATE_BOOK', (state, action) => {
    state.books.push(action.payload);
  });
  construct.addCase('REMOVE_BOOK', (state, action) => {
    /* eslint-disable no-param-reassign */
    state.books = state.books.filter((book) => book.id !== action.payload);
  });
  construct.addDefaultCase((state) => state);
});

export default bookReducer;
