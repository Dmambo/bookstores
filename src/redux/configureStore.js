import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './Api/api';
import categoryReducer from './Categories/category';

const store = configureStore({
  reducer: {
    books: bookSlice,
    categories: categoryReducer,
  },
});

export default store;
