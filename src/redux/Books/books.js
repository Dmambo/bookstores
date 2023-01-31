import { createReducer } from '@reduxjs/toolkit';

export const ADD_BOOK = 'redux/Books/ADD_BOOK';
export const REMOVE_BOOK = 'redux/Books/REMOVE_BOOK';

const initialState = {
  books: [
    {
      id: '1',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
    },
    {
      id: '2',
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
    },
  ],
};

// Actions

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

// Reducer

const bookReducer = createReducer(initialState, {
  [ADD_BOOK]: (state, action) => {
    const newState = {
      ...state,
      books: [
        ...state.books,
        { ...action.payload, id: `${state.books.length + 1}` },
      ],
    };
    return newState;
  },
  [REMOVE_BOOK]: (state, action) => {
    const newState = {
      ...state,
      books: state.books.filter((book) => book.id !== action.payload),
    };
    return newState;
  },
});

export default bookReducer;
