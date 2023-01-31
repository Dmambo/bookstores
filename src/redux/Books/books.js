import { createReducer } from '@reduxjs/toolkit';

export const ADD_BOOK = 'bookstore/books/ADD_BOOK';
export const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = {
  books: [],
};

const bookReducer = createReducer(initialState, (construct) => {
  construct.addCase(ADD_BOOK, (state, action) => {
    state.books.push(action.payload);
  });
  construct.addCase(REMOVE_BOOK, (state, action) => {
    state.books.filter((book) => book.id !== action.payload);
  });
  construct.addDefaultCase((state) => state);
});

export default bookReducer;
