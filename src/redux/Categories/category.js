import { createReducer, createAction } from '@reduxjs/toolkit';

export const checkStatus = createAction('categories/checkStatus');

const initialState = {
  status: '',
};

const categoryReducer = createReducer(initialState, (builder) => {
  builder.addCase(checkStatus, (state) => {
    const nwState = { ...state, status: 'Under Construction' };

    return nwState;
  });
  builder.addDefaultCase((state) => state);
});

export default categoryReducer;
