import axios from 'axios';
import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const apiurl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wpvYJWQOuKGfWfhfsjZe/books';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(apiurl);
  const { data } = response;
  const books = Object.entries(data).map(([key, value]) => {
    const { category, title, author } = value[0];
    return {
      id: key,
      title,
      author,
      category,
    };
  });
  return books;
});

export const addBook = createAsyncThunk(
  'books/addBook',
  async (payload, thunkAPI) => {
    await axios.post(apiurl, payload);
    return thunkAPI.dispatch(fetchBooks());
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (payload, thunkAPI) => {
    await axios.delete(`${apiurl}/${payload}`);
    return thunkAPI.dispatch(fetchBooks());
  },
);

// Reducer

const bookReducer = createReducer(initialState, {
  [fetchBooks.fulfilled]: (state, action) => {
    const newState = {
      ...state,
      books: action.payload,
    };
    return newState;
  },
});

export default bookReducer;
