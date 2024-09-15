import { createSlice } from '@reduxjs/toolkit';
import { FETCH_STATUS } from 'constants/fetchStatus';
import { logInThunk } from './auth.thunk';

const initialState = {
  access_token: null,
  token_type: null,
  status: FETCH_STATUS.Idle,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutAction: state => {
      state.access_token = null;
      state.token_type = null;
      state.status = FETCH_STATUS.Resolved;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(logInThunk.pending, state => {
        state.status = FETCH_STATUS.Loading;
      })
      .addCase(logInThunk.fulfilled, (state, { payload }) => {
        state.access_token = payload.access_token;
        state.token_type = payload.token_type;
        state.status = FETCH_STATUS.Resolved;
      })
      .addCase(logInThunk.rejected, (state, action) => {
        state.status = FETCH_STATUS.Rejected;
      });
  },
});

export const { logoutAction } = authSlice.actions;
export default authSlice.reducer;
