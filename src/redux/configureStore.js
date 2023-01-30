import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './Books/books';
import categoryReducer from './Categories/category';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
  },
});

export default store;
