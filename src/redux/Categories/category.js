import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  categories: '',
};

const categoryReducer = createReducer(initialState, (construct) => {
  construct.addCase('CHECK_STATUS', (state) => {
    const newStatus = [...state, { status: 'still under production' }];
    return newStatus;
  });
  construct.addDefaultCase((state) => state);
});

export default categoryReducer;
