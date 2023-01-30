import { createReducer, createAction } from '@reduxjs/toolkit';

export const ADD_BOOK = createAction('books/add');
export const REMOVE_BOOK = createAction('book/remove');

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
