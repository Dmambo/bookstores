import { createReducer, createAction } from '@reduxjs/toolkit';

export const CHECK_STATUS = createAction('categories/check_status');

const initialState = {
  status: '',
};

const categoryReducer = createReducer(initialState, (construct) => {
  construct.addCase(CHECK_STATUS, (state) => {
    const newState = { ...state, status: 'Under Constraction' };

    return newState;
  });
  construct.addDefaultCase((state) => state);
});

export default categoryReducer;
